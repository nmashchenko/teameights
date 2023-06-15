// * Modules
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
  }
`

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

  @media screen and (max-width: 768px) {
    z-index: ${(props) => (props.active ? '999' : '100')};
    width: ${(props) => (props.active ? '100vw' : '270px')};
    pointer-events: all;
  }
`

export const NavMenu = styled.nav`
  pointer-events: all;
  width: 100%;
  height: 100%;
  max-width: ${(props) => (props.active ? '270px' : '88px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) =>
    props.active ? 'linear-gradient(90.45deg, #1a1c22 62.8%, #2f3239 209.77%)' : '#1A1C22'};
  transition: all 0.2s ease;
  padding: 0 16px;
  padding-top: 48px;

  @media screen and (max-width: 768px) {
    max-width: 270px;
    /* display: ${(props) => (props.active ? 'block' : 'none')}; */
    max-width: ${(props) => (props.active ? '270px' : '0px')};
    pointer-events: ${(props) => (props.active ? 'all' : 'none')};
    opacity: ${(props) => (props.active ? '1' : '0')};
  }
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
  overflow: hidden;
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
  overflow: hidden;
  transition: background-color 0.2s;
  background-color: ${(props) => props.modalActive && '#5d9d0b'};
  &:hover {
    background-color: ${(props) => !props.modalActive && '#2f3239'};
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
  overflow: hidden;
  white-space: nowrap;
`

export const MobileNavBarIconWrapper = styled.div`
  position: absolute;
  top: 47px;
  left: 4.1%;
  display: none;
  cursor: pointer;
  z-index: 999;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.active ? 'none' : 'block')};
  }
`
