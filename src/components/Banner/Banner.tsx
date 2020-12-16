import React from 'react'
import { Box, Image, Flex, Heading } from 'theme-ui'

export const Banner = (): JSX.Element => {
  return (
    <Flex
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        '&:after': {
          content: "''",
          position: 'absolute',
          height: '100%',
          width: '100%',
          background:
            'linear-gradient(180deg, rgba(46,196,182,0.47) 10%, rgba(255,255,255,0.004639355742296902) 40%)',
        },
      }}
    >
      <Image
        src="/image/desert.jpg"
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: ['26% 0%', '0% 40%'],
        }}
      ></Image>
      <Box
        sx={{
          position: 'absolute',
          width: ['100%', 'auto'],
          bottom: '10%',
          textAlign: 'center',
          right: ['0%', '12%'],
          'h1, h2': { color: 'background' },
        }}
      >
        <Heading as="h1" variant="styles.h1">
          KASIA GAWEŁKO
        </Heading>
        <Heading as="h2" variant="styles.h2">
          &apos;Coding Yogi&apos;
        </Heading>
      </Box>
    </Flex>
  )
}
