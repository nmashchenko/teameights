import { motion } from 'framer-motion'
import styled from 'styled-components'

import { IconWrapper } from '../NavBar.styles'

export const StyledNotificationsModal = styled(motion.div)`
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  position: absolute;
  left: calc(100% + 32px);
  top: -16px;
  width: 320px;
  height: 354px;
  background: linear-gradient(90.45deg, #1a1c22 62.8%, #2f3239 209.77%);
  box-shadow: 0px 4px 24px rgba(17, 20, 27, 0.25);
  border-radius: 5px;
  overflow: hidden;
`

export const NotificationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

export const CrossBtn = styled(IconWrapper)`
  padding: 5px;
  cursor: pointer;
  &:hover {
    path {
      stroke: #d42422;
    }
  }
`

export const MarkAllBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    margin: 0;
    color: #fff;
  }
  &:hover {
    path {
      stroke: #5bd424;
    }
    p {
      color: #5bd424;
    }
  }
`
