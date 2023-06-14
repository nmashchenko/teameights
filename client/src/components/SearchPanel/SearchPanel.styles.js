import styled from 'styled-components'

export const StyledSearchPanel = styled.div`
  position: static;
  z-index: 300;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 768px;
  min-height: 40px;
  color: white;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SearchPanelWrapper = styled.div`
  display: flex;
  border: 1px solid #46a11b;
  border-radius: 10px;
`
