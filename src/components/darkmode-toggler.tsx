"use client"

import useLocalStorage from "@/hooks/uselocal-storage"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Moon = dynamic(() => import("./icons").then((mod) => mod.Icon.Moon), {
  ssr: false,
})
const Sun = dynamic(() => import("./icons").then((mod) => mod.Icon.Sun), {
  ssr: false,
})
const Button = dynamic(() => import("@ui/button").then((mod) => mod.Button), {
  ssr: false,
})

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    "darkMode",
    false
  )
  const [prefersDarkMode, setPrefersDarkMode] = useState(false)

  useEffect(() => {
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setPrefersDarkMode(event.matches)
    }

    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
      setPrefersDarkMode(mediaQueryList.matches)
      mediaQueryList.addEventListener("change", handleMediaChange)
    }

    return () => {
      if (typeof window !== "undefined") {
        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
        mediaQueryList.removeEventListener("change", handleMediaChange)
      }
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode((prev) => !prev)
  return (
    <Button
      onClick={toggleTheme}
      variant={"ghost"}
      title={`Switch to ${isDarkMode ? "Light" : "Dark"} Mode`}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  )
}

export default DarkModeToggle
