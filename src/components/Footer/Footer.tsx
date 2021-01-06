import { transform } from 'framer-motion'
import React from 'react'
import { Box, Container, Flex, Heading, Link, Image } from 'theme-ui'
import { Logo } from '../Logo/Logo'
import { footerItems, greenyoga } from './footerItems'

export const Footer = (): JSX.Element => {
  return (
    <Container>
      <Flex
        id="footer"
        sx={{
          position: 'relative',
          flexDirection: 'column',
        }}
      >
        <Heading
          as="h3"
          variant="styles.h3"
          sx={{
            color: 'secondary',
            textAlign: 'center',
            mb: '20px',
            mt: '40px',
          }}
        >
          contact me
        </Heading>
        <Flex sx={{ justifyContent: 'center', mb: '50px' }}>
          {footerItems.map((footerItem, index) => (
            // eslint-disable-next-line react/jsx-key
            <Box key={footerItem.title}>
              <Flex
                sx={{
                  fontSize: '32px',
                }}
              >
                <Link
                  sx={{
                    color: 'text',
                    display: ['none', 'block'],
                    textDecoration: 'none',
                    fontSize: '32px',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.12)',
                    },
                  }}
                  href={footerItem.url}
                  target="_blank"
                >
                  {footerItem.title}
                </Link>
                {footerItems.length - 1 !== index && (
                  <Box
                    sx={{
                      mx: 4,
                      color: 'text',
                      fontWeight: 300,
                      display: ['none', 'block'],
                    }}
                  >
                    |
                  </Box>
                )}
              </Flex>
              <Link
                href={footerItem.url}
                sx={{
                  display: ['block', 'none'],
                  cursor: 'pointer',
                  m: 2,
                  p: 1,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.12)',
                  },
                }}
              >
                <Image
                  src={footerItem.image}
                  sx={{
                    height: '42px',
                  }}
                />
              </Link>
            </Box>
          ))}
        </Flex>
        <Heading
          as="h3"
          variant="styles.h3"
          sx={{
            color: 'secondary',
            textAlign: 'center',
            mb: '30px',
            fontWeight: 'body',
            transition: '0.3s',
          }}
        >
          & <br />
          join my yoga classes at{' '}
          <Link
            href={greenyoga.url}
            target="_blank"
            sx={{
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 'heading',
              transition: 'transform .2s',
              fontSize: 'inherit',
              '&:hover': {
                transform: 'scale(1.12)',
              },
            }}
          >
            Green Yoga
          </Link>
        </Heading>
        <Box
          sx={{
            justifyContent: 'center',
            textAlign: 'center',
            mb: '30px',
            transition: 'transform 0.4s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Logo variant="dark" />
        </Box>
      </Flex>
    </Container>
  )
}
