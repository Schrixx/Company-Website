import One from 'assets/numbers/one.svg'
import Two from 'assets/numbers/two.svg'
import Three from 'assets/numbers/three.svg'
import { BsClockFill } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { BsLightningFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Button from 'src/components/ui/Button'
import LargeHeading from 'src/components/ui/LargeHeading'

type Props = {}

const Home = ({ }: Props) => {
  return (
    <>
      {/* main img + text */}
      <div className="relative pt-[95px] w-full flex flex-col justify-center items-center">
        <div className="bg-fixed h-[780px] w-full bg-[url('assets/BluePic3.jpg')] bg-no-repeat bg-cover brightness-50" />
        <div className="absolute text-center w-9/12 pb-5 flex flex-col items-center gap-4 text-white tracking-wide rounded-xl">
          <LargeHeading font="bold">Schrixx creates professional art for your creative projects or personal use.</LargeHeading>
          <div className="h-[2px] w-4/6 bg-baliHai"></div>
          <p className="text-2xl font-medium">Commision talented illustrators that will ensure your artwork is of the highest quality.</p>
          <a href=""><Button>Contact Us</Button></a>
        </div>
      </div>

      {/* about */}
      <div className='py-[95px] min-h-[600px] w-full flex flex-col items-center justify-center'>
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
          <div className='mt-20 relative h-full w-full sm:max-w-3xl px-4 mx-auto z-20 flex flex-col items-center text-white tracking-wide gap-8'>
            <div className='text-center'>
              <LargeHeading font="semiBold" size="lg">Why choose Schrixx?</LargeHeading>
            </div>
            <div className='min-h-1/3 p-6 bg-white flex flex-col gap-8 items-center rounded-lg shadow-3xl'>
              <div className='flex items-center flex-col gap-8'>
                <span><BsLightningFill /></span>
                <p className='text-cloudBurstBlue font-bold text-2xl'>Lightning Fast Delivery</p>
              </div>
              <p className='text-cloudBurstBlue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error, voluptatem explicabo cumque ipsum pariatur necessitatibus omnis eum quibusdam deleniti!</p>
            </div>
            <div className='min-h-1/3 p-6 bg-white flex flex-col gap-8 items-center rounded-lg shadow-3xl'>
              <div className='flex items-center flex-col gap-8'>
                <span><BsClockFill /></span>
                <p className='text-cloudBurstBlue font-bold text-2xl'>Easy Scheduling</p>
              </div>
              <p className='text-cloudBurstBlue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error, voluptatem explicabo cumque ipsum pariatur necessitatibus omnis eum quibusdam deleniti!</p>
            </div>
            <div className='min-h-1/3 p-6 bg-white flex flex-col gap-8 items-center rounded-lg shadow-3xl'>
              <div className='flex items-center flex-col gap-8'>
                <span><FaPaintBrush /></span>
                <p className='text-cloudBurstBlue font-bold text-2xl'>Quality Guaranteed Artwork</p>
              </div>
              <p className='text-cloudBurstBlue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error, voluptatem explicabo cumque ipsum pariatur necessitatibus omnis eum quibusdam deleniti!</p>
            </div>
          </div>
        </div>
      </IconContext.Provider>

      {/* process */}
      <div className="py-[95px] w-full flex flex-col items-center pb-[95px]">
        <div className="w-9/12 text-center flex flex-col gap-10 tracking-wide">
          <h1 className="text-3xl lg:text-4xl font-bold">The Process</h1>
          <p>The process is simple and easy to understand!</p>
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:items-baseline">
            <div className="w-full md:w-[33.3333%] flex flex-col items-center gap-10">
              <img src={One} alt="one" className="h-20 w-20" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis tenetur explicabo consequuntur itaque error.</p>
            </div>
            <div className="w-full md:w-[33.3333%] flex flex-col items-center gap-10">
              <img src={Two} alt="two" className="h-20 w-20" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis tenetur explicabo consequuntur itaque error.</p>
            </div>
            <div className="w-full md:w-[33.3333%] flex flex-col items-center gap-10">
              <img src={Three} alt="three" className="h-20 w-20" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis tenetur explicabo consequuntur itaque error.</p>
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}

      {/* footer */}
    </>

    
  )
}

export default Home