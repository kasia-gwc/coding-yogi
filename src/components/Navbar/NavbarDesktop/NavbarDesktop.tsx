import React, { MouseEvent, useEffect, useState } from 'react'
import { menuItems } from '../menuItems'
import { Box, Flex, Link } from 'theme-ui'
import { Logo } from '../../Logo/Logo'

export const NavbarDesktop = (): JSX.Element => {
  const [lightNav, setLightNav] = useState(false)
  const [activeBtn, setActiveBtn] = useState('-1')
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 700) {
        setLightNav(true)
      } else {
        setLightNav(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const id = event.currentTarget.id
    const anchorElement = document.getElementById(id.replace('#', ''))
    const yPosition = anchorElement?.getBoundingClientRect().y || 0
    setActiveBtn(event.currentTarget.dataset.index || '-1')
    window.scrollTo({
      top: window.scrollY + yPosition - 100,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <Flex
      sx={{
        py: 3,
        px: 4,
        transition: 'background-color .3s',
        bg: lightNav ? 'background' : 'transparent',
      }}
    >
      <Logo variant={lightNav ? 'dark' : 'light'} />
      <Flex sx={{ ml: 'auto' }}>
        {menuItems.map((menuItem, index) => (
          <Flex sx={{ alignItems: 'center' }} key={menuItem.title}>
            <Link
              data-index={index}
              onClick={handleLinkClick}
              sx={{
                transition: 'background-color .3s',
                px: 3,
                color: lightNav
                  ? activeBtn === index.toString()
                    ? 'background'
                    : 'text'
                  : 'background',
                textDecoration: 'none',
                bg:
                  activeBtn === index.toString()
                    ? index % 2 === 0
                      ? 'primary'
                      : 'secondary'
                    : 'transparent',
              }}
              id={menuItem.url}
              href={menuItem.url}
            >
              {menuItem.title}
            </Link>
            {menuItems.length - 1 !== index && (
              <Box
                sx={{
                  mx: 1,
                  color: lightNav ? 'text' : 'background',
                  fontWeight: 300,
                }}
              >
                |
              </Box>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
