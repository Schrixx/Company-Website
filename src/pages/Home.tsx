import { BsClockFill } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { BsLightningFill } from 'react-icons/bs'
import { TbHexagonNumber1 } from 'react-icons/tb'
import { TbHexagonNumber2 } from 'react-icons/tb'
import { TbHexagonNumber3 } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import Button from 'src/components/ui/Button'
import LargeHeading from 'src/components/ui/LargeHeading'

type Props = {}

const Home = ({}: Props) => {
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
        <div className='w-9/12 text-center tracking-wide text-cloudBurstBlue flex flex-col items-center gap-8'>
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
        <div className="py-standard pb-0 w-full flex flex-col items-center">
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
      <div className='relative py-standard min-h-[800px] flex flex-col items-start justify-center px-4'>
        <div className='w-full sm:max-w-[605px] md:max-w-[732px] lg:max-w-[1000px] mx-auto'>
          <div className='flex items-start border-2'>
            <LargeHeading>Hello</LargeHeading>
          </div>
        </div>
        <div className='relative z-10 h-full sm:max-w-md flex flex-nowrap gap-8 overflow-x-auto tracking-wide text-white'>
          <div className='bg-fedora p-6 rounded-lg'>
            <div className="h-14 w-14 bg-[url('assets/pfp.svg')] bg-cover bg-no-repeat bg-center rounded-full" />
            <LargeHeading size="md">Hello</LargeHeading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet itaque magni vitae. Quia, esse.</p>
          </div>    
        </div>
      </div>

      {/* footer */}
      <div className='min-h-[200px] bg-gradient-to-b from-[#2C3F6B] to-cloudBurstBlue w-full flex items-center justify-center text-white'>Under Construction</div>
    </>

    
  )
}

export default Home