import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode,
}

const ReviewContainer = ({ ...props }: ContainerProps) => {
  return (
    <div>ReviewContainer</div>
  )
}

export default ReviewContainer