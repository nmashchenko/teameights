import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavItem = styled.li``

export const StyledLink = styled(NavLink)`
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

export const IconNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 24px;
    height: 24px;
  }
`
export const ItemTitle = styled.span`
  transition: opacity 0.2s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  font-size: 16px;
  line-height: 140%;
  color: #fff;
`
