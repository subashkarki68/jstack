import { FC, ReactNode } from "react"

interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: ReactNode
  className?: string
}

export const Heading: FC<HeadingProps> = ({
  level = "h2",
  children,
  className,
}) => {
  const HeadingTag = level as keyof JSX.IntrinsicElements
  return (
    <HeadingTag className={`prose-headings ${className}`}>
      {children}
    </HeadingTag>
  )
}
