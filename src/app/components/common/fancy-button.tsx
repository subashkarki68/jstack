import { cn } from "@/utils"
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
    <div className="group relative overflow-hidden rounded-md border-2 bg-white px-4 py-2 font-semibold text-gray-800 shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50 motion-safe:hover:text-white motion-safe:hover:shadow-xl">
      {/* BG line animation */}
      <span className="motion-safe:group-hover:motion-preset-expand absolute inset-0 w-0 bg-gradient-to-r from-brand-500 to-purple-600 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-in-out motion-safe:group-hover:w-full" />

      {/* vertical lines animation */}
      <span className="absolute inset-0 flex justify-around overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className="motion-safe:group-hover:motion-translate-y-in-100 h-full w-px translate-y-full transform bg-gray-300 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-in-out"
            style={{ transitionDelay: `${index * 100}ms` }}
          />
        ))}
      </span>
      <span>{children}</span>
    </div>
  </Link>
)

export default FancyButton
