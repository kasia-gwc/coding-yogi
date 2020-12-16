import React from 'react'
import { Box, Flex, Heading, Link } from 'theme-ui'
import { Logo } from '../Logo/Logo'
import { footerItems } from './footerItems'

export const Footer = (): JSX.Element => {
  return (
    <Flex
      sx={{
        position: 'relative',
        flexDirection: 'column',
        svg: { path: { fill: 'black' } },
      }}
    >
      <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
        <Logo></Logo>
      </Box>
      <Heading
        as="h3"
        variant="styles.h3"
        sx={{
          color: 'primary',
          textAlign: 'center',
          mb: '20px',
        }}
      >
        contact me
      </Heading>
      <Flex sx={{ justifyContent: 'center', mb: '70px' }}>
        {footerItems.map((footerItem, index) => (
          <Flex sx={{ fontSize: 2 }} key={footerItem.title}>
            <Link
              sx={{
                color: 'text',
                textDecoration: 'none',
              }}
              href={footerItem.url}
            >
              {footerItem.title}
            </Link>
            {footerItems.length - 1 !== index && (
              <Box sx={{ mx: 3, color: 'text', fontWeight: 300 }}>|</Box>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
