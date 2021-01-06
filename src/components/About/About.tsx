import React, { useEffect, useRef } from 'react'
import { Text, Heading, Container, Grid, Image, Box } from 'theme-ui'
// import { Carousel } from '../Carousel/Carousel'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const About = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const containerHTML = containerRef.current as HTMLDivElement
    if (containerRef.current) {
      const heading = containerRef.current.querySelector('#heading')
      const aboutContent = containerRef.current.querySelector('.about-content')
      const aboutPicture = containerRef.current.querySelector('.about-picture')
      const tl = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: 'power1.out',
        },
        scrollTrigger: {
          trigger: containerHTML, //it's where we begin the trigger in the view
          start: 'top 80%',
          // once: true,
        },
      })
      tl.fromTo(heading, { autoAlpha: 0, x: '-10%' }, { autoAlpha: 1, x: '0%' })
        .fromTo(
          aboutContent,
          { autoAlpha: 0, y: '35%' },
          { autoAlpha: 1, y: '0%' }
        )
        .fromTo(
          aboutPicture,
          { autoAlpha: 0, y: '35%' },
          { autoAlpha: 1, y: '0%' },
          0.5
        )
    }
  }, [])
  return (
    <Container
      id="about"
      ref={containerRef}
      sx={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading
          id="heading"
          sx={{
            color: 'primary',
            mb: 4,
            textAlign: 'left',
            fontWeight: 'body',
            fontSize: ['80px', '125px'],
          }}
        >
          about me
        </Heading>
        <Box
          className="about-content"
          sx={{
            maxWidth: ['100%', '550px'],
            textAlign: 'left',
            marginLeft: 'auto',
            marginBottom: 5,
          }}
        >
          <Text as="p" variant="styles.p">
            Hello, you!
          </Text>
          <Text as="p" variant="styles.p">
            Thanks for dropping by! I’m Kasia - psychology graduate & people
            person, avid traveller & yoga teacher, currently shifting my career
            into web development.
          </Text>
          <Text as="p" variant="styles.p">
            Welcome to my space. I invite you to relax your shoulders, take a
            deep breath in -- hold on top and exhale all the tension. Now scroll
            down to see my work and my story.
          </Text>
        </Box>
      </Box>
      <Image
        src="/image/GY.jpg"
        className="about-picture"
        sx={{
          maxWidth: '650px',
          width: '100%',
          mr: 'auto',
        }}
      >
        {/* <Carousel /> */}
      </Image>
    </Container>
  )
}
