import styled from 'styled-components'

import checkboxImg from '../../../../assets/SearchPanel/Checkbox.svg'

export const CheckListWrapper = styled.div`
  z-index: 10;
  width: 100%;
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  padding: 12px 0;
  background: #2f3239;
  box-shadow: 0px 4px 24px rgba(17, 20, 27, 0.25);
  border-radius: 5px;
`

export const StyledChecksList = styled.ul`
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #46a11b;
    border-radius: 10px;
    width: 5px;
    height: 20px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  max-height: 190px;
  overflow-y: auto;
`

export const StyledChecksItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px 4px 16px;
  background: #2f3239;
  p {
    margin-left: 16px;
    font-family: 'NoirPro-Light';
    line-height: 120%;
  }
  input {
    cursor: pointer;
    position: relative;
    width: 0;
    &::before {
      position: absolute;
      z-index: 1;
      content: '';
      width: 16px;
      height: 16px;
      border: 0.8px solid #fff;
      border-radius: 3.2px;
    }
    &:checked {
      &::before {
        background: url(${checkboxImg}) center center no-repeat;
        background-color: #46a11b;
        border: none;
      }
    }
  }
  &:hover {
    background: #27431f;
    input {
      &::before {
        border-color: #46a11b;
      }
    }
  }
`

export const CheckListText = styled.p`
  margin-left: 16px;
`
