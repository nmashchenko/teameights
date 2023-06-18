// * Modules
import Box from '@mui/material/Box'
import { Form } from 'formik'
import styled from 'styled-components'

import IconWrapper from '../IconWrapper/IconWrapper'

export const FiltersWrapper = styled.div`
  width: 100%;
  padding-left: 88px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`
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
  margin-top: 49px;
  margin-bottom: 48px;
`

export const SearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 770px;
  min-height: 40px;
  color: white;
  padding-left: 24px;
  padding-right: 24px;
`

export const SearchPanelWrapper = styled.div`
  display: flex;
  border: 1px solid #46a11b;
  border-radius: 10px;
  @media (max-width: 480px) {
    display: none;
  }
  & > div:last-child {
    border: none;
    border-radius: 0 10px 10px 0;
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
  @media (max-width: 480px) {
    display: flex;
  }
`
