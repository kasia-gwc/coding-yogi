import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stories } from './stories-data'
import { Box, Grid, Heading, Image, Text } from 'theme-ui'

gsap.registerPlugin(ScrollTrigger)

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

  useEffect(() => {
    console.log('should print on render')
    const containerHtml = containerRef.current as HTMLDivElement
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerHtml, //we want the render to happen when it hits this div, the scroll takes over
        pin: true,
        start: 'top top', // we want the animation to start when the top of the element hist sthe top of the screen - 1st top is top of the div, 2nd is top of the screen
        end: window.innerHeight * stories.length, // we specifying when the scrollTrigger should end - after all the stories
        scrub: 0.5, //speed of the animation being slightly behind
        snap: {
          snapTo: 'labels',
        },
      },
    })
    const childBoxes: HTMLDivElement[] = Array.from(
      containerHtml.querySelectorAll('.story') //we convert it into an array as before it was giving a node list and we gave it a className 'story'
    )
    childBoxes.forEach((child, index) => {
      //it's for the animation part, we're iterating over the HTML to add an animation to each box
      const titleElement = child.querySelector('.title')
      const descElement = child.querySelector('.desc')
      const flowerElement = child.querySelector('img')
      tl.add(
        gsap.fromTo(
          titleElement,
          { autoAlpha: 0, y: '200%' },
          { autoAlpha: 1, y: 0, duration: 2 }
        ),
        index > 0 ? '-=0.5' : '0'
      )
        .add(
          gsap.fromTo(
            descElement,
            { autoAlpha: 0, y: '300%' },
            { autoAlpha: 1, y: 0, duration: 1 }
          ),
          '-=0.1'
        ) // animate title from the top
        // animate description from the bottom
        .add(gsap.to(flowerElement, { autoAlpha: 1 }), '<')
        .addLabel(`slide-${index}`)
      if (index !== stories.length - 1) {
        tl.add(gsap.to(titleElement, { autoAlpha: 0, y: '-250%', duration: 1 }))
          .add(gsap.to(descElement, { autoAlpha: 0, y: '-150%' }), '-=0.1')
          .add(gsap.to(flowerElement, { autoAlpha: 0 }))
      }
    })

    return () => {
      tl.kill()
    }
  }, [])
  return (
    <Box
      ref={containerRef}
      sx={{ position: 'relative', width: '100%', height: '100vh' }}
    >
      {stories.map(({ title, description, image }, index) => (
        <Grid
          className="story"
          sx={{
            gridTemplateColumns: '35% 1fr',
            height: '100vh',
            width: '100%',
            placeContent: 'center',
            position: 'absolute',
          }}
          key={`${title}-${index}`}
        >
          <Heading
            as="h3"
            variant="styles.h3"
            sx={{
              color: 'primary',
              position: 'absolute',
              textAlign: 'center',
              top: '65px',
              width: '100%',
            }}
          >
            curriculum vitae
          </Heading>
          <Box sx={{ placeSelf: 'center', width: 250, height: 250 }}>
            <Image src={image} sx={{ opacity: 0, visibility: 'hidden' }} />
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
              as="p"
              sx={{
                maxWidth: 400,
                transform: 'translateY(200%)',
                opacity: 0,
                visibility: 'hidden',
              }}
            >
              {description}
            </Text>
          </Box>
        </Grid>
      ))}
    </Box>
  )
}
