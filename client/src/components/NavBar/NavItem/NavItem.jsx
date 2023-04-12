import { Link } from 'react-router-dom'
import styled from 'styled-components'

import ChevronRight from '../../../assets/ChevronRight'

export const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  height: 50px;
  margin-bottom: 0.7rem;

  @media screen and (min-width: 1440px) {
    height: 60px;
  }

  > a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    font-weight: 500;
    padding: 0 15px;
    transition: background-color 200ms linear;

    @media screen and (min-width: 1440px) {
      font-size: 1.0625rem;
    }
  }

  > a:hover {
    background: #5d9d0b;
    font-size: 1.03125rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    @media screen and (min-width: 1440px) {
      font-size: 1.09375rem;
    }
  }

  a:active {
    background: #5d9d0b;
  }
  a:hover div {
    opacity: 1;
  }
`

export const IconNav = styled.div`
  width: 40px;
  height: 40px;
  background: #2e3239;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`
export const ItemTitle = styled.span`
  margin-left: 25px;
`
export const ShowChevron = styled.div`
  margin-left: auto;
  opacity: 0;
  display: flex;
  align-items: center;
`

const NavItem = (props) => {
  return (
    <StyledNavItem {...props}>
      <Link to={props?.path}>
        <IconNav>{props?.icon}</IconNav>
        <ItemTitle>{props?.title}</ItemTitle>
        <ShowChevron>
          <ChevronRight />
        </ShowChevron>
      </Link>
    </StyledNavItem>
  )
}

export default NavItem
