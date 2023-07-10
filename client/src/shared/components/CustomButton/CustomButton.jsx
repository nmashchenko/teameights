import { Button, IconWrapper } from './CustomButon.styles'

const CustomButton = ({
  children,
  background,
  type = 'button',
  border,
  icon,
  iconPosition,
  onClick,
  maxWidth,
  ...props
}) => {
  return (
    <Button
      type={type}
      border={border}
      background={background}
      onClick={onClick}
      maxWidth={maxWidth}
      {...props}
    >
      {icon && iconPosition === 'left' && <IconWrapper>{icon}</IconWrapper>}
      {children}
      {icon && iconPosition === 'right' && <IconWrapper>{icon}</IconWrapper>}
    </Button>
  )
}

export default CustomButton
