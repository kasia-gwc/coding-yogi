import React from 'react'
import { Box, Container, Flex, Heading, Link, Image, Text } from 'theme-ui'
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
          width: '100%',
        }}
      >
        <Box>
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
            Join my yoga classes at{' '}
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
                  transform: 'scale(1.1)',
                },
              }}
            >
              Green Yoga
            </Link>
          </Heading>
          <Box
            sx={{
              fontSize: '2rem',
              color: 'text',
              fontWeight: 'body',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            &
          </Box>
        </Box>
        <Heading
          sx={{
            color: 'primary',
            textAlign: 'center',
            my: '20px',
            fontSize: ['3rem', '6.25rem'],
            fontWeight: 'body',
          }}
        >
          contact me
        </Heading>
        <Flex sx={{ justifyContent: 'center', mb: '30px' }}>
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
                  // m: 2,
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
                    height: '38px',
                  }}
                />
              </Link>
            </Box>
          ))}
        </Flex>

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
      <Text sx={{ fontSize: '1rem', mb: '1rem' }}>
        Created with 🖤 by Kasia
      </Text>
    </Container>
  )
}
