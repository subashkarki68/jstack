import { cn } from "@/lib/utils"
import { SignOutButton } from "@clerk/nextjs"
import { MaxWidthWrapper } from "@components/max-width-wrapper"
import { Button, buttonVariants } from "@ui/button"
import Link from "next/link"
import { FC, HTMLAttributes } from "react"
import { FaArrowRight } from "react-icons/fa"
import DarkModeToggle from "./darkmode-toggler"

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  className?: string
  rest?: string
}

const Navbar: FC<NavbarProps> = ({ className, ...rest }) => {
  const user = 0
  return (
    <nav
      className={cn(
        "sticky inset-x-0 top-0 z-[50] h-16 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-none dark:bg-brand-900"
      )}
      {...rest}
    >
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="z-[60] flex font-semibold">
            Ping<span className="text-brand-500">Panda</span>
          </Link>
          <div className="flex h-full items-center space-x-4">
            <div className="hidden sm:block">
              <DarkModeToggle />
            </div>
            {user ? (
              <>
                <SignOutButton>
                  <Button variant={"ghost"}>Sign Out</Button>
                </SignOutButton>
                <Link
                  href={"/dashboard"}
                  className={`${buttonVariants({
                    className: "flex items-center gap-1",
                  })}`}
                >
                  Dashboard <FaArrowRight className="ml-1.5 size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/pricing"}
                  className={`${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  Pricing
                </Link>
                <Link
                  href={"/sign-in"}
                  className={`${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  Sign In
                </Link>
                <div className="h-8 w-px bg-gray-200" />
                <Link
                  href={"/sign-up"}
                  className={`${buttonVariants({
                    className: "flex items-center gap-1",
                  })}`}
                >
                  Sign Up <FaArrowRight className="ml-1.5 size-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
