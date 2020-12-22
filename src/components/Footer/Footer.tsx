import React, { FunctionComponent } from 'react'
import { Box, Container, Flex, Heading, Link } from 'theme-ui'
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
            <Flex
              sx={{
                fontSize: '32px',
              }}
              key={footerItem.title}
            >
              <Link
                sx={{
                  color: 'text',
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
                <Box sx={{ mx: 4, color: 'text', fontWeight: 300 }}>|</Box>
              )}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}
