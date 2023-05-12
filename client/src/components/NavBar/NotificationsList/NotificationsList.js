import React, { memo, useEffect, useRef } from 'react'

import NotificationsItem from '../NotificationsItem/NotificationsItem'

import { StyledNotificationsList } from './NotificationsList.styles'

const NotificationsList = ({ userNotifications, setUnreadIds, closeNotificationsModal }) => {
  const listRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const itemId = entry.target.getAttribute('data-notification-id')
          const isRead = entry.target.getAttribute('data-notification-read')

          if (isRead === 'false') {
            setUnreadIds((prev) => prev.add(itemId))
          }
        }
      })
    })

    const listItems = listRef.current.querySelectorAll('[data-notification-read]')

    listItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [userNotifications])

  return (
    <StyledNotificationsList ref={listRef}>
      {userNotifications &&
        userNotifications.map((item) => (
          <NotificationsItem
            key={item._id}
            closeNotificationsModal={closeNotificationsModal}
            notification={item}
          />
        ))}
    </StyledNotificationsList>
  )
}

export default memo(NotificationsList)
