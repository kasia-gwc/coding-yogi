/** @jsx jsx */
import { jsx } from 'theme-ui'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem/MenuItem'
import { menuItems } from '../../menuItems'
import { FunctionComponent, MouseEvent } from 'react'
import { MenuProps } from './Menu.model'
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Menu: FunctionComponent<MenuProps> = ({
  toggleOpen,
}): JSX.Element => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    toggleOpen()

    const id = event.currentTarget.id
    const anchorElement = document.getElementById(id.replace('#', ''))
    const yPosition = anchorElement?.getBoundingClientRect().y || 0

    window.scrollTo({
      top: window.scrollY + yPosition - 100,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <motion.ul
      sx={{
        p: 0,
        m: 0,
        listStyle: 'none',
        position: 'relative',
        textAlign: 'center',
      }}
      variants={variants}
    >
      {menuItems.map((item) => (
        <MenuItem
          onClick={handleClick}
          key={item.title}
          title={item.title}
          url={item.url}
        />
      ))}
    </motion.ul>
  )
}
