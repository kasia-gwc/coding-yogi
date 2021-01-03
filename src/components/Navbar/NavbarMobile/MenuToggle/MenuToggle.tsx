import React, { FunctionComponent, useContext } from 'react'
import { MenuToggleProps } from './MenuToggle.model'
import { Button } from 'theme-ui'
import { MenuPath } from './MenuPath'
import { NavbarContext } from '../../NavbarContext'

export const MenuToggle: FunctionComponent<MenuToggleProps> = ({
  toggle,
  isOpen,
}): JSX.Element => {
  const { lightNav } = useContext(NavbarContext)

  return (
    <Button
      onClick={toggle}
      sx={{
        border: 0,
        bg: 'transparent',
        outline: 'none',
        borderRadius: '50%',
        p: 0,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 23 23">
        <MenuPath
          stroke={lightNav || isOpen ? '#2EC4B6' : 'white'}
          variants={{
            closed: {
              d: 'M 2 2.5 L 20 2.5',
            },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <MenuPath
          d="M 2 9.423 L 20 9.423"
          stroke={lightNav || isOpen ? '#2EC4B6' : 'white'}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <MenuPath
          stroke={lightNav || isOpen ? '#2EC4B6' : 'white'}
          variants={{
            closed: {
              d: 'M 2 16.346 L 20 16.346',
            },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </Button>
  )
}
