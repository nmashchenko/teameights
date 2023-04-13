import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { IconNav, ItemTitle, StyledNavItem } from './NavItem.styles'

const StyledLink = styled(NavLink)`
  position: relative;
  transition: opacity 0.2s;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  padding: 8px 16px;
  transition: background-color 0.5s;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: #2f3239;
  }
  &.active {
    background-color: #5d9d0b;
  }
`

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
