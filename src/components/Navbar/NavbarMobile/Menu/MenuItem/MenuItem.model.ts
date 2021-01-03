import { MouseEvent } from 'react'

export type MenuItemProps = {
  title: string
  url: string
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void
}
