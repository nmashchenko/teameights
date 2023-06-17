// * Modules
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  margin: 49px 0 48px 0;

  @media screen and (min-width: 0px) and (max-width: 980px) {
    display: none;
  }
`

export const AlternativeLogoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  @media screen and (min-width: 0px) and (max-width: 980px) {
    display: inherit;
  }
`

export const SearchPanel = styled.div`
  position: static;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 770px;
  min-height: 40px;
  color: white;
`

export const SearchPanelWrapper = styled.div`
  display: flex;
  border: 1px solid #46a11b;
  border-radius: 10px;
`
