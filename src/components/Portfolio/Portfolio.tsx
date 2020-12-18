import React, { useRef } from 'react'
import { Box, Container, Flex, Grid, Heading } from 'theme-ui'
import { ProjectBox } from '../ProjectBox/ProjectBox'
import { itemsList } from './itemsList'

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
  return (
    <Container
      id="portfolio"
      sx={{
        position: 'relative',
        py: 4,
      }}
    >
      <Heading
        as="h3"
        variant="styles.h3"
        sx={{
          color: 'secondary',
          textAlign: 'center',
        }}
      >
        portfolio
      </Heading>
      <Flex sx={{ flexWrap: 'wrap', width: '100%' }}>
        {renderProjectBoxes()}
      </Flex>
    </Container>
  )
}
