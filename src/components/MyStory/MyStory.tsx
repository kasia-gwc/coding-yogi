import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stories } from './stories-data'
import { Box, Container, Flex, Grid, Heading, Image, Text } from 'theme-ui'
import mapboxgl from 'mapbox-gl'
import { useMediaQuery } from 'react-responsive'
import theme from '../../gatsby-plugin-theme-ui'
gsap.registerPlugin(ScrollTrigger)

/**
 * 1. render all the boxes (divs) and match the desig to reflect Figma with a proper division on how it will look on the website
 * 1.a mapping over the stories data to render two boxes (one for an image and one for the text) in a grid
 * 2. import gsap and register ScrollTrigger
 * 3. to make gsap work we need an HTML element so we used useRef and initiated as null (always do it)
 * 4. when no 1 happens then null in no 3. will be automatically assigned to the ref we specified in the JSX
 * [.current - when you want to access the value]
 * 5. when we want to access the value of the HTML container (here containerRef) we need to use .current and then save it in the new const 'containerHTML' and give the type of the element for TS HTMLDivElement
 * 6. we're initiating a timeline and a scrollTrigger inside the timeline and saved the reference of the timeline in the const 'tl' and gave some attributes to scrollTrigger
 * we put the code inside the useEffect so that the rendering part is taking place before the logic takes place
 */

export const MyStory = (): JSX.Element => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints[1]})`,
  })
  const mapRefEl = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map>()
  const flyTo = (lat: number, lng: number) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [lat, lng],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        speed: 0.8, // camera speed
        curve: 0.5, // controls the zoom
      })
    }
  }
  useEffect(() => {
    const containerHTML = containerRef.current as HTMLDivElement
    const heading = containerHTML.querySelector('#heading')
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerHTML,
        start: 'top 80%',
      },
    })
    tl.fromTo(
      heading,
      { autoAlpha: 0, x: '-20%' },
      { autoAlpha: 1, x: '0%' },
      0
    )
  })

  useEffect(() => {
    if (!mapRef.current) {
      mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN as string

      mapRef.current = new mapboxgl.Map({
        container: mapRefEl.current as any,
        style: 'mapbox://styles/kasia-msg/ckjbt8a62jn2l1at462glaz06', // stylesheet location
        center: [51.93, 20.39], // starting position [lng, lat]
        zoom: isMobile ? 2 : 3, // starting zoom
        interactive: false,
      })

      stories.forEach((story) => {
        const el = document.createElement('div')
        el.className = 'marker'
        el.style.backgroundImage = 'url(/image/logo-marker.svg)'
        el.style.backgroundSize = '50px 25px'
        el.style.boxShadow = '-9px 11px 22px -4px rgba(158,155,158,1)'
        el.style.backgroundRepeat = 'no-repeat'
        el.style.backgroundColor = '#FF9F1C'
        el.style.backgroundPosition = 'center center'
        el.style.borderRadius = '50%'
        el.style.width = '40px'
        el.style.height = '40px'

        if (mapRef.current) {
          new mapboxgl.Marker(el)
            .setLngLat([story.pin.lat, story.pin.lng])
            .addTo(mapRef.current)
        }
      })
    }
  }, [isMobile])

  useEffect(() => {
    window.onload = () => {
      const containerHtml = containerRef.current as HTMLDivElement
      const mapContainerHtml = containerRef.current?.querySelector(
        '.map-container'
      ) as HTMLElement
      const storyBoxes: HTMLDivElement[] = Array.from(
        containerHtml.querySelectorAll('.story') //we convert it into an array as before it was giving a node list and we gave it a className 'story'
      )

      storyBoxes.forEach((story, index) => {
        const lat = parseFloat(story.dataset.lat || '0')
        const lng = parseFloat(story.dataset.lng || '0')
        ScrollTrigger.create({
          trigger: story,
          start: 'top top',
          end: 'bottom bottom',
          onEnter: () => flyTo(lat, lng),
          onEnterBack: () => flyTo(lat, lng),
        })
      })
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: containerHtml,
          pin: mapContainerHtml,
          start: 'top top',
          end: 'bottom bottom',
          pinSpacing: false,
        })
      }, 1000)
    }
  }, [])

  return (
    <Container
      id="my-story"
      ref={containerRef}
      sx={{ position: 'relative', width: '100%', height: '100%', mb: 12 }}
    >
      <Grid sx={{ gridTemplateColumns: '1fr 1fr' }}>
        <Box>
          {stories.map(({ title, description, image, pin }, index) => (
            <Grid
              className="story"
              data-lat={pin.lat}
              data-lng={pin.lng}
              sx={{
                height: '100vh',
                width: '100%',
                placeContent: ['start'],
                zIndex: 1,
                bg: 'transparent',
              }}
              key={`${title}-${index}`}
            >
              {index === 0 && (
                <Heading
                  as="h3"
                  id="heading"
                  variant="styles.h3"
                  sx={{
                    color: 'secondary',
                    textAlign: ['center', 'left'],
                    width: '100%',
                    fontSize: ['3rem', '6.25rem'],
                    fontWeight: 'body',
                    mt: 0,
                  }}
                >
                  my story
                </Heading>
              )}
              <Box
                sx={{
                  placeSelf: 'center',
                  width: [100, 150, 250],
                  height: [50, 150, 250],
                  mt: ['3.5rem', '1.5rem'],
                }}
              >
                <Image className={`image-${index}`} src={image} />
              </Box>
              <Box
                sx={{
                  textAlign: ['center', 'left'],
                  maxWidth: 300,
                  mx: 'auto',
                }}
              >
                <Heading className="title" as="h3" variant="styles.h3" sx={{}}>
                  {title}
                </Heading>
                <Text
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: description }}
                  as="p"
                  sx={{
                    b: { fontWeight: 'bold' },
                    maxWidth: 400,
                  }}
                ></Text>
              </Box>
            </Grid>
          ))}
        </Box>

        <Box
          className="map-container"
          sx={{
            width: ['100%'],
            height: '100%',
            maxWidth: 500,
            zIndex: 99999,
            '.mapboxgl-ctrl': {
              display: 'none !important',
            },
          }}
        >
          <Flex sx={{ height: '100vh', alignItems: 'center' }}>
            <Box
              ref={mapRefEl}
              id="map"
              sx={{ height: ['calc(100vh * 0.40)', '50vh'], width: '100%' }}
            />
          </Flex>
        </Box>
      </Grid>
    </Container>
  )
}
