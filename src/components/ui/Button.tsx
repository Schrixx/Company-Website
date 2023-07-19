import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"

export const buttonVariants = cva('border-2 w-fit p-2 text-xl lg:text-3xl font-medium rounded-full', {
    variants: {
        variant: {
            default: "border-white hover:border-baliHai hover:bg-baliHai",
        }
    }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, ...props}, ref) => {
  return (
    <button ref={ref} {...props}>{children}</button>
  )
})

export default Button