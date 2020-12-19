import React, { MouseEvent, useCallback, useEffect, useState } from 'react'
import { menuItems } from '../menuItems'
import { Box, Flex, Link } from 'theme-ui'
import { Logo } from '../../Logo/Logo'

export const NavbarDesktop = (): JSX.Element => {
  const [lightNav, setLightNav] = useState(false)
  const [activeBtn, setActiveBtn] = useState('-1')
  const [isClick, setIsClick] = useState(false)

  const updateLightNav = useCallback(() => {
    const bannerId = document.getElementById('banner')

    const lightNavThreshold = bannerId?.clientHeight
      ? 0.5 * bannerId.clientHeight
      : 700
    if (window.scrollY > lightNavThreshold) {
      setLightNav(true)
    } else {
      setLightNav(false)
      setActiveBtn('-1')
    }
  }, [])

  const updateLinksState = useCallback(() => {
    !isClick &&
      menuItems.forEach((item, index) => {
        const linkElement = document.getElementById(item.url.replace('#', ''))
        const topPosition = linkElement?.getBoundingClientRect().top || 0
        if (topPosition > 40 && topPosition < 100) {
          setActiveBtn(index.toString())
        }
      })
  }, [isClick])

  useEffect(() => {
    const onScroll = () => {
      updateLightNav()
      updateLinksState()
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [updateLightNav, updateLinksState])

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsClick(true)
    const id = event.currentTarget.id
    const anchorElement = document.getElementById(id.replace('#', ''))
    const yPosition = anchorElement?.getBoundingClientRect().y || 0
    setActiveBtn(event.currentTarget.dataset.index || '-1')
    window.scrollTo({
      top: window.scrollY + yPosition - 100,
      left: 0,
      behavior: 'smooth',
    })

    setTimeout(() => {
      setIsClick(false)
    }, 250)
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
