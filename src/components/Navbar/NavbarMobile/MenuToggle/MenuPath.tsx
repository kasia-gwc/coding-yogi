import { motion } from 'framer-motion'
import React, { FunctionComponent } from 'react'

type MenuPathProps = {
  stroke?: string
  variants: any
  transition?: any
  d?: string
}

export const MenuPath: FunctionComponent<MenuPathProps> = ({
  ...restProps
}): JSX.Element => {
  console.log(restProps.variants)
  return (
    <motion.path
      fill="transparent"
      strokeWidth="1"
      strokeLinecap="round"
      {...restProps}
    />
  )
}
