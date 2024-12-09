import { types } from "@neondatabase/serverless"
import { IconType } from "react-icons/lib"

type MenuItem = {
  key: string
  label: string
  icon: IconType
}

export type MenuItems = {
  [key: string]: MenuItem
}

export type SideMenu = {
  topItems: MenuItems
  userItems: {
    [key: string]: MenuItem & {
      key: UserItemsTypes
    }
  }
}

export enum UserItemsTypes {
  CHANNEL = "channel",
  DM = "dm",
  APP = "app",
}
