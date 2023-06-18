import styled from 'styled-components'

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  padding: ${(props) => props.padding || '0'};
  gap: ${(props) => props.gap || '0'};
  height: 40px;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #46a11b;
  &:hover {
    background-color: #2f3239;
  }
`

export const SearchInput = styled.input`
  display: block;
  font-size: 16px;
  /* line-height: 40px; */
  color: #fff;
  caret-color: #5bd424;
  width: calc(100% - 28px);
  outline: none;
  border: none;
  background: none;
`
