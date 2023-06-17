import styled from 'styled-components'

import FlexWrapper from '../../shared/components/FlexWrapper/FlexWrapper'

export const StyledModalSearch = styled.div`
  position: fixed;
  z-index: 9999;
  padding: 24px 24px 0;
  background-color: #26292b;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ModalSearchContainer = styled(FlexWrapper)`
  max-width: 312px;
  margin: 0 auto;
  padding: 6px 0;
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
  font-family: 'Rubik';
  line-height: 140%;
  color: #fff;
`
