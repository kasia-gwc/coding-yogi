import React, { FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'theme-ui'
import { MenuItemProps } from './MenuItem.model'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  title,
  url,
  onClick,
}): JSX.Element => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        onClick={onClick}
        sx={{ textDecoration: 'none', mt: 3, display: 'block' }}
        href={url}
        id={url}
      >
        {title}
      </Link>
    </motion.li>
  )
}
