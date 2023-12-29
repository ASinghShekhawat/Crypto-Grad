export interface INavDropdown {
  title: string
  menuItems: {
    title: string
    path: string
    target: boolean
  }[]
}

export interface IDrawerGeneric {
  drawer?: boolean
  pathname: string
}
