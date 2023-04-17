import { useEffect, useRef, useState } from 'react'

// assets
import Checks from '../../../assets/Sidebar/Checks'
import Cross from '../../../assets/Sidebar/Cross'
import Notification from '../../../assets/Sidebar/Notification'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { IconWrapper, NavInteractBtn } from '../NavBar.styles'
import NotificationsItem from '../NotificationsItem/NotificationsItem'

// this component styles
import {
  CrossBtn,
  MarkAllBtn,
  NotificationsCount,
  NotificationsHeader,
  NotificationsList,
  NotificationsModal,
  StyledNotificationsContent,
} from './NotificationsContent.styles'

const NotificationsContent = ({ user, sidebar }) => {
  const [modal, setModal] = useState(false)
  const modalRef = useRef(null)

  useOutsideClick(modalRef, () => setModal(false))

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
      <NotificationsModal ref={modalRef} active={modal} onClick={(e) => e.stopPropagation()}>
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
          {user?.notifications &&
            user.notifications.map((item) => (
              <NotificationsItem key={item.id} notification={item} />
            ))}
        </NotificationsList>
      </NotificationsModal>
    </StyledNotificationsContent>
  )
}

export default NotificationsContent
