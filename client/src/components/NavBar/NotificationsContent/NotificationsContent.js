import { useState } from 'react'

// assets
import Notification from '../../../assets/Sidebar/Notification'
import { IconWrapper, NavInteractBtn } from '../NavBar.styles'
import NotificationsModal from '../NotificationsModal/NotificationsModal'

// this component styles
import { NotificationsCount, StyledNotificationsContent } from './NotificationsContent.styles'

const NotificationsContent = ({ user, sidebar }) => {
  const [modal, setModal] = useState(false)

  const unreadMessages = user.notifications.filter((item) => !item.read)

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
        {unreadMessages.length && !modal && (
          <>
            <NotificationsCount active={!sidebar} top="6px" left="28px">
              {unreadMessages.length}
            </NotificationsCount>
            <NotificationsCount active={sidebar} top="auto" right="16px">
              {unreadMessages.length}
            </NotificationsCount>
          </>
        )}
      </NavInteractBtn>
      <NotificationsModal user={user} modal={modal} setModal={setModal} />
    </StyledNotificationsContent>
  )
}

export default NotificationsContent
