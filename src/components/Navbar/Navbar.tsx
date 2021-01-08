/** @jsx jsx */
import { useCallback, useEffect, useState } from 'react'
import { jsx, Box } from 'theme-ui'
import { NavbarDesktop } from './NavbarDesktop/NavbarDesktop'
import { NavbarMobile } from './NavbarMobile/NavbarMobile'
import { NavbarContext } from './NavbarContext'
import MediaQuery from 'react-responsive'
import theme from '../../gatsby-plugin-theme-ui'

export const Navbar = (): JSX.Element => {
  const [lightNav, setLightNav] = useState(false)
  const defaultValues = { lightNav }

  const [media, setMedia] = useState(-1)

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
        <MediaQuery query={`(max-width: ${theme.breakpoints[1]})`}>
          <NavbarMobile />
        </MediaQuery>
        <MediaQuery query={`(min-width: ${theme.breakpoints[1]})`}>
          <NavbarDesktop />
        </MediaQuery>
      </Box>
    </NavbarContext.Provider>
  )
}
