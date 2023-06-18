import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledNotificationsContent = styled.div`
  position: relative;
`

export const NotificationsCount = styled(motion.div)`
  position: absolute;
  pointer-events: ${(props) => (props.pointerEvents ? 'all' : 'none')};
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
  /* font-family: Inter; */
  font-weight: 500;
  font-size: 11px;
  line-height: 100%;
  color: #1a1c22;
`
