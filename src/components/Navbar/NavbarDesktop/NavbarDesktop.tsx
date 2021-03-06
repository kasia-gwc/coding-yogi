/** @jsx jsx */
import { MouseEvent, useCallback, useContext, useEffect, useState } from 'react'
import { menuItems } from '../menuItems'
import { jsx, Box, Flex, Link } from 'theme-ui'
import { Logo } from '../../Logo/Logo'
import { NavbarContext } from '../NavbarContext'

export const NavbarDesktop = (): JSX.Element => {
  const [activeBtn, setActiveBtn] = useState('-1')
  const [isClick, setIsClick] = useState(false)
  const { lightNav } = useContext(NavbarContext)

  useEffect(() => {
    if (!lightNav) {
      setActiveBtn('-1')
    }
  }, [lightNav])

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
      updateLinksState()
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [updateLinksState])

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsClick(true)
    const id = event.currentTarget.id
    const anchorElement = document.getElementById(id.replace('#', ''))
    const yPosition = anchorElement?.getBoundingClientRect().y || 0
    const index = event.currentTarget.dataset.index || '-1'
    setActiveBtn(index)
    window.scrollTo({
      top: window.scrollY + yPosition + -80,
      left: 0,
      behavior: 'smooth',
    })

    setTimeout(() => {
      setIsClick(false)
    }, 1000)
  }
  return (
    <Flex
      sx={{
        py: 2,
        px: 4,
        transition: 'background-color .3s',
        flexWrap: 'wrap',
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
