import MainPic from "assets/MainPic2Cropped.jpg"
import Navbar from "src/components/Navbar"

type Props = {}

const Home = ({}: Props) => {
  return (
    <>
      <Navbar />
      <div className="p-8 pt-[129px]">
        <img src={MainPic} className="rounded-md" />
        <p>
          
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac eleifend nulla. Cras tempus ac est eget fermentum. Donec elit nibh, dictum vitae diam sed, consectetur volutpat tortor. Nullam tincidunt tincidunt volutpat. Suspendisse tincidunt purus sed turpis condimentum pulvinar. Duis laoreet ac arcu non efficitur. Phasellus varius, elit at mattis eleifend, dolor mauris vehicula dui, sit amet mollis lacus nisl ac mauris. Vestibulum ornare nibh non ipsum tempor, sed blandit tellus ultricies. Nullam nec fermentum nisi. In volutpat semper erat, id accumsan sem placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque dolor, finibus sit amet felis sollicitudin, porttitor malesuada nibh. Morbi facilisis elit lorem, at maximus lectus gravida rhoncus. Nulla sed felis in felis vulputate elementum.

Nulla vitae varius lorem. Cras aliquet tempus ligula, quis scelerisque orci egestas ac. Aliquam erat volutpat. Nam elementum libero sed augue lobortis finibus. Duis sed gravida tellus, id rhoncus erat. Maecenas tincidunt nisi nec massa fringilla molestie. Cras placerat enim imperdiet, imperdiet erat nec, dapibus metus. Sed dui nunc, lobortis a tellus ac, commodo vehicula ante. Pellentesque nisi urna, aliquam nec leo a, maximus ornare lorem. Aliquam erat volutpat.

Nunc libero ligula, mattis ac molestie ac, ornare et quam. Curabitur id faucibus dui. Pellentesque euismod magna eget metus porta rutrum. In sit amet justo mollis, venenatis nibh non, aliquam magna. Cras non eros vitae turpis porta efficitur. Phasellus bibendum, turpis ut commodo ultrices, mauris purus varius nisi, eu convallis ligula quam nec turpis. Vivamus hendrerit pellentesque scelerisque. Curabitur a suscipit massa, vitae maximus quam. In ligula sem, tempus sit amet sapien sit amet, porta tempor nibh. Aliquam euismod, elit non bibendum congue, ligula nisl laoreet augue, in dignissim dolor justo sit amet massa. Duis aliquam eros arcu. Proin viverra eget quam et consequat. Fusce consectetur metus sollicitudin nisl pellentesque consequat.

Fusce arcu justo, commodo ac ligula eget, iaculis auctor lacus. Ut ut metus urna. Aliquam erat volutpat. Nam nec est a ex tincidunt laoreet. Vivamus eleifend ipsum sit amet felis condimentum, in vestibulum elit fringilla. Aliquam erat volutpat. Morbi bibendum a dui id interdum. Nunc fermentum euismod turpis, vel auctor magna congue et. Aenean eget metus iaculis, sollicitudin tellus quis, mollis odio.

Morbi interdum rhoncus urna, eu sagittis metus varius vitae. Curabitur fermentum lorem sed blandit gravida. Sed molestie sagittis ex vitae aliquet. Vestibulum vitae ligula dolor. Sed condimentum vitae sem et lobortis. Sed tempor neque vitae nunc cursus, a gravida sapien sodales. Vestibulum nec nisl augue. Curabitur condimentum magna quis auctor auctor. Duis dictum nibh mauris, vel tincidunt eros viverra ac.
        </p>
      </div>
    </>
  )
}

export default Home