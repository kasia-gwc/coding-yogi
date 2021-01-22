/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useRef } from 'react'
import { Box, Container, Grid, Heading, Image, Text, Link } from 'theme-ui'
import { itemsList } from '../Portfolio/itemsList'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Projects = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const containerHTML = containerRef.current as HTMLDivElement
    const heading = containerHTML.querySelector('#heading')
    const project = containerHTML.querySelectorAll('.project')
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerHTML,
        start: 'top 80%',
      },
    })
    tl.fromTo(heading, { autoAlpha: 0, x: '-20%' }, { autoAlpha: 1, x: '0%' })
    tl.add(
      gsap.fromTo(
        project,
        {
          autoAlpha: 0,
          x: '-10%',
          scale: 0.8,
        },
        { autoAlpha: 1, x: '0%', scale: 1, stagger: 0.3 }
      ),
      '+=0.5'
    )
  }, [])
  return (
    <Container id="projects" ref={containerRef} sx={{ mb: 5 }}>
      <Heading
        id="heading"
        as="h3"
        variant="styles.h3"
        sx={{
          color: 'primary',
          textAlign: 'left',
          width: '100%',
          mb: 5,
          fontSize: ['80px', '125px'],
          fontWeight: 'body',
          marginLeft: 'auto',
        }}
      >
        projects
      </Heading>
      <Grid
        sx={{
          width: '100%',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gap: '3rem',
          justifyItems: 'center',
          textAlign: 'center',
        }}
      >
        {itemsList.map((project, index) => {
          const isNotFirstChild = index > 0
          return (
            <Box
              className="project"
              key={project.title}
              sx={{
                gridRow: ['initial', index + 1],
                gridColumn: ['initial', (index + 1) % 2 === 0 ? 2 : 1],
                mt: [
                  'initial',
                  isNotFirstChild ? '-40%' : '0%',
                  isNotFirstChild ? '-30%' : '0%',
                  isNotFirstChild ? '-20%' : '0%',
                ],
                position: 'relative',
                maxWidth: ['100%', 350, 500],
                height: 330,
                '&:hover': {
                  '.white-box': {
                    opacity: 1,
                    visibility: 'visible',
                  },
                  '.project-title': {
                    opacity: 1,
                    visibility: 'visible',
                  },
                },
              }}
            >
              <Link href={project.url} target="_blank">
                <Image
                  className="projectBox"
                  src={project.image}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                ></Image>
                <Box
                  className="white-box"
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    border: '0.5px solid',
                    borderColor: 'gray',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                    opacity: 0,
                    transition: 'opacity 0.4s',
                  }}
                >
                  <Text
                    as="h2"
                    className="project-title"
                    sx={{
                      opacity: 0,
                      whiteSpace: 'nowrap',
                      fontWeight: 'body',
                      color: 'primary',
                    }}
                  >
                    {project.title}
                  </Text>

                  <Text
                    sx={{
                      fontSize: '1.2rem',
                      color: 'black',
                      display: 'block',
                    }}
                  >
                    {project.description}
                  </Text>
                </Box>
              </Link>
            </Box>
          )
        })}
      </Grid>
    </Container>
  )
}
