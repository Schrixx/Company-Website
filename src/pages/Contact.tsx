import { useEffect } from 'react';
import Layout from 'src/components/Layout'
import LargeHeading from 'src/components/ui/LargeHeading'

const Contact = () => {

  // scroll top on load
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  })

  return (
    <Layout>
        {/* space under fixed nav */}
        <div className="pt-standard"></div>

        <div className='relative pt-standard xl:px-32 flex flex-col xl:flex-row justify-around items-center gap-8 w-full'>
        <div className="absolute bg-fixed z-[-10] h-[1080px] w-full bg-[url('assets/grid.svg')] bg-no-repeat bg-cover" />
          <div className='grid gap-4 max-w-xl text-center'>
            <LargeHeading size="md">Your creative journey starts here!</LargeHeading>
            <LargeHeading size="md">Contact us today to discuss commission price and details.</LargeHeading>
            <p className='text-bostonBlue'>Let's create something together! 🎨</p>
          </div>
          <div className='flex bg-white flex-col shadow-smallContainer rounded-xl'>
            <div className='pt-12 pl-12 text-black'><LargeHeading size="lg">Contact Us 📧</LargeHeading></div>
            <form className='flex flex-col gap-4 md:w-[500px] p-12 text-cloudBurstBlue'>
              <input type="text" placeholder='Full name*' className='bg-cloudBurstBlue p-1 bg-opacity-10 rounded-lg placeholder:text-gray-400 text-black outline-bostonBlue' autoFocus />
              <input type="text" placeholder='Email*' className='bg-cloudBurstBlue p-1 bg-opacity-10 rounded-lg text-black outline-bostonBlue' />
              <div className='flex flex-col'>
                <label className='italic text-slate-500 text-xs'>optional*</label>
                <label htmlFor="additionalInfo">Additional Information</label>
              </div>
              <textarea className='bg-cloudBurstBlue p-1 bg-opacity-10 rounded-lg h-48 text-black resize-none outline-bostonBlue' />
              <button className='p-2 bg-bostonBlue hover:bg-bostonCompliment text-white rounded-lg max-w-fit transition-colors'>Submit</button>
            </form>
          </div>
        </div>
    </Layout> 
  )
}

export default Contact