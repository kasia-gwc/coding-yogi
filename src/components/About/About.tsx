import React from 'react'
import { Box, Image, Flex, Heading } from 'theme-ui'

export const About = (): JSX.Element => {
  return (
    <Flex
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
          color: 'primary',
          top: '10%',
          right: '45%',
        }}
      >
        about me
      </Heading>
      <Box
        sx={{
          position: 'absolute',
          maxWidth: ['35%', 'auto'],
          bottom: '18%',
          textAlign: 'center',
          left: ['40%', '10%'],
          p: { color: 'background' },
        }}
      >
        If I don’t sit cross-leged I salute the sun. I walk barefoot feeling the
        earth beneath & grounding myself. I take every breath with grattitude to
        my life journey. Somewhere between unpacking my backpack and saving
        another album from my travels I decided to combine my passion for
        change, movement and cultural education to learn coding to keep my
        freedom and need for fulfillment.
      </Box>
      <Image
        src="/image/kerala.jpg"
        sx={{
          position: 'absolute',
          maxWidth: '30%, auto',
          maxHeight: '55%',
          bottom: '18%',
          right: '12%',
        }}
      ></Image>
    </Flex>
  )
}
