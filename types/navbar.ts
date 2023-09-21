export interface INavDropdown {
  title: string;
  menuItems: {
    title: string;
    path: string;
  }[];
}

export interface IDrawerGeneric {
  drawer?: boolean;
}