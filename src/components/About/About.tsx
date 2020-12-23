import React from 'react'
import { Text, Heading, Container, Flex, Box } from 'theme-ui'
import { Carousel } from '../Carousel/Carousel'

export const About = (): JSX.Element => {
  return (
    <Container id="about">
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
