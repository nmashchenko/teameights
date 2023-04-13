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
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90.45deg, #1a1c22 62.8%, #2f3239 209.77%);
  transition: ${(props) => props.transition || 'all 0.35s linear'};
  padding: 0 16px;
  padding-top: 48px;
`

export const NavBarToggle = styled.div`
  position: relative;
  justify-content: flex-end;
  width: 100%;
  display: flex;
  align-items: center;
`

export const NavBarLogo = styled.div`
  transition: opacity 0.2s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: absolute;
  left: 12px;
`

export const NavBarClose = styled.div`
  cursor: pointer;
  transform: rotateY(${(props) => (props.active ? '0deg' : '180deg')});
  padding: 0 12px;
`

export const NavItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 36px 0;
  border-bottom: 1px solid #2f3239;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const NavInteractions = styled.div`
  padding-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const NavInteractBtn = styled.div`
  cursor: pointer;
  font-size: 16px;
  line-height: 140%;
  color: #fff;
  border-radius: 10px;
  padding: 8px 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: #2f3239;
  }
  &:active {
    background-color: #5d9d0b;
  }
  p {
    transition: opacity 0.2s;
    opacity: ${(props) => (props.active ? 1 : 0)};
    pointer-events: ${(props) => (props.active ? 'all' : 'none')};
    margin: 0;
    white-space: nowrap;
  }
`

export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 24px;
    height: 24px;
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
export const NavBarCopyright = styled.h3`
  transition: opacity 0.2s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  display: block;
  margin-top: auto;
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 11px;
  text-transform: capitalize;
  color: #86878b;
  white-space: nowrap;
`
