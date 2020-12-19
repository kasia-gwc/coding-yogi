import React from 'react'
import { Box } from 'theme-ui'
import { NavbarDesktop } from './NavbarDesktop/NavbarDesktop'

export const Navbar = (): JSX.Element => {
  return (
    <Box
      sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}
    >
      <NavbarDesktop></NavbarDesktop>
    </Box>
  )
}
