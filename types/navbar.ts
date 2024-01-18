import { Dispatch } from "react"

export interface INavDropdown {
  title: string
  menuItems: {
    title: string
    path: string
    target: boolean
  }[]
  setOpen?: Dispatch<boolean>
}

export interface IDrawerGeneric {
  drawer?: boolean
  pathname: string
  setOpen?: Dispatch<boolean>
}
