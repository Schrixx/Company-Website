import MainPic from "assets/MainPic2Cropped.jpg"

type Props = {}

const Home = ({}: Props) => {
  return (
    <>
      <div className="pt-[95px] w-full box-border">
        <div className="relative w-full text-center text-white h-min-full">
          <img src={MainPic} className="w-full" />
          <div className="absolute top-1/2 left-1/2 max-w-6xl tracking-wide z-10 kms">
            <h1 className="text-6xl">Schrixx is an organization of talented illustrators passionate about their work.</h1>
            <p>Commisioned illustrators are experts in their field and will ensure your artwork is of the highest quality.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home