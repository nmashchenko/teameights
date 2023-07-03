// * Modules
import styled from 'styled-components'

import IconWrapper from '../../../../shared/ui/IconWrapper/IconWrapper'

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 37px;
  margin-bottom: 33px;

  @media (max-width: 1023px) {
    margin-top: 25px;
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
  @media (max-width: 1023px) {
    display: none;
  }
`

export const SearchIconWrapper = styled(IconWrapper)`
  cursor: pointer;
  display: none;
  --icon-size: 25px;
  width: var(--icon-size);
  height: var(--icon-size);
  position: absolute;
  top: calc(50% - (var(--icon-size) - (var(--icon-size) / 2)));
  right: 27px;
  @media (max-width: 1023px) {
    display: flex;
  }
`
