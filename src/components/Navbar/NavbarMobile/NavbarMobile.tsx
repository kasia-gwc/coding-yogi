/** @jsx jsx */
import { AnimatePresence, motion, useCycle } from 'framer-motion'
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
      duration: 0.5,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 105% -5%)',
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}
export const NavbarMobile: FunctionComponent = (): JSX.Element => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const { lightNav } = useContext(NavbarContext)
  return (
    <Box sx={{ p: [2, 3] }}>
      <Flex sx={{ position: 'relative', zIndex: 1 }}>
        <Logo variant={isOpen || lightNav ? 'primary' : 'light'} />
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          sx={{ ml: 'auto', display: 'flex', mr: '15px' }}
        >
          <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
        </motion.div>
      </Flex>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="nav"
            sx={{
              position: 'fixed',
              display: 'flex',
              height: '100%',
              width: '100%',
              top: 0,
              left: 0,
              justifyContent: 'center',
              alignItems: 'center',
              bg: 'white',
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebar}
          >
            <Menu toggleOpen={toggleOpen} />
          </motion.nav>
        )}
      </AnimatePresence>
    </Box>
  )
}
