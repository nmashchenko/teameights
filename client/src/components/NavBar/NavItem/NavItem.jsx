import { IconNav, ItemTitle, StyledLink, StyledNavItem } from './NavItem.styles'

const NavItem = ({ active, ...props }) => {
  return (
    <StyledNavItem {...props}>
      <StyledLink
        active={active}
        className={({ isActive }) => (isActive ? 'active' : '')}
        to={props?.path}
      >
        <IconNav>{props?.icon}</IconNav>
        <ItemTitle active={active}>{props?.title}</ItemTitle>
      </StyledLink>
    </StyledNavItem>
  )
}

export default NavItem
