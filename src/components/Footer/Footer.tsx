import React from 'react'
import { Box, Container, Flex, Heading, Link, Image } from 'theme-ui'
import { Logo } from '../Logo/Logo'
import { footerItems } from './footerItems'

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
        <Box
          sx={{
            justifyContent: 'center',
            textAlign: 'center',
            transition: 'transform 0.4s',
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
        >
          <Logo variant="dark" />
        </Box>
        <Heading
          as="h3"
          variant="styles.h3"
          sx={{
            color: 'secondary',
            textAlign: 'center',
            mb: '20px',
          }}
        >
          contact me
        </Heading>
        <Flex sx={{ justifyContent: 'center', mb: '70px' }}>
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

              <Image
                src={footerItem.image}
                sx={{
                  height: '42px',
                  color: 'turquoise',
                  m: 2,
                  p: 1,
                  display: ['block', 'none'],
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.12)',
                  },
                }}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}
