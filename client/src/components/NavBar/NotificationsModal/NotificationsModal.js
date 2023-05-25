import { useRef, useState } from 'react'

import { useReadMessages } from '../../../api/hooks/sidebar/useReadMessages'
import Checks from '../../../assets/Sidebar/Checks'
import Cross from '../../../assets/Sidebar/Cross'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { IconWrapper } from '../NavBar.styles'
import NotificationsList from '../NotificationsList/NotificationsList'

import {
  CrossBtn,
  MarkAllBtn,
  NotificationsHeader,
  StyledNotificationsModal,
} from './NotificationsModal.styles'

const NotificationsModal = ({ userNotifications, notificationModal, setNotificationModal }) => {
  const [unreadIds, setUnreadIds] = useState(new Set())
  const notificationModalRef = useRef(null)
  const { mutateAsync: readMessages } = useReadMessages()

  useOutsideClick(notificationModalRef, closeNotificationsModal)

  async function closeNotificationsModal() {
    if (notificationModal) {
      setNotificationModal(false)
      if (unreadIds.size) {
        // Request to the server is here
        await readMessages(Array.from(unreadIds))
        setUnreadIds(new Set())
      }
    }
  }

  const markAllAsRead = async () => {
    const allUnreadIds = new Set(
      userNotifications.filter((item) => !item.read).map((item) => item._id),
    )

    if (allUnreadIds.size) {
      await readMessages(Array.from(allUnreadIds))
      setUnreadIds(new Set())
    }
  }

  const variants = {
    open: {
      clipPath: 'inset(0% 0% 0% 0% round 10px)',
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      },
    },
    closed: {
      clipPath: 'inset(10% 50% 90% 50% round 10px)',
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      },
    },
  }

  return (
    <StyledNotificationsModal
      ref={notificationModalRef}
      active={notificationModal.toString()}
      onClick={(e) => e.stopPropagation()}
      animate={notificationModal ? 'open' : 'closed'}
      variants={variants}
      initial={false}
    >
      <NotificationsHeader>
        <MarkAllBtn onClick={markAllAsRead}>
          <IconWrapper width="20px" height="20px">
            <Checks />
          </IconWrapper>
          <p>Mark all as read</p>
        </MarkAllBtn>
        <CrossBtn width="20px" height="20px" onClick={closeNotificationsModal}>
          <Cross />
        </CrossBtn>
      </NotificationsHeader>
      {notificationModal && (
        <NotificationsList
          userNotifications={userNotifications}
          closeNotificationsModal={closeNotificationsModal}
          setUnreadIds={setUnreadIds}
        />
      )}
    </StyledNotificationsModal>
  )
}

export default NotificationsModal
