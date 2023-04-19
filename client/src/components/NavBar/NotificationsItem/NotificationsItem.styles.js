import styled from 'styled-components'

export const StyledNotificationsItem = styled.li`
  --avatar-size: 36px;
  --message-gap: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px 16px 24px;
  color: #fff;
  border-top: 1px solid #2f3239;
  width: 100%;
  &:hover {
    background-color: #2f3239;
  }
`

export const MessageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: calc(100% - (var(--avatar-size) + var(--message-gap)));
`

export const MessageText = styled.p`
  margin: 0;
  font-family: 'NoirPro-Light';
  font-size: 14px;
  line-height: 120%;
  color: #fff;
`

export const MessagePicture = styled.div`
  position: relative;
  width: var(--avatar-size);
  height: var(--avatar-size);
  background-color: ${(props) => props.bgColor || '#D4AC0F'};
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  svg {
    margin: 8px;
  }
`

export const SendingTime = styled.p`
  margin: 0;
  font-family: Inter;
  font-weight: 500;
  font-size: 11px;
  line-height: 100%;
  color: #86878b;
  text-align: end;
`

export const MessageCircle = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  height: 6px;
  width: 6px;
  background-color: #5bd424;
  border-radius: 50%;
`

export const MessageButton = styled.div`
  cursor: pointer;
  border: 2px solid ${(props) => props.bgColor || '#46a11b'};
  background-color: ${(props) => props.bgColor || 'transparent'};
  padding: 6px 16px 4px;
  line-height: 140%;
  color: #fff;
  border-radius: 10px;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`
