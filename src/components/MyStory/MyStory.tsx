import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stories } from './stories-data'
import { Box, Container, Grid, Heading, Image, Text } from 'theme-ui'
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
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  '<h3>' +
                    story.title +
                    `</h3><img class="img" src="${story.picture}"/>`
                )
            )
            .addTo(mapRef.current)
        }
      })
    }
  }, [isMobile])
  useEffect(() => {
    setTimeout(() => {
      const containerHtml = containerRef.current as HTMLDivElement
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerHtml, //we want the render to happen when it hits this div, the scroll takes over
          pin: true,
          start: 'top top', // we want the animation to start when the top of the element hist sthe top of the screen - 1st top is top of the div, 2nd is top of the screen
          end: window.innerHeight * stories.length, // we specifying when the scrollTrigger should end - after all the stories
          scrub: 1, //speed of the animation being slightly behind
          snap: {
            duration: {
              min: 0.25,
              max: 0.25,
            },
            ease: 'linear' as any,
            snapTo: 'labels',
          },
        },
      })

      const storyBoxes: HTMLDivElement[] = Array.from(
        containerHtml.querySelectorAll('.story') //we convert it into an array as before it was giving a node list and we gave it a className 'story'
      )
      storyBoxes.forEach((child, index) => {
        //it's for the animation part, we're iterating over the HTML to add an animation to each box
        const titleElement = child.querySelector('.title')
        const descElement = child.querySelector('.desc')
        const flowerElement = child.querySelector('img')
        const lat = parseFloat(child.dataset.lat || '0')
        const lng = parseFloat(child.dataset.lng || '0')
        tl.add(
          gsap.fromTo(
            titleElement,
            { autoAlpha: 0, y: '200%' },
            {
              autoAlpha: 1,
              y: 0,
              duration: 2,
              onStart: () => flyTo(lat, lng),
            }
          ),
          index > 0 ? '-=0.5' : '0'
        ).add(
          // animate description from the bottom
          gsap.fromTo(
            descElement,
            { autoAlpha: 0, y: '300%' },
            { autoAlpha: 1, y: 0, duration: 1 }
          ),
          '-=0.1'
        )
        if (index > 0) {
          tl.add(
            gsap.to(containerHtml.querySelector(`.image-${index - 1}`), {
              autoAlpha: 0,
              onReverseComplete: () =>
                flyTo(
                  storyBoxes[index - 1].dataset.lat as any,
                  storyBoxes[index - 1].dataset.lng as any
                ),
            }),
            '<'
          )
        }
        tl.add(
          gsap.to(flowerElement, {
            autoAlpha: 1,
          }),
          '<'
        ).addLabel(`slide-${index}`)
        if (index !== stories.length - 1) {
          tl.add(
            gsap.to(titleElement, { autoAlpha: 0, y: '-250%', duration: 1 })
          ).add(gsap.to(descElement, { autoAlpha: 0, y: '-150%' }), '-=0.1')
        }
      })
    }, 500)
  }, [])

  return (
    <Container
      id="my-story"
      ref={containerRef}
      sx={{ position: 'relative', width: '100%', height: '100vh' }}
    >
      <Box
        sx={{
          height: ['calc(100vh * 0.4)', '100vh'],
          position: 'absolute',
          width: ['100%', '40%'],
          right: 0,
          bottom: 0,
          zIndex: 99999,
          '.mapboxgl-ctrl': {
            display: 'none !important',
          },
        }}
      >
        <Box
          ref={mapRefEl}
          id="map"
          sx={{ height: ['calc(100vh * 0.40)', '100vh'], width: '100%' }}
        />
      </Box>
      {stories.map(({ title, description, image, pin }, index) => (
        <Grid
          className="story"
          data-lat={pin.lat}
          data-lng={pin.lng}
          sx={{
            gridTemplateColumns: ['1fr', '20% 35% 45%'],
            height: ['60vh', '100vh'],
            width: '100%',
            placeContent: ['start', 'center'],
            position: 'absolute',
            top: ['2.5rem', '2rem'],
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
                position: 'absolute',
                textAlign: ['center', 'left'],
                top: '0',
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
            <Image
              className={`image-${index}`}
              src={image}
              sx={{ opacity: 0, visibility: 'hidden' }}
            />
          </Box>
          <Box
            sx={{ textAlign: ['center', 'left'], maxWidth: 300, mx: 'auto' }}
          >
            <Heading
              className="title"
              as="h3"
              variant="styles.h3"
              sx={{
                transform: 'translateY(200%)',
                opacity: 0,
                visibility: 'hidden',
              }}
            >
              {title}
            </Heading>
            <Text
              className="desc"
              dangerouslySetInnerHTML={{ __html: description }}
              as="p"
              sx={{
                b: { fontWeight: 'bold' },
                maxWidth: 400,
                transform: 'translateY(200%)',
                opacity: 0,
                visibility: 'hidden',
              }}
            ></Text>
          </Box>
        </Grid>
      ))}
    </Container>
  )
}
