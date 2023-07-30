import Layout from "src/components/Layout"

import teamwork from 'assets/teamwork.jpg'

const About = () => {
  return (
    <Layout>
        {/* space under fixed nav */}
        <div className="pt-standard"></div>

        <div className="relative w-full flex flex-col items-start justify-center">
          <div className="min-h-[600px] w-full bg-[url('assets/topWave.svg')] bg-no-repeat bg-cover" />
          <div className="hidden bg-fixed h-[750px] w-full bg-[url('assets/friends.jpg')] bg-no-repeat bg-cover" />
          <div className="absolute w-[1024px] mx-auto flex justify-center">
            <p>Hello</p>
            <img src={teamwork} className="w-auto h-full rounded-full" />
          </div>
        </div>
    </Layout>
  )
}

export default About