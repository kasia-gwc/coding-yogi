import React, { useEffect, useRef } from 'react'
import { Text, Heading, Container, Flex, Box } from 'theme-ui'
import { Carousel } from '../Carousel/Carousel'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const About = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const containerHTML = containerRef.current as HTMLDivElement
    if (containerRef.current) {
      const aboutContent = containerRef.current.querySelector('.about-content')
      const carousel = containerRef.current.querySelector('.carousel')
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power1.in',
        },
        scrollTrigger: {
          trigger: containerHTML, //it's where we begin the trigger in the view
          start: 'top 80%',
          // once: true,
          markers: true,
        },
      })
      tl.fromTo(
        aboutContent,
        { autoAlpha: 0, y: '35%' },
        { autoAlpha: 1, y: '0%' }
      ).fromTo(
        carousel,
        { autoAlpha: 0, y: '35%' },
        { autoAlpha: 1, y: '0%' },
        0.5
      )
    }
  }, [])
  return (
    <Container id="about" ref={containerRef}>
      <Heading
        as="h3"
        variant="styles.h3"
        sx={{
          color: 'primary',
        }}
      >
        about me
      </Heading>
      <Flex
        sx={{
          justifyContent: 'center',
        }}
      >
        <Text
          className="about-content"
          as="p"
          variant="styles.p"
          sx={{
            maxWidth: ['100%', '36%', 'auto'],
            textAlign: 'center',
          }}
        >
          If I don’t sit cross-legged I salute the sun. I walk barefoot feeling
          the earth beneath & grounding myself. I take every breath with
          gratitude to my life journey. Somewhere between unpacking my backpack
          and saving another album from my travels, I decided to combine my need
          for stimulation, movement and cultural education with learning coding.
          I have found ultimate fulfilment in creativity of the frontend and
          grounding with raw coding principles.
        </Text>
        <Box
          className="carousel"
          sx={{
            maxWidth: [450, null, '100%'],
            height: '100%',
            maxHeight: 450,
            width: ['100%', '58%'],
            ml: 'auto',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Carousel />
        </Box>
      </Flex>
    </Container>
  )
}
