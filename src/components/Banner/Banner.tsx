import React from 'react'
import { Box, Flex, Heading } from 'theme-ui'
import Img from 'gatsby-image/withIEPolyfill'
import { StaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import theme from '../../gatsby-plugin-theme-ui'

export const Banner = (): JSX.Element => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints[1]})`,
  })
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
                fluid(quality: 100) {
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
            objectFit="cover"
            objectPosition={isMobile ? '26% 0%' : '0% 44%'}
            style={{
              height: '100%',
              width: '100%',
            }}
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
