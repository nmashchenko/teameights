import { Button } from './CustomButon.styles'

const CustomButton = ({ onClick, children, ...props }) => {
  return (
    <Button {...props} onClick={onClick}>
      {children}
    </Button>
  )
}

export default CustomButton
