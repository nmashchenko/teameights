import React, { useEffect, useRef } from 'react'

import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import NotificationsItem from '../NotificationsItem/NotificationsItem'

import { StyledNotificationsList } from './NotificationsList.styles'

const NotificationsList = ({ unreadIds, setUnreadIds }) => {
  const { data: user } = useCheckAuth()
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
  }, [user.notifications])

  console.log(unreadIds)

  return (
    <StyledNotificationsList ref={listRef}>
      {user?.notifications &&
        user.notifications.map((item) => <NotificationsItem key={item._id} notification={item} />)}
    </StyledNotificationsList>
  )
}

export default NotificationsList
