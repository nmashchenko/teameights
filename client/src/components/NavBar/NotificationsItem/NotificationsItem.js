import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import LightningIcon from '../../../assets/Sidebar/LightningIcon'
import WarningIcon from '../../../assets/Sidebar/WarningIcon'
import { LOCAL_PATH } from '../../../http'
import { getPastTime } from '../../../utils/getPastTime'
import FlexWrapper from '../FlexWrapper/FlexWrapper'

import {
  MessageButton,
  MessageCircle,
  MessageContentWrapper,
  MessagePicture,
  MessageText,
  SendingTime,
  StyledNotificationsItem,
} from './NotificationsItem.styles'

const NotificationsItem = ({ notification }) => {
  const { data: teamData, isLoading, error } = useGetTeamData(notification.teamid)

  const render = () => {
    switch (notification.type) {
      case 'SystemNotification':
        return (
          <>
            <FlexWrapper gap="12px">
              <MessagePicture width="20px" height="20px">
                {!notification.read && <MessageCircle />}
                <LightningIcon />
              </MessagePicture>
              <MessageText>{notification.system_message}</MessageText>
            </FlexWrapper>
            <SendingTime>{getPastTime(notification.createdAt)}</SendingTime>
          </>
        )
      case 'TeamInvitationNotification':
        if (isLoading) {
          return <p>loading</p>
        } else if (error) {
          return (
            <FlexWrapper gap="12px">
              <MessagePicture width="20px" height="20px" color="#CD3633">
                <WarningIcon />
              </MessagePicture>
              <MessageText>The notification failed to load</MessageText>
            </FlexWrapper>
          )
        }
        console.log(teamData)

        return (
          <>
            <FlexWrapper gap="12px">
              <MessagePicture>
                {!notification.read && <MessageCircle />}
                <img src={LOCAL_PATH + '/' + teamData.image} alt="" />
              </MessagePicture>
              <MessageContentWrapper>
                <MessageText>{notification.message}</MessageText>
                <FlexWrapper gap="8px">
                  <MessageButton bgColor="#46a11b">Accept</MessageButton>
                  <MessageButton>Reject</MessageButton>
                </FlexWrapper>
              </MessageContentWrapper>
            </FlexWrapper>
            <SendingTime>{getPastTime(notification.createdAt)}</SendingTime>
          </>
        )
    }
  }

  return (
    <StyledNotificationsItem
      data-notification-read={notification.read}
      data-notification-id={notification._id}
    >
      {render()}
    </StyledNotificationsItem>
  )
}

export default NotificationsItem
