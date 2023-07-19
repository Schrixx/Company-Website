import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// "cn" stands for className
export function cn(...inputs: ClassValue[]) {
    console.log(twMerge(clsx(inputs)))
    return twMerge(clsx(inputs))
}