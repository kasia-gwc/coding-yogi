/** @jsx jsx */
import { motion, useCycle } from 'framer-motion'
import { FunctionComponent, useContext } from 'react'
import { jsx, Box, Flex } from 'theme-ui'
import { Logo } from '../../Logo/Logo'
import { NavbarContext } from '../NavbarContext'
import { Menu } from './Menu/Menu'
import { MenuToggle } from './MenuToggle/MenuToggle'

const sidebar = {
  open: () => ({
    clipPath: `circle(150% at 100% 0%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      duration: 0.5,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 105% -5%)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}
export const NavbarMobile: FunctionComponent = (): JSX.Element => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const { lightNav } = useContext(NavbarContext)

  return (
    <Box sx={{ p: 3 }}>
      <Flex sx={{ position: 'relative', zIndex: 1 }}>
        <Logo variant={isOpen || lightNav ? 'primary' : 'light'} />
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          sx={{ ml: 'auto' }}
        >
          <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
        </motion.div>
      </Flex>
      <motion.nav
        sx={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: ' #fff',
          }}
          variants={sidebar}
        />
        <Menu toggleOpen={toggleOpen} />
      </motion.nav>
    </Box>
  )
}
