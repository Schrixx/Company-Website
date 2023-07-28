import { useEffect, useState } from 'react'
import { NavData } from "src/data/NavbarData"
import { NavLink } from "react-router-dom"
import logo from 'assets/logos/logo2.png'
import { IconContext } from 'react-icons'

import { v4 as uuidv4 } from 'uuid'

import { FaBars } from "react-icons/fa"
import { SlArrowRight } from "react-icons/sl"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

const Navbar = () => {
  const [sidebarState, setSidebarState] = useState<boolean>(false)

  // prevent body overflow while mobile interface active
  useEffect(() => {
    sidebarState ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [sidebarState])

  const sidebarHandler = () => {
    setSidebarState(sidebarState => !sidebarState)
  }

  return (
    <>
      <header id="nav" className={`z-50 fixed top-0 w-full ${sidebarState ? "lg:h-[97px] h-full" : "h-[97px]"} transition-all duration-1000`}>
        
        {/* navbar */}
        <IconContext.Provider value={{ color: "#223051" }}>
          <div aria-hidden={!sidebarState} className={`relative z-40 w-full bg-white lg:flex lg:justify-around transition-all duration-500 ${ sidebarState ? "" : "drop-shadow-lg" }`}>
            <div className="flex items-center justify-around py-6 lg:py-0">
              <a href="/">
                <img src={logo} alt="A logo" className="logo hover:drop-shadow object-contain"/>
              </a>
              <button className="lg:hidden flex items-center gap-4" onClick={sidebarHandler}>
                <span className='hidden md:block'>Menu</span>
                <FaBars />
              </button>
            </div>
            <ul className="list-none md:hidden lg:flex flex-row relative my-8 hidden">
              {NavData.map((item) => {
                return (
                  <li key={uuidv4()}>
                    <NavLink to={item.path} className="text-cloudBurstBlue hover:text-white hover:bg-fedora hover:drop-shadow pb-[2.33rem] pt-[2.36rem] px-6 tracking-wide rounded-sm linkFont">
                      <span className="hover:drop-shadow-xl">{item.title}</span>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* mobile menu */}
          <div className={`${sidebarState ? "lg:opacity-0 opacity-100" : "opacity-0"} transition-opacity delay-75 duration-500`}>
            <div aria-hidden={!sidebarState} className={`absolute ${sidebarState ? 'lg:top-[-100%] top-[97px]' : 'top-[-100%]'} bottom-0 left-0 bg-white flex flex-col w-full px-4 pb-4`}>
              <ul className="flex flex-col items-center w-full overflow-auto border-t-[1px] border-darkGray">
                {NavData.map((item) => {
                  return (
                    <li key={uuidv4()} className="flex justify-between items-center w-full border-b-[1px] border-darkGray">
                      <NavLink to={item.path} className="flex items-center text-cloudBurstBlue hover:text-fedora py-8 hover:drop-shadow rounded-sm tracking-wide w-full">
                        {item.icon}
                        <span className="hover:drop-shadow-xl mx-8 uppercase">{item.title}</span>
                      </NavLink>
                      <SlArrowRight />
                    </li>
                  )
                })}
                <div className='flex justify-center gap-8 p-2 mt-8'>
                  <NavLink to="https://www.instagram.com/" target='_blank'>
                    <BsInstagram size='1.5rem' />
                  </NavLink>
                  <NavLink to="https://twitter.com/" target='_blank'>
                    <BsTwitter size='1.5rem' />
                  </NavLink>
                </div>
              </ul>
            </div>
          </div>
        </IconContext.Provider>        
      </header>
    </>
  )
}

export default Navbar