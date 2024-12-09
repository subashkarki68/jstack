import { IconType } from "react-icons/lib"

interface MenuItem {
  key: string
  label: string
  icon: IconType
}

export interface MenuItems {
  [key: string]: MenuItem
}

export interface SideMenu {
  topItems: MenuItems
  userItems: MenuItems
}
