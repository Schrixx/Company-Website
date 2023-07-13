type Props = {}

const Home = ({ }: Props) => {
  return (
    <>
      {/* main img + text */}
      <div className="relative py-[95px] w-full flex flex-col justify-center items-center align-center">
        <div className="h-[680px] w-full bg-[url('assets/BluePic.jpg')] bg-no-repeat bg-cover blur-sm brightness-75" />
        <div className="absolute text-center w-4/5 flex flex-col items-center gap-4 text-white tracking-wide rounded-sm backdrop-blur">
          <h1 className="text-4xl lg:text-5xl font-bold">Schrixx aims to deliver professional art for your creative projects or personal use.</h1>
          <div className="md:h-[2px] w-4/6 bg-black"></div>
          <p className="text-2xl font-medium">Commision talented illustrators that will ensure your artwork is of the highest quality.</p>
          <a href=""><button className="border-2 w-fit p-2 border-white hover:border-black text-xl lg:text-3xl hover:bg-black font-medium">Contact Us</button></a>
        </div>
      </div>

      {/*  */}
      <div className="relative py-3 px-4">
        <div className="h-[70px]"></div>
        <div className="absolute top-0 left-0 flex text-center flex-col gap-8">
          <h1 className="text-4xl lg:text-5xl font-bold">The Process</h1>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae praesentium impedit est officiis maiores, asperiores nam assumenda tempore necessitatibus voluptatem, placeat consectetur similique libero accusantium deleniti quod, modi error sint distinctio dicta adipisci. Eos aperiam, voluptatem eius expedita, vel, natus odio qui repudiandae totam ea neque consectetur a laudantium.</p>
        </div>
      </div>
      <div className="aspect-[960/300] w-full bg-no-repeat bg-cover bg-[url('assets/layeredWaves.svg')] border-t-2"></div>
      <div className="aspect-[960/300] w-full bg-no-repeat bg-cover bg-[url('assets/bottomWave.svg')]"></div>
    </>
  )
}

export default Home