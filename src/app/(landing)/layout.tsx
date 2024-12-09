import { PropsWithChildren, ReactNode } from "react"
import Navbar from "@/components/navbar"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
