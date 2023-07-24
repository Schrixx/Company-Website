import { BsClockFill } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { BsLightningFill } from 'react-icons/bs'
import { TbHexagonNumber1 } from 'react-icons/tb'
import { TbHexagonNumber2 } from 'react-icons/tb'
import { TbHexagonNumber3 } from 'react-icons/tb'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Button from 'src/components/ui/Button'
import LargeHeading from 'src/components/ui/LargeHeading'
import { v4 as uuidv4 } from 'uuid'
import { ReviewsData } from 'src/data/ReviewsData'
import { useRef } from 'react'

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
          <p className="text-2xl font-medium">Commision talented illustrators that will ensure your artwork is of the highest quality.</p>
          <a href=""><Button>Contact Us</Button></a>
        </div>
      </div>

      {/* about */}
      <div className='py-standard min-h-[600px] w-full flex flex-col items-center justify-center'>
        <div className='relative z-20 w-9/12 text-center tracking-wide text-cloudBurstBlue flex flex-col items-center gap-8'>
          <div className='flex flex-col gap-4 w-full items-center'>
            <p className='text-baliHai'>about us...</p>
            <LargeHeading font="semiBold">an artist made company</LargeHeading>
            <div className='h-2 md:h-3 bg-bostonBlue w-4/6'></div>
          </div>
          <p className='mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsa iusto, architecto numquam nulla dolor molestiae error vel reprehenderit voluptates debitis itaque, placeat quibusdam porro quia voluptatum ratione nam inventore odio libero perferendis consequatur aliquam! Minus aliquid sed officia. Sit.</p>
          <a href=""><Button variant="blue">Learn More</Button></a>
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
        <div className="py-standard w-full flex flex-col items-center bg-gradient-to-b from-white to-turqoise">
          <div className="w-full z-10 text-center flex flex-col gap-10 tracking-wide">
            <div className='flex flex-col gap-4'>
              <h1 className="text-3xl lg:text-4xl font-bold text-cloudBurstBlue">Process</h1>
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

      {/* reviews */}
      <div className='relative py-standard min-h-[800px] flex flex-col justify-center gap-8 bg-gradient-to-b from-turqoise to-white'>
        <div className='px-4 w-full flex flex-col justify-start sm:max-w-lg mx-auto'>
          <div className='text-cloudBurstBlue drop-shadow-2xl'>
            <LargeHeading size="lg">Read what our customers say...</LargeHeading>
          </div>
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
        <div ref={scrollRef} className='relative z-10 px-4 h-full w-full flex flex-nowrap gap-24 text-white scroll-py-8 overscroll-contain overflow-x-scroll lg:overflow-x-hidden tracking-wide overflow-y-hidden snap-x snap-mandatory scroll-smooth'>
          {ReviewsData.map((item) => {
            return (
              <div key={uuidv4()} className='relative bg-bostonBlue p-6 rounded-lg sm:min-w-[25rem] text-center flex flex-col items-center gap-8 shadow-smallContainer snap-center'>
                <div className='absolute h-12 w-full bg-cloudBurstBlue' />
                <div className={`absolute top-0 w-full h-[900px] bg-[url(assets/smallCircles.svg)] bg-cover bg-no-repeat opacity-5 ${item.bgPos}`} />
                <div className='relative z-20 flex flex-col gap-4 items-center'>
                  <div className="h-24 w-24 bg-[url('assets/pfp.svg')] bg-cover bg-no-repeat bg-center rounded-full" />
                    <LargeHeading size="md">{ item.name }</LargeHeading>
                  </div>
                <p className='relative z-20'>{ item.comment }</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* partnered with */}

      {/* footer */}
      <div className='mt-[95px] min-h-[200px] bg-gradient-to-b from-[#2C3F6B] to-cloudBurstBlue w-full flex items-center justify-center text-white'>Under Construction</div>
    </>

    
  )
}

export default Home