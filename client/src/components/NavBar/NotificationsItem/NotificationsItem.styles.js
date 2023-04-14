import styled from 'styled-components'

export const StyledNotificationsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px 16px 24px;
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
