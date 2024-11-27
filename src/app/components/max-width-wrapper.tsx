import { cn } from "@/utils"
import { HTMLAttributes, ReactNode } from "react"

interface MaxWidthWrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const MaxWidthWrapper = ({
  className,
  children,
  ...rest
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
