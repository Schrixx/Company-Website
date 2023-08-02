import { NavLink } from 'react-router-dom'
import { FooterTopData, FooterBottomData, FooterSocials } from 'src/data/FooterData'
import { v4 as uuidv4 } from 'uuid'
import logo from 'assets/logos/logo.png'

const Footer = () => {
  return (
    <>
      {/* top footer */}
      <div className='mt-[95px] bg-cloudBurstBlue w-full flex flex-col lg:flex-row text-white'>
        <div className='flex flex-col lg:flex-row w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-4'>
          <div className='flex p-8 pb-0 w-full lg:w-fit sm:max-w-3xl mx-auto'>
            <NavLink to="/"><img src={logo} alt="A logo" className="mr-4 mt-4 logo hover:drop-shadow object-contain"/></NavLink>
          </div>
          <div className='p-4 lg:pt-0 pb-0 w-full sm:max-w-3xl mx-auto h-fit'>
            <ul className='flex flex-col lg:flex-row items-start'>
              {FooterTopData.map((item) => {
                return (
                  <li key={uuidv4()} className={`w-full lg:w-1/4 ${item.border} border-black lg:border-0 ${item.padding} ${item.margin} lg:hover:bg-cloudBurstBlueHover hover:underline lg:hover:no-underline`}>
                    <NavLink to={item.path} className="h-full">
                      <p className='font-medium text-lg'>{item.title}</p>
                      <p className='text-xs'>{item.text}</p>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className='hidden lg:flex justify-center bg-cloudBurstBlue'><div className='h-[1px] w-11/12 bg-baliHai' /></div>
      
      {/* bottom footer */}
      <div className='bg-cloudBurstBlue w-full flex flex-col lg:flex-row text-white'>
        <div className='flex flex-col lg:flex-row justify-between w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto p-4 pt-0 lg:pt-4 m-4 mt-0 lg:mt-4'>
          <ul className='w-full flex flex-col lg:flex-row gap-2 lg:gap-36 px-4'>
            {FooterBottomData.map((item) => {
              return (
                <li key={uuidv4()} className={`w-fit hover:underline ${item.underline ? "hover:no-underline" : ""}`}>
                  <NavLink to={typeof item.path === "string" ? item.path : ""} className={`${item.underline ? "cursor-default" : ""}`}>
                    <p className='text-xs'>{item.title}</p>
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <ul className='flex flex-row gap-8 w-fit px-4 mt-16 lg:mt-0'>
            {FooterSocials.map((item) => {
              return (
                <li key={uuidv4()} className=''>
                  <NavLink to={item.url} target='_blank'>{item.icon}</NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer