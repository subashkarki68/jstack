"use client"

import useLocalStorage from "@/hooks/uselocal-storage"
import { useEffect } from "react"
import { Button } from "@ui/button"
import { FaMoon, FaSun } from "react-icons/fa"

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    "darkMode",
    false
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      setIsDarkMode(prefersDarkMode)
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
    <Button onClick={toggleTheme} variant={"ghost"} title={`Switch to ${isDarkMode ? "Light" : "Dark"} Mode`}>
      {isDarkMode ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </Button>
  )
}

export default DarkModeToggle
