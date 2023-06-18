import styled from 'styled-components'

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  padding: ${(props) => props.padding || '0'};
  gap: ${(props) => props.gap || '0'};
  height: 40px;
  width: 100%;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.hover && '#2f3239'};
    border-radius: ${(props) => props.hover && '0px 10px 10px 0px'};
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
