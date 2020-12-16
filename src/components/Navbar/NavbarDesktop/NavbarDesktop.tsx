import React from 'react'
import { menuItems } from '../menuItems'
import { Box, Flex, Link } from 'theme-ui'
import { Logo } from '../../Logo/Logo'
import { Banner } from '../../Banner/Banner'

export const NavbarDesktop = (): JSX.Element => {
  return (
    <Flex sx={{ py: 3, px: 4 }}>
      <Logo></Logo>
      <Flex sx={{ ml: 'auto' }}>
        {menuItems.map((menuItem, index) => (
          <Flex sx={{ alignItems: 'center'}} key={menuItem.title}>
            <Link
              sx={{
                color: 'background',
                textDecoration: 'none',
              }}
              href={menuItem.url}
            >
              {menuItem.title}
            </Link>
            {/* // 0 , 4 - 1, 3 !== 3 */}
            {menuItems.length - 1 !== index && (
              <Box sx={{ mx: 3, color: 'background', fontWeight: 300 }}>|</Box>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
