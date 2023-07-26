import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

export const FooterTopData = [
    {
        title: "About Schrixx",
        text: "Learn about our background.",
        path: "/about",
        border: "border-y-[1px]",
        padding: "py-4 lg:px-4",
        margin: "my-4",
    },
    {
        title: "Artwork",
        text: "Browse quality artwork made by us!",
        path: "/artwork",
        border: "border-b-[1px]",
        padding: "pb-4 lg:py-4 lg:px-4",
        margin: "mb-4 lg:my-4",
    },
    {
        title: "Jobs",
        text: "Learn about open roles within Schrixx.",
        path: "/jobs",
        border: "border-b-[1px]",
        padding: "pb-4 lg:py-4 lg:px-4",
        margin: "mb-4 lg:my-4",
    },
    {
        title: "Contact us",
        text: "Work with us! We provide flexible services.",
        path: "/contact",
        border: "border-b-[1px]",
        padding: "pb-4 lg:py-4 lg:px-4",
        margin: "mb-4 lg:my-4",
    },
]

export const FooterBottomData = [
    {
        title: "Privacy Policy",
        path: "/privacy",
    },
    {
        title: "Terms & Conditions",
        path: "/terms",
    },
    {
        title: "Copyright © 2023 Schrixx",
        underline: "none",
    },
]

export const FooterSocials = [
    {
        icon: <BsInstagram />,
        url: "https://www.instagram.com",
    },
    {
        icon: <BsTwitter />,
        url: "https://www.twitter.com",
    },
]