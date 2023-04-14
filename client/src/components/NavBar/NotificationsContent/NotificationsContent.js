// assets
import Checks from '../../../assets/Sidebar/Checks'
import Cross from '../../../assets/Sidebar/Cross'
import Notification from '../../../assets/Sidebar/Notification'
import { IconWrapper, NavInteractBtn } from '../NavBar.styles'

// this component styles
import {
  CrossBtn,
  MarkAllBtn,
  NotificationsCount,
  NotificationsHeader,
  NotificationsList,
  NotificationsModal,
  StyledNotificationsContent,
} from './NotificationsBtn.styles'

const NotificationsContent = ({ user, modal, setModal, sidebar }) => {
  return (
    <StyledNotificationsContent>
      <NavInteractBtn
        modalActive={modal}
        onClick={() => setModal((prev) => !prev)}
        active={sidebar}
      >
        <IconWrapper width="24px" height="24px">
          <Notification />
        </IconWrapper>
        <p>Notifications</p>
        {user?.notifications.length && !modal && (
          <>
            <NotificationsCount active={!sidebar} top="6px" left="28px">
              {user.notifications.length}
            </NotificationsCount>
            <NotificationsCount active={sidebar} top="auto" right="16px">
              {user.notifications.length}
            </NotificationsCount>
          </>
        )}
      </NavInteractBtn>
      <NotificationsModal active={modal}>
        <NotificationsHeader>
          <MarkAllBtn>
            <IconWrapper width="20px" height="20px">
              <Checks />
            </IconWrapper>
            <p>Mark all as read</p>
          </MarkAllBtn>
          <CrossBtn width="20px" height="20px" onClick={() => setModal(false)}>
            <Cross />
          </CrossBtn>
        </NotificationsHeader>
        <NotificationsList>
          
        </NotificationsList>
      </NotificationsModal>
    </StyledNotificationsContent>
  )
}

export default NotificationsContent
