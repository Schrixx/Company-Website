import LargeHeading from "src/components/ui/LargeHeading"

type Props = {}

const NotFound = ({}: Props) => {
  return (
    <div className="flex items-center justify-center">
      <LargeHeading size='lg'>404 Not Found</LargeHeading>
    </div>
  )
}

export default NotFound