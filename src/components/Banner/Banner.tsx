import React from 'react'
import { Box, Image, Flex, Heading } from 'theme-ui'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

export const Banner = (): JSX.Element => {
  return (
    <Flex
      id="banner"
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
      <StaticQuery
        query={graphql`
          {
            file(relativePath: { eq: "desert.jpg" }) {
              childImageSharp {
                fluid(quality: 80) {
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        `}
        render={(data) => (
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ height: '100%', width: '100%' }}
          />
        )}
      />

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
