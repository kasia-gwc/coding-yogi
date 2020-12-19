import React from 'react'
import { Text, Image, Heading, Container, Flex } from 'theme-ui'

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
      <Flex sx={{ justifyContent: 'center' }}>
        <Text
          as="p"
          variant="styles.p"
          sx={{
            maxWidth: ['30%', 'auto'],
            textAlign: 'center',
          }}
        >
          If I don’t sit cross-legged I salute the sun. I walk barefoot feeling
          the earth beneath & grounding myself. I take every breath with
          gratitude to my life journey. Somewhere between unpacking my backpack
          and saving another album from my travels, I decided to combine my
          passion for change, movement and cultural education to learn coding to
          hold on to freedom to move and need of fulfilment.
        </Text>
        <Image
          src="/image/kerala.jpg"
          sx={{
            maxWidth: [450, null, '100%'],
            objectFit: 'cover',
            height: '100%',
            objectPosition: 'center center',
            ml: 6,
          }}
        ></Image>
      </Flex>
    </Container>
  )
}
