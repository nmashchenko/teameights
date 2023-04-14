import { useQuery } from 'react-query'

import teamsApi from '../../../api/endpoints/team'

import {
  MessagePicture,
  NotificationMessage,
  StyledNotificationsItem
} from './NotificationsItem.styles'

const NotificationsItem = ({ notification }) => {

  const render = () => {
    switch (notification.type) {
      case 'SystemNotification':
        return (
          <NotificationMessage>
            <MessagePicture>
              <img src="" alt="" width="100%" height="100%" />
            </MessagePicture>
            <p></p>
          </NotificationMessage>
        )
      case 'TeamInvitationNotification':
        return (
          <>
            <NotificationMessage>
              <MessagePicture>
                <img src="" alt="" width="100%" height="100%" />
              </MessagePicture>
              <p></p>
            </NotificationMessage>
          </>
        )
    }
  }

  return <StyledNotificationsItem>{render()}</StyledNotificationsItem>
}

export default NotificationsItem
