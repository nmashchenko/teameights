import { Drawer } from '@mui/material'
import styled from 'styled-components'

import FlexWrapper from '../../shared/components/FlexWrapper/FlexWrapper'

export const ModalWrapper = styled(Drawer)``

export const StyledModalSearch = styled.div`
  padding: 24px 24px 0;
  background-color: #26292b;
  width: 100dvw;
  height: 100dvh;
`

export const ModalSearchContainer = styled(FlexWrapper)`
  /* max-width: 312px; */
  height: 100%;
  margin: 0 auto;
  padding: 6px 0 24px;
`

export const ModalSearchTitle = styled.h2`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #5bd424;
`

export const ModalSearchList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ModalSearchItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;

  p {
    font-family: 'Rubik';
    line-height: 140%;
    color: #fff;
  }
`

export const ModalButton = styled.button`
  cursor: pointer;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  background: ${(props) => (props.outlined ? 'none' : '#46a11b')};
  border: 1px solid #46a11b;
  border-radius: 10px;
`
