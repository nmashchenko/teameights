import styled from 'styled-components'

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

export const NotificationsModal = styled.div`
  transition: opacity 0.3s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  position: absolute;
  left: calc(100% + 32px);
  top: -16px;
  width: 320px;
  height: 354px;
  background: linear-gradient(90.45deg, #1a1c22 62.8%, #2f3239 209.77%);
  box-shadow: 0px 4px 24px rgba(17, 20, 27, 0.25);
  border-radius: 5px;
`

export const NotificationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

export const NotificationsList = styled.ul`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #2f3239;
  list-style: none;
`

export const NotificationsItem = styled.li`
  padding: 16px;
  color: #fff;
  border-top: 1px solid #2f3239;
  width: 100%;
`
export const NotificationMessage = styled.div`
  display: flex;
  gap: 12px;
  p {
    margin: 0;
    font-family: 'NoirPro-Light';
    font-size: 14px;
    line-height: 120%;
    color: #fff;
  }
`

export const MessagePicture = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
  }
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
