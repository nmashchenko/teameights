import { useChangeMessageStatus } from '../../../api/hooks/sidebar/useChangeMessageStatus'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import LightningIcon from '../../../assets/Sidebar/LightningIcon'
import WarningIcon from '../../../assets/Sidebar/WarningIcon'
import { LOCAL_PATH } from '../../../http'
import Loader from '../../../shared/components/Loader/Loader'
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

const NotificationsItem = ({ notification, closeNotificationsModal }) => {
  const { data: teamData, isLoading, error } = useGetTeamData(notification.teamid)
  const { mutate: teamInviteMutation, isLoading: isHandlingInvite } = useChangeMessageStatus(
    notification.teamid,
  )

  const handleAccept = () => {
    teamInviteMutation({
      action: 'accept',
      messageId: notification._id,
    })
    closeNotificationsModal()
  }
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
        // if (isLoading) {
        //   return <p>Loading</p>
        // } else if (error) {
        //   return (
        //     <FlexWrapper gap="12px">
        //       <MessagePicture width="20px" height="20px" color="#CD3633">
        //         <WarningIcon />
        //       </MessagePicture>
        //       <MessageText>The notification failed to load</MessageText>
        //     </FlexWrapper>
        //   )
        // }

        return (
          <>
            <FlexWrapper gap="12px">
              <MessagePicture>
                {!notification.read && <MessageCircle />}
                <img src={notification.image} alt="" />
              </MessagePicture>
              <MessageContentWrapper>
                <MessageText>{notification.message}</MessageText>
                <FlexWrapper gap="8px">
                  <MessageButton onClick={handleAccept} bgColor="#46a11b">
                    Accept
                  </MessageButton>
                  <MessageButton
                    onClick={() =>
                      teamInviteMutation({
                        action: 'reject',
                        messageId: notification._id,
                      })
                    }
                  >
                    Reject
                  </MessageButton>
                </FlexWrapper>
              </MessageContentWrapper>
            </FlexWrapper>
            <SendingTime>{getPastTime(notification.createdAt)}</SendingTime>
          </>
        )
    }
  }

  if (isHandlingInvite) {
    return <Loader />
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
