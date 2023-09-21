import Link from "next/link";
import NavDropdown from "./NavDropdown";
import NavAccordion from "./NavAccordion";
import { IDrawerGeneric } from "@/types/navbar";

const navMenuDropdowns = [
  {
    title: "Crypto",
    menuItems: [
      {
        title: "Crypto",
        path: "/",
      },
      {
        title: "Crypto",
        path: "/",
      },
    ],
  },
  {
    title: "Market",
    menuItems: [
      {
        title: "Crypto",
        path: "/",
      },
      {
        title: "Crypto",
        path: "/",
      },
    ],
  },
  {
    title: "Community",
    menuItems: [
      {
        title: "Crypto",
        path: "/",
      },
      {
        title: "Crypto",
        path: "/",
      },
    ],
  },
];

const NavMenu = ({ drawer }: IDrawerGeneric) => {
  return (
    <div
      className={`flex ${
        drawer ? "flex-col" : "flex-row"
      } items-center font-medium gap-4`}
    >
      <Link
        href="/swap"
        className={`hover:text-themeVioletText transition-all ${
          drawer && "px-2 py-1 hover:bg-themeBgBlack w-full rounded-md"
        }`}
      >
        Courses
      </Link>
      {!drawer &&
        navMenuDropdowns.map((item) => (
          <NavDropdown
            key={item.title}
            title={item.title}
            menuItems={item.menuItems}
          />
        ))}
      {drawer &&
        navMenuDropdowns.map((item) => (
          <NavAccordion
            key={item.title}
            title={item.title}
            menuItems={item.menuItems}
          />
        ))}
    </div>
  );
};

export default NavMenu;
