import { BsClockFill } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { BsLightningFill } from 'react-icons/bs'
import { TbHexagonNumber1 } from 'react-icons/tb'
import { TbHexagonNumber2 } from 'react-icons/tb'
import { TbHexagonNumber3 } from 'react-icons/tb'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'


import redBird from 'assets/logos/bird.png'
import cat from 'assets/logos/cat.png'
import redDragon from 'assets/logos/redDragon.png'
import colorfulDragon from 'assets/logos/colorfulDragon.png'
import vials from 'assets/logos/vials.png'
import swirl from 'assets/logos/swirl.png'

import Button from 'src/components/ui/Button'
import LargeHeading from 'src/components/ui/LargeHeading'
import { v4 as uuidv4 } from 'uuid'
import { ReviewsData } from 'src/data/ReviewsData'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollHandler = (direction: number) => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft += direction;
    }
  }

  return (
    <>
      {/* main img + text */}
      <div className="relative pt-standard w-full flex flex-col justify-center items-center">
        <div className="bg-fixed h-[780px] w-full bg-[url('assets/BluePic3.jpg')] bg-no-repeat bg-cover brightness-50" />
        <div className="absolute text-center w-9/12 pb-5 flex flex-col items-center gap-4 text-white tracking-wide rounded-xl">
          <LargeHeading font="bold">Schrixx creates professional art for your creative projects or personal use.</LargeHeading>
          <div className="h-[2px] w-4/6 bg-baliHai"></div>
          <p className="text-2xl font-medium">Commision talented artists that will ensure your artwork is of the highest quality.</p>
          <NavLink to="/contact"><Button>Contact Us</Button></NavLink>
        </div>
      </div>

      {/* about */}
      <div className='py-standard min-h-[600px] w-full flex flex-col items-center justify-center'>
        <div className='relative z-20 w-9/12 text-center tracking-wide text-cloudBurstBlue flex flex-col items-center gap-8'>
          <div className='flex flex-col gap-4 w-full items-center text-black'>
            <p className='text-baliHai'>about us...</p>
            <LargeHeading font="semiBold">an artist made company</LargeHeading>
            <div className='h-2 md:h-3 bg-bostonBlue w-4/6'></div>
          </div>
          <p className='mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsa iusto, architecto numquam nulla dolor molestiae error vel reprehenderit voluptates debitis itaque, placeat quibusdam porro quia voluptatum ratione nam inventore odio libero perferendis consequatur aliquam! Minus aliquid sed officia. Sit.</p>
          <NavLink to="/about"><Button variant="blue">Learn More</Button></NavLink>
        </div>
      </div>

      {/* why us */}
      <IconContext.Provider value={{color: '#223051', size: "35px"}}>
        <div className='relative min-h-[1000px] w-full flex flex-col items-center justify-start'>
          <div className='absolute min-h-[850px] top-0 bg-gradient-to-tl from-bostonBlue to-baliHai w-full' />
          <div className="absolute w-full h-[850px] bg-[url(assets/polygons.svg)] bg-cover bg-no-repeat opacity-10 bg-top" />
          <div className='mt-20 relative h-full text-center w-full sm:max-w-3xl px-4 mx-auto z-10 flex flex-col items-center text-white tracking-wide gap-8'>
            <LargeHeading font="semiBold" size="lg">Why Choose Schrixx?</LargeHeading>
            <div className='p-6 bg-white flex flex-col gap-8 items-center rounded-lg shadow-container'>
              <div className='flex items-center flex-col gap-8'>
                <span><BsLightningFill /></span>
                <p className='text-cloudBurstBlue font-bold text-2xl'>Lightning Fast Delivery</p>
              </div>
              <p className='text-cloudBurstBlue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error, voluptatem explicabo cumque ipsum pariatur necessitatibus omnis eum quibusdam deleniti!</p>
            </div>
            <div className='p-6 bg-white flex flex-col gap-8 items-center rounded-lg shadow-container'>
              <div className='flex items-center flex-col gap-8'>
                <span><BsClockFill /></span>
                <p className='text-cloudBurstBlue font-bold text-2xl'>Save Time</p>
              </div>
              <p className='text-cloudBurstBlue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error, voluptatem explicabo cumque ipsum pariatur necessitatibus omnis eum quibusdam deleniti!</p>
            </div>
            <div className='p-6 bg-white flex flex-col gap-8 items-center rounded-lg shadow-container'>
              <div className='flex items-center flex-col gap-8'>
                <span><FaPaintBrush /></span>
                <p className='text-cloudBurstBlue font-bold text-2xl'>Quality Artwork Guaranteed</p>
              </div>
              <p className='text-cloudBurstBlue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error, voluptatem explicabo cumque ipsum pariatur necessitatibus omnis eum quibusdam deleniti!</p>
            </div>
          </div>
        </div>
      </IconContext.Provider>

      {/* process */}
      <IconContext.Provider value={{color: "white", size: "80px"}}>
        <div className="py-standard w-full flex flex-col items-center">
          <div className="w-full z-10 text-center flex flex-col gap-10 tracking-wide">
            <div className='flex flex-col gap-4'>
              <h1 className="text-3xl lg:text-4xl font-bold text-black">Process</h1>
              <p className='text-baliHai'>The process is simple and easy to understand!</p>
            </div>     
            <div className="px-4 flex flex-col items-center gap-10 lg:flex-row md:justify-center md:items-baseline text-white">
              <div className="bg-cloudBurstBlue p-6 w-full lg:w-1/3 flex flex-col items-center gap-10 rounded-lg shadow-smallContainer">
                <TbHexagonNumber1 />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis tenetur explicabo consequuntur itaque error.</p>
              </div>
              <div className="bg-cloudBurstBlue p-6 w-full lg:w-1/3 flex flex-col items-center gap-10 rounded-lg shadow-smallContainer">
                <TbHexagonNumber2 />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis tenetur explicabo consequuntur itaque error.</p>
              </div>
              <div className="bg-cloudBurstBlue p-6 w-full lg:w-1/3 flex flex-col items-center gap-10 rounded-lg shadow-smallContainer">
                <TbHexagonNumber3 />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis tenetur explicabo consequuntur itaque error.</p>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>

      {/* partners */}
      <div className='relative py-standard pb-0 w-full flex flex-col justify-center items-center gap-20 text-cloudBurstBlue'>
        <div className='w-full md:w-1/2 text-center px-4 flex flex-col text-black gap-5'>
          <LargeHeading size="lg">Trusted by Industry Leaders</LargeHeading>
          <p className='text-cloudBurstBlue'>Our collaboration with industry leaders gives us ample experience and has allowed us to create quality and efficient art. As such, we've created a competitve edge clients look for.</p>
          <p className='text-cloudBurstBlue'>Companies we've worked with:</p>
        </div>
        <div className='w-full md:w-1/2 flex flex-col flex-wrap md:flex-row justify-center items-center gap-10'>
            <img src={redBird} alt="company logo" className='h-auto w-48' />
            <img src={vials} alt="company logo" className='h-auto w-48' />
            <img src={redDragon} alt="company logo" className='h-auto w-48' />
            <img src={colorfulDragon} alt="company logo" className='h-auto w-48' />
            <img src={swirl} alt="company logo" className='h-auto w-48' />
            <img src={cat} alt="company logo" className='h-auto w-48' />
        </div>
      </div>

      {/* reviews */}
      <div className='relative mt-20 py-standard pt-0 flex flex-col justify-center gap-8'>
        <div className='px-4 w-full flex flex-col justify-center items-center text-black drop-shadow-2xl text-center'>
          <LargeHeading size="lg">Trusted by Customers</LargeHeading>
        </div>
        <IconContext.Provider value={{className: "text-cloudBurstBlue hover:text-[#61D9FF] h-6 w-6"}}>
          <div className='flex justify-end mr-[10%] gap-8'>
            <div className='hidden lg:flex justify-center items-center bg-black bg-opacity-10 rounded-full h-10 w-10'>
              <button onClick={() => scrollHandler(-300)}><BsChevronLeft /></button>
            </div>
            <div className='hidden lg:flex justify-center items-center bg-black bg-opacity-10 rounded-full h-10 w-10'>
              <button onClick={() => scrollHandler(300)}><BsChevronRight /></button>
            </div>
          </div>
        </IconContext.Provider>
        <div ref={scrollRef} className='relative z-10 px-4 pb-standard h-full w-full flex flex-nowrap gap-20 text-white overflow-x-scroll lg:overflow-x-hidden tracking-wide overflow-y-hidden snap-x snap-mandatory scroll-smooth'>
          {ReviewsData.map((item) => {
            return (
              <div key={uuidv4()} className='relative bg-bostonBlue p-6 rounded-lg sm:min-w-[25rem] text-center flex flex-col items-center gap-8 shadow-smallContainer snap-center'>
                <div className='absolute h-12 w-full bg-cloudBurstBlue' />
                {/* <div className={`absolute top-0 w-full h-[900px] bg-[url(assets/smallCircles.svg)] bg-contain bg-no-repeat opacity-5 ${item.bgPos}`} /> */}
                <div className='relative z-20 flex flex-col gap-4 items-center'>
                  <div className="h-24 w-24 bg-[url('assets/pfp.svg')] bg-cover bg-no-repeat bg-center rounded-full" />
                  <div className='flex items-center gap-2'>
                    <p>{item.stars}</p> <BsStarFill color="orange" />
                  </div>
                  <LargeHeading size="md">{ item.name }</LargeHeading>
                </div>

                <p className='relative z-20'>{ item.comment }</p> 
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home