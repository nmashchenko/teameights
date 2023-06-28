import styled from 'styled-components'

export const StyledSearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1176px;
  min-height: 40px;
  color: white;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (max-width: 1440px) {
    max-width: 826px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 790px;
  }

  @media screen and (max-width: 900px) {
    max-width: 546px;
  }
`

export const SearchPanelWrapper = styled.div`
  display: flex;
  border: 1px solid #46a11b;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: none;
  }
  & > div:last-child {
    border: none;
    border-radius: 0 10px 10px 0;
  }
`
