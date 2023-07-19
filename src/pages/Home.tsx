import One from 'assets/numbers/one.svg'
import Two from 'assets/numbers/two.svg'
import Three from 'assets/numbers/three.svg'
import { TfiAlarmClock } from 'react-icons/tfi'
import { IconContext } from 'react-icons'

type Props = {}

const Home = ({ }: Props) => {
  return (
    <>
      {/* main img + text */}
      <div className="relative pt-[95px] w-full flex flex-col justify-center items-center">
        <div className="bg-fixed h-[780px] w-full bg-[url('assets/BluePic3.jpg')] bg-no-repeat bg-cover brightness-50" />
        {/* backdrop-blur-sm backdrop-brightness-125 */}
        <div className="absolute text-center w-9/12 pb-5 flex flex-col items-center gap-4 text-white tracking-wide rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold">Schrixx creates professional art for your creative projects or personal use.</h1>
          <div className="h-[2px] w-4/6 bg-baliHai"></div>
          <p className="text-2xl font-medium">Commision talented illustrators that will ensure your artwork is of the highest quality.</p>
          <a href=""><button className="border-2 w-fit p-2 border-white hover:border-baliHai text-xl lg:text-3xl hover:bg-baliHai font-medium rounded-full">Contact Us</button></a>
        </div>
      </div>

      {/* about */}
      <div className='py-[95px] min-h-[600px] w-full flex flex-col items-center justify-center'>
        <div className='w-9/12 text-center tracking-wide text-cloudBurstBlue flex flex-col items-center gap-8'>
          <div className='flex flex-col gap-4 w-full items-center'>
            <p className='text-baliHai'>about us...</p>
            <h1 className='text-4xl md:text-5xl font-semibold'>an artist made company</h1>
            <div className='h-2 md:h-3 bg-bostonBlue w-4/6'></div>
          </div>
          <p className='mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsa iusto, architecto numquam nulla dolor molestiae error vel reprehenderit voluptates debitis itaque, placeat quibusdam porro quia voluptatum ratione nam inventore odio libero perferendis consequatur aliquam! Minus aliquid sed officia. Sit.</p>
          <a href=""><button className="border-2 w-fit p-2 border-bostonBlue hover:bg-bostonBlue hover:text-white text-xl lg:text-3xl font-medium rounded-full">Learn More</button></a>
        </div>
      </div>

      {/* why us */}
      <IconContext.Provider value={{color: '#746671'}}>
        <div className='relative h-[1000px] w-full flex flex-col items-center justify-start'>
          <div className='absolute min-h-[850px] top-0 bg-gradient-to-tl from-bostonBlue to-baliHai w-full' />
          <div className='mt-20 relative h-full w-3/5 z-20 flex flex-col items-center text-white tracking-wide gap-8'>
            <div>
              <h1 className='text-4xl font-semibold'>Why choose Schrixx?</h1>
              <p></p>
            </div>
            <div className='h-1/3 w-full bg-cloudBurstBlue rounded-lg'>
              <TfiAlarmClock />
              <p></p>
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