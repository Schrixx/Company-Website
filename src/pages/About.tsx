import Layout from "src/components/Layout"

import friends from 'assets/friends.jpg'
import brushes from 'assets/brushes.jpg'
import story from 'assets/story.jpg'
import profilePicture from 'assets/pfp.jpg'

import LargeHeading from "src/components/ui/LargeHeading"
import { MemberData } from "src/data/MemberData"

const About = () => {
  return (
    <Layout>
        {/* space under fixed nav */}
        <div className="pt-standard"></div>

        {/* wave */}
        <div className="relative w-full flex justify-center">
          <div className="min-h-[600px] w-full bg-[url('assets/topWave2.svg')] bg-no-repeat bg-cover" />
          <div className="absolute w-full flex flex-col-reverse items-center gap-12 lg:gap-0 lg:flex-row lg:justify-around lg:pt-12 pt-14">
            <div className="max-w-[46ch] text-center text-white tracking-wide">
              <LargeHeading size="lg">A Group of Genuinely Passionate Artists.</LargeHeading>
            </div>
            <img src={friends} className="hidden lg:block h-[210px] w-auto lg:w-[30vw] lg:h-full rounded-full" />
          </div>
        </div>

        {/* mission */}
        <div className="py-standard">
          <div className="px-4 max-w-5xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-12">
            <div className="max-w-[55ch] flex flex-col items-center gap-8 tracking-wide">
              <div className="w-full text-center"><LargeHeading size="lgScreen" className="text-black">Our Mission</LargeHeading></div>
              <p className="text-cloudBurstBlue">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, fuga corrupti! Animi aliquam corporis numquam quaerat dicta totam voluptas fugit ipsam nobis, ducimus laborum blanditiis nulla tempore, omnis atque dolores in! Magnam voluptatibus odit ullam architecto quo ad illum rerum dolor! Blanditiis omnis aperiam officia commodi saepe dolor obcaecati minus iste magni ab aspernatur tempora, necessitatibus quasi culpa id cupiditate vitae fuga neque, cumque nihil corporis sed voluptate. Maiores, veritatis?</p>
            </div>
            <img src={brushes} className="w-96 rounded-2xl" />
          </div>
        </div>

        {/* story */}
        <div className="py-standard">
          <div className="px-4 max-w-5xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-12">
            <img src={story} className="h-80 rounded-2xl" />
            <div className="max-w-[55ch] flex flex-col items-center gap-8 tracking-wide">
              <div className="text-center"><LargeHeading size="lgScreen" className="text-black">Our Story</LargeHeading></div>
              <p className="text-cloudBurstBlue">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, fuga corrupti! Animi aliquam corporis numquam quaerat dicta totam voluptas fugit ipsam nobis, ducimus laborum blanditiis nulla tempore, omnis atque dolores in! Magnam voluptatibus odit ullam architecto quo ad illum rerum dolor! Blanditiis omnis aperiam officia commodi saepe dolor obcaecati minus iste magni ab aspernatur tempora, necessitatibus quasi culpa id cupiditate vitae fuga neque, cumque nihil corporis sed voluptate. Maiores, veritatis?</p>
            </div>
          </div>
        </div>

        {/* members */}
        <div className="text-center">
          <LargeHeading size="xl">Our Family</LargeHeading>
          <div className="py-standard w-full flex flex-wrap justify-center gap-8">
            {MemberData.map((item) => {
              return (
                <div className="flex flex-col gap-4 px-4 nax-w-5xl">
                  <img src={profilePicture} className="w-80 shadow-md hover:scale-110 transition-transform duration-150" />
                  <LargeHeading size="md">{item.name}</LargeHeading>
                  <p className="text-bostonBlue">{item.title}</p>
                </div>
              )
            })}
          </div>
        </div>

    </Layout>
  )
}

export default About