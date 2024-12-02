import { cn } from "@/lib/utils"
import Link from "next/link"
import { AnchorHTMLAttributes, FC, ReactNode } from "react"

interface FancyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  children: ReactNode
  to: string
}

const FancyButton: FC<FancyButtonProps> = ({
  className,
  children,
  to,
  ...rest
}) => (
  <Link href={to} className={cn("", className)} {...rest}>
    <div className="group relative overflow-hidden rounded-md border-2 bg-white px-8 py-3 text-xl font-semibold text-gray-800 shadow-lg transition-all duration-300 ease-in-out motion-safe:hover:motion-preset-flomoji-👉 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50 motion-safe:hover:text-white motion-safe:hover:shadow-xl">
      {/* BG line animation */}
      <span className="absolute inset-0 w-0 bg-gradient-to-r from-brand-400 to-brand-900 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-in-out motion-safe:group-hover:w-full" />

      <span className="relative z-10 motion-safe:group-hover:motion-preset-float">
        {children}
      </span>
    </div>
  </Link>
)

export default FancyButton
