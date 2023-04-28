import styled from 'styled-components'

export const FilterSelectBox = styled.div`
  position: relative;
`

export const FilterSelectBtn = styled.div`
  cursor: pointer;
  padding: 8px 11px;
  width: 170px;
  border-right: 1px solid #46a11b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  p {
    font-family: 'NoirPro-Regular';
    font-size: 16px;
    line-height: 140%;
    color: #fff;
  }
  svg {
    transition: transform 0.2s;
    transform: rotate(${(props) => (props.active ? '180deg' : '0deg')});
  }
`

export const OptionsList = styled.ul`
  padding: 8px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  list-style: none;
  background-color: #2f3239;
  box-shadow: 0px 4px 24px rgba(17, 20, 27, 0.25);
  border-radius: 5px;
  width: 170px;
`

export const OptionItem = styled.li`
  cursor: pointer;
  padding: 4px 8px 4px 16px;
  &:hover {
    background: #27431f;
  }
`
