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

const NotificationsModal = ({ modal, setModal }) => {
  const [unreadIds, setUnreadIds] = useState(new Set())
  const modalRef = useRef(null)
  const notificationsMutation = useReadMessages()

  useOutsideClick(modalRef, closeNotificationsModal)

  function closeNotificationsModal() {
    if (modal) {
      setModal(false)
      if (unreadIds.size) {
        // Request to the server is here
        notificationsMutation.mutate({
          notifications: Array.from(unreadIds),
        })
        setUnreadIds(new Set())
      }
    }
  }

  return (
    <StyledNotificationsModal ref={modalRef} active={modal} onClick={(e) => e.stopPropagation()}>
      <NotificationsHeader>
        <MarkAllBtn>
          <IconWrapper width="20px" height="20px">
            <Checks />
          </IconWrapper>
          <p>Mark all as read</p>
        </MarkAllBtn>
        <CrossBtn width="20px" height="20px" onClick={closeNotificationsModal}>
          <Cross />
        </CrossBtn>
      </NotificationsHeader>
      {modal && <NotificationsList setUnreadIds={setUnreadIds} />}
    </StyledNotificationsModal>
  )
}

export default NotificationsModal
