import styled from 'styled-components'

export const SearchBox = styled.div`
  display: flex;
  padding: 0 11px;
  gap: 8px;
  height: 100%;
  width: 100%;
  align-items: center;
`

export const SearchInput = styled.input`
  display: block;
  font-family: 'NoirPro-Regular';
  font-size: 16px;
  line-height: 140%;
  color: #86878b;
  caret-color: #5bd424;
  width: calc(100% - 28px);
  outline: none;
  border: none;
  background: none;
`

export const SearchBtn = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`
