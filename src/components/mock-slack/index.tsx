"use client"

import {
  MenuItems,
  SideMenu,
  UserItemsTypes,
} from "@/components/mock-slack/menu.types"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BsChatRightText, BsHeadphones } from "react-icons/bs"
import {
  FaAngleDown,
  FaAngleUp,
  FaBell,
  FaEllipsisH,
  FaHashtag,
  FaHome,
  FaPlus,
  FaRegEdit,
  FaSms,
} from "react-icons/fa"
import { HiBars3BottomLeft } from "react-icons/hi2"
import { IoApps, IoFilterSharp } from "react-icons/io5"
import { TbSend2 } from "react-icons/tb"
import { Icon } from "../icons"
import { appList, channelList, directMessageList } from "./mock-api"
import { set } from "zod"
import { IconBase, IconType } from "react-icons/lib"

const MockSlack = () => {
  const items: MenuItems = {
    home: {
      key: "home",
      label: "Home",
      icon: FaHome,
    },
    messages: {
      key: "messages",
      label: "DMs",
      icon: FaSms,
    },
    activity: {
      key: "activity",
      label: "Activity",
      icon: FaBell,
    },
    more: {
      key: "more",
      label: "More",
      icon: FaEllipsisH,
    },
  }
  const sideMenu: SideMenu = {
    topItems: {
      unreads: {
        key: "unreads",
        label: "Unreads",
        icon: HiBars3BottomLeft,
      },
      threads: {
        key: "threads",
        label: "Threads",
        icon: BsChatRightText,
      },
      huddles: {
        key: "huddles",
        label: "Huddles",
        icon: BsHeadphones,
      },
      draftNsent: {
        key: "draftNsent",
        label: "Drafts & Sent",
        icon: TbSend2,
      },
    },
    userItems: {
      channel: {
        key: UserItemsTypes.CHANNEL,
        label: "Channels",
        icon: FaHashtag,
      },
      directMessages: {
        key: UserItemsTypes.DM,
        label: "Direct Messages",
        icon: FaSms,
      },
      apps: {
        key: UserItemsTypes.APP,
        label: "Apps",
        icon: IoApps,
      },
    },
  }
  const [activeItem, setActiveItem] = useState<
    (typeof items)[keyof typeof items]
  >(items.home)
  const [expandedMenus, setExpandedMenus] = useState<string[]>([
    UserItemsTypes.CHANNEL,
    UserItemsTypes.APP,
  ])

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const [fetchedChannelList, setFetchedChannelList] = useState<any>([])
  const [fetchedDmList, setFetchedDmList] = useState<any>([])
  const [fetchedAppList, setFetchedAppList] = useState<any>([])

  useEffect(() => {
    const fetchChannelList = async () => {
      await delay(1000)
      setFetchedChannelList(channelList)
    }

    const fetchDmList = async () => {
      await delay(3000)
      setFetchedDmList(directMessageList)
    }

    const fetchAppList = async () => {
      await delay(2000)
      setFetchedAppList(appList)
    }
    fetchChannelList()
    fetchDmList()
    fetchAppList()
  }, [])

  const generateUserMenuItems = (type: UserItemsTypes, Icon?: IconType) => {
    switch (type) {
      case UserItemsTypes.CHANNEL:
        return fetchedChannelList.map((item: any) => (
          <div
            key={item?.id}
            className="flex cursor-pointer items-center gap-2 px-4 py-1 rounded-lg hover:bg-slack-overlay-secondary"
          >
            {Icon && <Icon />}
            {item?.name}
          </div>
        ))
      case UserItemsTypes.DM:
        return fetchedDmList.map((item: any) => (
          <div
            key={item?.id}
            className="flex cursor-pointer items-center gap-2 px-4 py-1 rounded-lg hover:bg-slack-overlay-secondary"
          >
            {Icon && <Icon />}
            {item?.id}
          </div>
        ))
      case UserItemsTypes.APP:
        return fetchedAppList.map((item: any) => (
          <div
            key={item?.id}
            className="flex cursor-pointer items-center gap-2 px-4 py-1 rounded-lg hover:bg-slack-overlay-secondary"
          >
            <Image src={item?.icon} width={20} height={20} alt={item?.name} />
            {item?.name}
          </div>
        ))
    }
  }

  return (
    <>
      <div className="flex max-h-[1200px] min-h-[800px] w-full overflow-hidden rounded-lg bg-gray-50 shadow-xl dark:bg-gray-900">
        <div className="flex w-[60px] flex-col items-center bg-slack-primary py-4 md:w-[72px]">
          <div className="group flex size-12 items-center justify-center rounded-lg bg-slack-overlay transition-all duration-300">
            <Icon.Slack className="size-3/6 text-white transition-all duration-200 ease-in-out group-hover:size-[60%]" />
          </div>
          <div className="my-4 h-[1px] w-3/5 bg-slack-overlay" />
          <div className="flex flex-col items-center gap-2">
            {Object.values(items).map((item) => (
              <div
                key={item.key}
                className={`flex flex-col items-center justify-center gap-1`}
              >
                <div
                  className={`group flex size-10 cursor-pointer flex-col items-center justify-center rounded-lg p-1 ${activeItem.key === item.key ? "bg-slack-overlay" : "hover:bg-slack-overlay"}`}
                  onClick={() => setActiveItem(item)}
                >
                  <item.icon className="size-3/6 text-white transition-all duration-200 ease-in-out group-hover:size-3/5" />
                </div>
                <span className="hidden text-clip text-xs text-white md:flex">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-auto flex size-12 flex-col items-center">
            <div
              title="Create New"
              className="flex size-[95%] cursor-pointer flex-col items-center justify-center rounded-full bg-slack-overlay p-2 hover:size-[100%]"
            >
              <FaPlus />
            </div>
          </div>
          <div className="relative my-4">
            <Image
              src="/avatar/pandaPP.jpg"
              className="object-cover"
              width={45}
              height={45}
              alt="slack"
            />
            <div className="absolute -bottom-[4.5px] -right-1 z-10 flex size-4 items-center justify-center rounded-full bg-slack-primary">
              <div className="size-[56%] rounded-full bg-green-600" />
            </div>
          </div>
        </div>
        <div className="flex w-[180px] flex-col bg-slack-primary md:w-[200px]">
          <div className="h-full w-full bg-slack-overlay px-2 text-white">
            <div className="my-4 flex items-center justify-between">
              <span className="line-clamp-1 flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 hover:bg-slack-overlay-secondary">
                <span className="line-clamp-1">PingPanda Organization</span>
                <FaAngleDown />
              </span>
              <div className="flex items-center gap-2 text-gray-300">
                <span
                  title="Filter Conversation"
                  className="rounded-lg p-2 hover:cursor-pointer hover:bg-slack-overlay-secondary hover:text-white"
                >
                  <IoFilterSharp />
                </span>
                <span
                  title="Filter Conversation"
                  className="rounded-lg p-2 hover:cursor-pointer hover:bg-slack-overlay-secondary hover:text-white"
                >
                  <FaRegEdit />
                </span>
              </div>
            </div>
            <div className="my-12">
              {Object.values(sideMenu.topItems).map((item) => {
                return (
                  <div
                    key={item.key}
                    className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-slack-overlay-secondary"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="shrink-0 grow-0 text-white" />
                      <span>{item.label}</span>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="my-12">
              {Object.values(sideMenu.userItems).map((item) => {
                return (
                  <div
                    key={item.key}
                    className="group flex cursor-pointer items-center gap-2"
                    onClick={() => {
                      if (expandedMenus.includes(item.key)) {
                        setExpandedMenus(
                          expandedMenus.filter((key) => key !== item.key)
                        )
                      } else {
                        setExpandedMenus([...expandedMenus, item.key])
                      }
                    }}
                  >
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-4 rounded-lg px-2 py-1 hover:bg-slack-overlay-secondary">
                        {/* <item.icon className="shrink-0 grow-0 text-white" /> */}
                        <span className="line-clamp-1">{item.label}</span>
                        <div className="hidden group-hover:flex">
                          {expandedMenus.includes(item.key) ? (
                            <FaAngleUp />
                          ) : (
                            <FaAngleDown />
                          )}
                        </div>
                      </div>
                      <div className="mb-4 p-2 py-1">
                        {expandedMenus.includes(item.key) && (
                          <div className="mt-2 flex flex-col gap-2">
                            {generateUserMenuItems(item.key, item.icon)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MockSlack
