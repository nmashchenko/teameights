import { Button, IconWrapper } from './CustomButon.styles'

const CustomButton = ({
  children,
  background,
  type = 'button',
  border,
  icon,
  iconPosition,
  onClick,
  ...props
}) => {
  return (
    <Button type={type} border={border} background={background} onClick={onClick} {...props}>
      {icon && iconPosition === 'left' && <IconWrapper>{icon}</IconWrapper>}
      {children}
      {icon && iconPosition === 'right' && <IconWrapper>{icon}</IconWrapper>}
    </Button>
  )
}

export default CustomButton
