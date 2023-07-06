import { FaPaintBrush } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { IoMdHelpCircle } from 'react-icons/io'
import { GrContact } from 'react-icons/gr'

export const NavData = [
    {
      title: "Home",
      path: "/",
      icon: <AiFillHome />,
    },
    {
      title: "Artwork",
      path: "/artwork",
      icon: <FaPaintBrush />,
    },
    {
      title: "About",
      path: "/about",
      icon: <IoMdHelpCircle />,
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <GrContact />
    }
  ];