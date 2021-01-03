import React, { useCallback, useEffect, useState } from 'react'
import { Box } from 'theme-ui'
import { NavbarDesktop } from './NavbarDesktop/NavbarDesktop'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { NavbarMobile } from './NavbarMobile/NavbarMobile'
import { NavbarContext } from './NavbarContext'

export const Navbar = (): JSX.Element => {
  const [lightNav, setLightNav] = useState(false)
  const breakpoint = useBreakpointIndex()
  const defaultValues = { lightNav }

  const updateLightNav = useCallback(() => {
    const bannerId = document.getElementById('banner')

    const lightNavThreshold = bannerId?.clientHeight
      ? 0.5 * bannerId.clientHeight
      : 700
    if (window.scrollY > lightNavThreshold) {
      setLightNav(true)
    } else {
      setLightNav(false)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      updateLightNav()
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [updateLightNav])

  return (
    <NavbarContext.Provider value={defaultValues}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 9999,
          bg: lightNav ? 'background' : 'transparent',
        }}
      >
        {breakpoint > 1 ? <NavbarDesktop /> : <NavbarMobile />}
      </Box>
    </NavbarContext.Provider>
  )
}
