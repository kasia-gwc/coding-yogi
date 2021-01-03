import { createContext } from 'react'

type NavbarContextType = {
  lightNav: boolean
}
export const NavbarContext = createContext<NavbarContextType>({
  lightNav: true,
})
