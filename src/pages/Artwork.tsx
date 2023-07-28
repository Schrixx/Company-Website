import { ReactNode, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Layout from 'src/components/Layout'
import LargeHeading from 'src/components/ui/LargeHeading'

import bgImg from 'assets/art/BluePic3.jpg'
import birdImg from 'assets/art/hummingBird.jpg'
import mtnImg from 'assets/art/mountains.jpg'
import redFlowerImg from 'assets/art/redFlower.jpg'
import pinkFlowerImg from 'assets/art/pinkFlower.jpg'

import { PiArrowCircleDownFill } from 'react-icons/pi'
import { PiArrowCircleUpFill } from 'react-icons/pi'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const Artwork = () => {
  let [showState, setShowState] = useState<boolean>(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  let imgArr1: ReactNode[] = []
  let imgArr2: ReactNode[] = []

  const showToggler = () => {
    setShowState((showState) => !showState)
    window.scrollTo({top: 0, left: 0})
  }

  const scrollHandler = (direction: number, section: number) => {
    if (section === 1 && scrollRef.current !== null) {
      scrollRef.current.scrollLeft += direction;
    }
    if (section === 2 && scrollRef2.current !== null) {
      scrollRef2.current.scrollLeft += direction;
    }
  }

  // no. of individual elements
  for (let i = 0; i < 8; i++) {
    imgArr1.push(
      <>
        {/* making the rows min-content makes it so text doesn't overflow */}
        <div key={uuidv4()} className={`${showState ? "grid" : "hidden xl:grid"} gap-8 xl:grid-rows-[min-content] p-8 bg-gray-300 rounded-md shadow-container snap-start`}>
          <img src={bgImg} alt="art img" className="w-full brightness-75 aspect-video object-cover" />
          <p>Image caption text.</p>
        </div>
      </>
    )
  }

  // no. of groups
  for (let i = 0; i < 4; i++) {
    imgArr2.push(
      <>
        <div key={uuidv4()} className='grid xl:grid-flow-col grid-flow-row gap-8 snap-start'>
          <div className='grid gap-8 grid-rows-[min-content] p-8 bg-gray-300 rounded-md shadow-container'>
            <img src={bgImg} alt="art img" className="w-full brightness-75 aspect-video object-cover" />
          </div>
          <div className='grid gap-8 grid-rows-[min-content] p-8 bg-gray-300 rounded-md shadow-container'>
            <img src={birdImg} alt="art img" className="w-full brightness-75 aspect-video object-cover" />
          </div>
          <div className='grid gap-8 grid-rows-[min-content] p-8 bg-gray-300 rounded-md shadow-container'>
            <img src={redFlowerImg} alt="art img" className="w-full brightness-75 aspect-video object-cover" />
          </div>
          <div className='grid gap-8 grid-rows-[min-content] p-8 bg-gray-300 rounded-md shadow-container'>
            <img src={mtnImg} alt="art img" className="w-full brightness-75 aspect-video object-cover" />
          </div>
          <div className='grid gap-8 grid-rows-[min-content] p-8 bg-gray-300 rounded-md shadow-container'>
            <img src={pinkFlowerImg} alt="art img" className="w-full brightness-75 aspect-video object-cover" />
          </div>
        </div>
      </>
    )
  }

  return (
    <Layout>
      {/* space under fixed nav */}
      <div className="pt-standard"></div>

      {/* single items */}
      <div className='text-center p-8'><LargeHeading size="md">Individual Images</LargeHeading></div>
      <IconContext.Provider value={{className: "text-cloudBurstBlue hover:text-[#61D9FF] h-6 w-6"}}>
        <div className={`hidden xl:flex justify-end mr-[10%] gap-8 pb-8`}>
          <div className='hidden lg:flex justify-center items-center bg-black bg-opacity-10 rounded-full h-10 w-10'>
            <button onClick={() => scrollHandler(-300, 1)}><BsChevronLeft /></button>
          </div>
          <div className='hidden lg:flex justify-center items-center bg-black bg-opacity-10 rounded-full h-10 w-10'>
            <button onClick={() => scrollHandler(300, 1)}><BsChevronRight /></button>
          </div>
        </div>
      </IconContext.Provider>
      {/* grid-auto-flow: column; makes children columns so there's no need to know the amount of children*/}
      <div key={uuidv4()} ref={scrollRef} className="grid xl:grid-flow-col xl:auto-cols-[21%] max-w-[500px] mx-auto xl:max-w-none xl:mx-0 gap-8 px-8 pb-8 xl:overflow-x-hidden xl:overscroll-x-contain xl:snap-x overscroll-y-contain snap-y snap-mandatory scroll-px-8 text-cloudBurstBlue scroll-smooth">
        <div className='grid gap-8 xl:grid-rows-[min-content] p-8 bg-gray-300 rounded-md shadow-container snap-start'>
          <img src={bgImg} alt="art img" className="w-full brightness-75 aspect-video object-cover" />
          <p>Image caption text.</p>
        </div>
        <div className={`${showState ? "hidden": ""} xl:hidden flex flex-col items-center`}>
          <button onClick={showToggler} className='flex flex-col items-center gap-4'>
            <p>Show More</p>
            <PiArrowCircleDownFill color="cloudBurstBlue" size="40px" />
          </button>
        </div>
        {imgArr1}
        <div className={`${showState ? "": "hidden"} xl:hidden flex flex-col items-center`}>
          <button onClick={showToggler} className='flex flex-col items-center gap-4'>
            <p>Show Less</p>
            <PiArrowCircleUpFill color="cloudBurstBlue" size="40px" />
          </button>
        </div>
      </div>

      {/* element groups */}
      <div className='text-center p-8'><LargeHeading size="md">Image Groups</LargeHeading></div>
      <IconContext.Provider value={{className: "text-cloudBurstBlue hover:text-[#61D9FF] h-6 w-6"}}>
        <div className={`hidden xl:flex justify-end mr-[10%] gap-8 pb-8`}>
          <div className='hidden lg:flex justify-center items-center bg-black bg-opacity-10 rounded-full h-10 w-10'>
            <button onClick={() => scrollHandler(-1000, 2)}><BsChevronLeft /></button>
          </div>
          <div className='hidden lg:flex justify-center items-center bg-black bg-opacity-10 rounded-full h-10 w-10'>
            <button onClick={() => scrollHandler(1000, 2)}><BsChevronRight /></button>
          </div>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{className: "text-cloudBurstBlue hover:text-[#61D9FF] h-6 w-6"}}>
        <div className='grid grid-cols-3 xl:grid-cols-none'>
          <div className={`flex items-center justify-center xl:hidden col-start-1 gap-8 pb-8`}>
            <div className='hidden lg:flex justify-center items-center bg-black bg-opacity-10 rounded-full h-16 w-16'>
              <button onClick={() => scrollHandler(-300, 2)}><BsChevronLeft /></button>
            </div>
          </div>
          <div key={uuidv4()} ref={scrollRef2} className="grid grid-flow-col auto-cols-[100%] max-w-[400px] mx-auto xl:max-w-none xl:mx-0 gap-8 px-8 pb-8 overflow-x-hidden overscroll-x-contain snap-x snap-mandatory scroll-px-8 scroll-smooth">
            {imgArr2}
          </div>
          <div className={`flex items-center justify-center xl:hidden col-start-3 gap-8 pb-8`}>
            <div className='hidden lg:flex justify-center items-center bg-black bg-opacity-10 rounded-full h-16 w-16'>
              <button onClick={() => scrollHandler(300, 2)}><BsChevronRight /></button>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </Layout>
  )
}

export default Artwork