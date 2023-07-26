import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { cn } from "lib/utils"

const buttonVariants = cva('border-2 w-fit p-2 text-xl lg:text-3xl font-medium rounded-full', {
    variants: {
        variant: {
            default: "border-white hover:border-baliHai hover:bg-baliHai",
            blue: "border-bostonBlue hover:bg-bostonBlue hover:text-white",
        },
    },
    defaultVariants: {
      variant: "default",
    }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, variant, ...props}, ref) => {
  return (
    <button ref={ref} {...props} className={cn(buttonVariants({ variant }))}>{children}</button>
  )
})

Button.displayName = 'Button'

export default Button