import styled from 'styled-components'

import { IconWrapper } from '../NavBar.styles'

export const StyledNotificationsContent = styled.div`
  position: relative;
`

export const NotificationsCount = styled.div`
  position: absolute;
  transition: opacity var(--menu-animation-time);
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  top: ${(props) => props.top || 'auto'};
  right: ${(props) => props.right || 'auto'};
  left: ${(props) => props.left || 'auto'};
  min-width: 14px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5px 3.5px;
  background: #5bd424;
  border-radius: 50%;
  font-family: Inter;
  font-weight: 500;
  font-size: 11px;
  line-height: 100%;
  color: #1a1c22;
`