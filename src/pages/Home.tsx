type Props = {}

const Home = ({ }: Props) => {
  return (
    <>
      <div className="relative py-[95px] w-full flex flex-col justify-center items-center align-center">
        <div className="h-[680px] w-full bg-[url('assets/BluePic.jpg')] bg-no-repeat bg-cover blur-sm brightness-75" />
        <div className="absolute text-center w-4/5 flex flex-col items-center gap-4 text-white tracking-wide">
          <h1 className="text-4xl lg:text-5xl">Schrixx aims to deliver professional art for your creative projects or personal use.</h1>
          <div className="md:h-[1px] w-4/6 bg-black"></div>
          <p className="text-2xl lg:text-3xl">Commision talented illustrators that will ensure your artwork is of the highest quality.</p>
          <a href=""><button className="border-2 w-fit p-2 border-white hover:border-[#1c1c1c] text-xl lg:text-3xl mb-2 hover:bg-[#1c1c1c]">Contact Us</button></a>
        </div>
      </div>
    </>
  )
}

export default Home