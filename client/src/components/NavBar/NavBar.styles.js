// * Modules
import styled from 'styled-components'

export const NavIconContainer = styled.div`
  margin-right: 25px;
  cursor: pointer;
`

export const NavMenu = styled.nav`
  width: 325px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: rgb(26, 28, 34, 0.3);

  background: linear-gradient(180deg, rgba(26, 28, 34, 0.5) 0%, rgba(40, 47, 71, 0.5) 100%);
  top: 0;
  left: ${(props) => props.left || '-100%'};
  transition: ${(props) => props.transition || 'all 0.5s linear'};
  z-index: 999;
  border-radius: 0px 25px 25px 0px;
  -webkit-backdrop-filter: blur(2em);
  backdrop-filter: blur(2em);
  padding-top: 4rem;
`

export const NavMenuItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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

export const UserInfo = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`

export const NavBarToggle = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`

export const UserText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '.875rem'};
  color: ${(props) => props.color || '#FFF'};
  margin: ${(props) => props.margin || '0px'};
`

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  padding: 0 30px;

  @media screen and (min-width: 1440px) {
    margin-top: 25px;
  }
`
export const NavItem = styled.div`
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

export const ItemTitle = styled.span`
  margin-left: 25px;
`
export const ShowChevron = styled.div`
  margin-left: auto;
  opacity: 0;
  display: flex;
  align-item: center;
`

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: end;
  align-items: center;
  margin-bottom: 3rem;
`

export const SignOutButton = styled.button`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  width: 230px;
  height: 40px;
  background: #2e3239;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    font-size: 0.90625rem;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    height: 45px;
  }
`
