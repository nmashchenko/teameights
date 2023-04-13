import styled from 'styled-components'

export const StyledNavItem = styled.li``

export const IconNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 24px;
    height: 24px;
  }
`
export const ItemTitle = styled.span`
  transition: opacity 0.2s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  font-size: 16px;
  line-height: 140%;
  color: #fff;
`
