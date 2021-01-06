import React, { useEffect, useRef } from 'react'
import { Container, Flex, Heading } from 'theme-ui'
import { ProjectBox } from '../ProjectBox/ProjectBox'
import { itemsList } from './itemsList'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Portfolio = (): JSX.Element => {
  const counterRef = useRef(0)

  const renderProjectBoxes = (): JSX.Element[] => {
    let width = '64%'
    counterRef.current = 0
    return itemsList.map((item, index) => {
      const counter = counterRef.current

      if (index > 0) {
        if (counter === 0) {
          width = width === '64%' ? '34%' : '64%'
        }
        counterRef.current = counter + 1
        if (counter + 1 === 2) {
          counterRef.current = 0
        }
      }
      return <ProjectBox key={item.url} {...item} width={width} /> // 0 65%, 1 35%, 2 35%, 3 65%,
    })
  }
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const containerHTML = containerRef.current as HTMLDivElement
    if (containerRef.current) {
      const boxes: HTMLDivElement[] = Array.from(
        containerRef.current.querySelectorAll('.project-card')
      )
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerHTML,
          start: 'top center',
        },
      })
      boxes.forEach((box, index) => {
        if (index % 2 === 0) {
          //equality and type check - always triple '='
          tl.fromTo(
            box,
            { autoAlpha: 0, x: '-15%' },
            { autoAlpha: 1, x: '0%' },
            '0'
          )
        } else {
          tl.fromTo(
            box,
            { autoAlpha: 0, x: '15%' },
            { autoAlpha: 1, x: '0%' },
            '0'
          )
        }
      })
    }
  }, [])
  return (
    <Container
      ref={containerRef}
      id="portfolio"
      sx={{
        position: 'relative',
        mb: 6,
      }}
    >
      <Heading
        as="h3"
        variant="styles.h3"
        sx={{
          color: 'secondary',
          textAlign: 'center',
          mb: 5,
        }}
      >
        projects
      </Heading>
      <Flex sx={{ flexWrap: 'wrap', width: '100%' }}>
        {renderProjectBoxes()}
      </Flex>
    </Container>
  )
}
