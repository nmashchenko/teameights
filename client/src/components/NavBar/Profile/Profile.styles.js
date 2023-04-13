import styled from 'styled-components'

export const UserInfo = styled.div`
  margin-top: 28px;
  width: 100%;
  display: flex;
  padding: 0 12px;
  align-items: center;
  gap: 12px;
`

export const ProfileIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const UserRealName = styled.strong`
  transition: opacity 0.2s;
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  font-size: 16px;
  line-height: 140%;
  color: #fff;
`

export const UserUsername = styled.p`
  transition: opacity 0.2s;
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  margin: 0;
  font-weight: 500;
  font-size: 11px;
  line-height: 100%;
  color: #86878b;
`

export const NotificationIconCenter = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: start;
`

export const NotificationToggle = styled.div`
  cursor: pointer;
`
