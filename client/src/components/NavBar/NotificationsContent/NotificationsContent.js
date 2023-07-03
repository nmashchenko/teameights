// assets
import { useSelector } from 'react-redux'

import Notification from '../../../assets/Sidebar/Notification'
import IconWrapper from '../../../shared/ui/IconWrapper/IconWrapper'
import { NavInteractBtn } from '../NavBar.styles'
import NotificationsModal from '../NotificationsModal/NotificationsModal'

// this component styles
import { NotificationsCount, StyledNotificationsContent } from './NotificationsContent.styles'

const NotificationsContent = ({
  // userNotifications,
  sidebar,
  setNotificationModal,
  notificationModal,
}) => {
  const { notifications: userNotifications } = useSelector((state) => state.userReducer)

  const unreadMessages = userNotifications?.filter((item) => !item.read)

  return (
    <StyledNotificationsContent>
      <NavInteractBtn
        modalActive={notificationModal}
        onClick={() => setNotificationModal((prev) => !prev)}
        active={sidebar}
      >
        <IconWrapper width="24px" height="24px" cursor="pointer">
          <Notification />
        </IconWrapper>
        <p>Notifications</p>
        {!!unreadMessages?.length && !notificationModal && (
          <>
            <NotificationsCount
              pointerEvents={sidebar.toString()}
              top="6px"
              left="28px"
              animate={{ scale: [1, 1.5, 1] }}
              key={unreadMessages?.length}
            >
              {unreadMessages?.length}
            </NotificationsCount>
          </>
        )}
      </NavInteractBtn>
      <NotificationsModal
        userNotifications={userNotifications ? userNotifications : []}
        notificationModal={notificationModal}
        setNotificationModal={setNotificationModal}
      />
    </StyledNotificationsContent>
  )
}

export default NotificationsContent
