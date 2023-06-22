import styled from 'styled-components'

export const FilterSelectBox = styled.div`
  position: relative;
  background-color: ${(props) => (props.isActive ? '#2f3239' : 'transparent')};
  border-radius: ${(props) => (props.isActive ? '10px 0px 0px 10px' : '0')};
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
  z-index: 250;
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
  background-color: ${(props) => (props.isActive ? '#46A11B' : 'transparent')};
  &:hover {
    background-color: ${(props) => (props.isActive ? '#46A11B' : '#27431f')};
  }
`
