import { cva, VariantProps } from "class-variance-authority"
import { HTMLAttributes, forwardRef, ReactNode } from "react"
import { cn } from "lib/utils"

export const headingVariants = cva('', {
    variants: {
        font: {
            medium: "font-medium",
            semiBold: "font-semibold",
            bold: "font-bold",
        },
        size: {
          default: "text-4xl md:text-5xl",
          sm: "text-xl",
          submd: "text-2xl",
          md: "text-3xl",
          lg: "text-4xl",
          xl: "text-5xl",
        }
    },
    defaultVariants: {
      font: "semiBold",
      size: "default"
    },
    compoundVariants: [
      {
        font: "semiBold",
        size: "submd",
        class: "reviewHeading",
      },
    ],
})

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
    children: ReactNode,
}

const LargeHeading = forwardRef<HTMLHeadingElement, HeadingProps>(({children, font, size, ...props}, ref) => {
  return (
    <h1 ref={ref} {...props} className={cn(headingVariants({ font, size }))}>{children}</h1>
  )
})

LargeHeading.displayName = 'LargeHeading'

export default LargeHeading