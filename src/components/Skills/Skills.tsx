/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment, useEffect, useRef } from 'react'
import { Container, Grid, Heading, Text, Box } from 'theme-ui'
import { skillsItems } from './skillsItems'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Skills = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerHTML = containerRef.current as HTMLDivElement
    const heading = containerHTML.querySelector('#heading')
    const department = containerHTML.querySelectorAll('.department')
    const tech = containerHTML.querySelectorAll('.tech')
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerHTML,
        start: 'top 80%',
      },
    })
    tl.fromTo(heading, { autoAlpha: 0, x: '20%' }, { autoAlpha: 1, x: '0%' })
    tl.add(
      gsap.fromTo(
        department,
        {
          autoAlpha: 0,
          x: '-10%',
        },
        { autoAlpha: 1, x: '0%', stagger: 0.2 }
      )
    ).add(
      gsap.fromTo(
        tech,
        {
          autoAlpha: 0,
          x: '10%',
        },
        { autoAlpha: 1, x: '0%', stagger: 0.2 }
      ),
      '-=0.5'
    )
  }, [])
  return (
    <Container id="skills" ref={containerRef}>
      <Heading
        id="heading"
        sx={{
          color: 'secondary',
          my: 5,
          width: '100%',
          textAlign: 'right',
          fontWeight: 'body',
          fontSize: ['80px', '125px'],
        }}
      >
        skills
      </Heading>
      <Grid
        className="technologies"
        sx={{
          gridTemplateColumns: ['1fr', '58% 1fr'],
          width: '100%',
          textAlign: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {skillsItems.map((department) => {
          return (
            <Fragment key={department.title}>
              <Box className="department" sx={{ width: '100%' }}>
                <Text
                  sx={{
                    fontSize: ['2rem', '3rem', '4rem'],
                    textAlign: 'right',
                    lineHeight: 1,
                    display: 'block',
                    mr: 3,
                  }}
                  key={department.title}
                >
                  {department.title}
                </Text>
              </Box>
              <Box
                className="tech"
                sx={{
                  display: 'flex',
                  fontSize: '1.2rem',
                  flexWrap: 'wrap',
                  textAlign: 'left',
                }}
              >
                {department.skills.map((skill) => (
                  <Text sx={{ mr: 3 }} key={skill}>
                    {skill}
                  </Text>
                ))}
              </Box>
            </Fragment>
          )
        })}
      </Grid>
    </Container>
  )
}
