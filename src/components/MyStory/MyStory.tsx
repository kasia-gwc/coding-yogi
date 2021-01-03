import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stories } from './stories-data'
import { Box, Grid, Heading, Image, Text } from 'theme-ui'
import mapboxgl from 'mapbox-gl'
gsap.registerPlugin(ScrollTrigger)

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN as string

export const MyStory = (): JSX.Element => {
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
    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kasia-msg/ckjbt8a62jn2l1at462glaz06', // stylesheet location
        center: [51.93, 20.39], // starting position [lng, lat]
        zoom: 4, // starting zoom
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
  }, [])
  useEffect(() => {
    const containerHtml = containerRef.current as HTMLDivElement
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerHtml, //we want the render to happen when it hits this div, the scroll takes over
        pin: true,
        start: 'top top', // we want the animation to start when the top of the element hist sthe top of the screen - 1st top is top of the div, 2nd is top of the screen
        end: window.innerHeight * stories.length, // we specifying when the scrollTrigger should end - after all the stories
        scrub: 1, //speed of the animation being slightly behind
        snap: {
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

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Box
      id="my-story"
      ref={containerRef}
      sx={{ position: 'relative', width: '100%', height: '90vh' }}
    >
      <Box
        sx={{
          height: '80vh',
          position: 'absolute',
          width: '40%',
          right: 0,
          '.mapboxgl-ctrl': {
            display: 'none !important',
          },
        }}
      >
        <Box id="map" sx={{ height: '100vh', width: '100%' }} />
      </Box>
      {stories.map(({ title, description, image, pin }, index) => (
        <Grid
          className="story"
          data-lat={pin.lat}
          data-lng={pin.lng}
          sx={{
            gridTemplateColumns: '20% 35% 40%',
            height: '100vh',
            width: '100%',
            placeContent: 'center',
            position: 'absolute',
            zIndex: 1,
            bg: 'transparent',
          }}
          key={`${title}-${index}`}
        >
          {index === 0 && (
            <Heading
              as="h3"
              variant="styles.h3"
              sx={{
                color: 'primary',
                position: 'absolute',
                textAlign: 'center',
                top: ['0', '60px'],
                width: '100%',
              }}
            >
              my story...
            </Heading>
          )}
          <Box sx={{ placeSelf: 'center', width: 250, height: 250 }}>
            <Image
              className={`image-${index}`}
              src={image}
              sx={{ opacity: 0, visibility: 'hidden' }}
            />
          </Box>
          <Box>
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
    </Box>
  )
}
