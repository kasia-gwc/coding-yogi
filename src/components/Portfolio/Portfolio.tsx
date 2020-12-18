import React from 'react'
import { Box, Flex, Heading } from 'theme-ui'
import { itemsList } from './itemsList'

export const Portfolio = (): JSX.Element => {
  return (
    <Flex
      id="portfolio"
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
      }}
      >
      <Heading
        as="h3"
        variant="styles.h3"
        sx={{
          position: 'absolute',
          color: 'secondary',
          top: '10%',
          right: '45%',
        }}
        >
        portfolio
      </Heading>
      <Box>
      </Box>
    </Flex>
  )
}
