import { NavLink } from 'react-router-dom'
import { FooterData } from 'src/data/FooterData'
import { v4 as uuidv4 } from 'uuid'
import logo from 'assets/logo.png'

const Footer = () => {
  return (
    <>
      <div className='mt-[95px] min-h-[200px] bg-cloudBurstBlue w-full flex flex-col lg:flex-row text-white'>
        <div className='flex flex-col lg:flex-row w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-4'>
          <div className='flex p-8 pb-0 w-full lg:w-fit sm:max-w-3xl mx-auto'>
            <NavLink to="/"><img src={logo} alt="A logo" className="mr-4 mt-4 logo hover:drop-shadow object-contain"/></NavLink>
          </div>
          <div className='p-4 w-full sm:max-w-3xl mx-auto h-fit'>
            <ul className='flex flex-col lg:flex-row items-start'>
              {FooterData.map((item) => {
                return (
                  <li key={uuidv4()} className={`w-full lg:w-1/4 ${item.border} border-black lg:border-0 ${item.padding} ${item.margin} lg:hover:bg-cloudBurstBlueHover flex flex-col hover:underline lg:hover:no-underline`}>
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
    </>
  )
}

export default Footer