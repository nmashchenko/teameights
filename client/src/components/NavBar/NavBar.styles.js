// * Modules
import styled from 'styled-components'

export const NavIconContainer = styled.div`
  margin-right: 25px;
  cursor: pointer;
`

export const NavWrapper = styled.div`
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  width: 100vw;
  height: 100vh;
  background: rgba(${(props) => (props.active ? '0, 0, 0, 0.25' : '0, 0, 0, 0')});
  backdrop-filter: ${(props) => (props.active ? 'blur(5px)' : 'none')};
  -webkit-backdrop-filter: ${(props) => (props.active ? 'blur(5px)' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`

export const NavMenu = styled.nav`
  pointer-events: all;
  width: 100%;
  height: 100%;
  max-width: ${(props) => (props.active ? '270px' : '88px')};
  display: flex;
  justify-content: center;
  background: linear-gradient(90.45deg, #1a1c22 62.8%, #2f3239 209.77%);
  transition: ${(props) => props.transition || 'all 0.5s linear'};
  padding: 0 16px;
  padding-top: 48px;
`

export const NavMenuItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const NavBarToggle = styled.div`
  position: relative;
  justify-content: flex-end;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const NavBarLogo = styled.div`
  transition: opacity 0.2s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: absolute;
  left: 0;
`

export const NavBarClose = styled.div`
  transform: rotateY(${(props) => (props.active ? '0deg' : '180deg')});
  padding: 0 12px;
`

export const UserText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '.875rem'};
  text-transform: ${(props) => props.textTransform || 'none'};
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
