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
            console.log(unreadIds)
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

  const mockNotifications = [
    {
      _id: 228,
      type: 'SystemNotification',
      read: false,
      system_message: 'This is mock message',
      createdAt: new Date(),
    },
    {
      _id: 1337,
      type: 'SystemNotification',
      read: false,
      system_message: 'This is mock message',
      createdAt: new Date(),
    },
    {
      _id: 13123123,
      type: 'SystemNotification',
      read: false,
      system_message: 'This is mock message',
      createdAt: new Date(),
    },
    {
      _id: 7324242,
      type: 'SystemNotification',
      read: false,
      system_message: 'This is mock message',
      createdAt: new Date(),
    },
    {
      _id: 81231231,
      type: 'SystemNotification',
      read: false,
      system_message: 'This is mock message',
      createdAt: new Date(),
    },
  ]

  return (
    <StyledNotificationsList ref={listRef}>
      {user?.notifications &&
        user.notifications.map((item) => <NotificationsItem key={item.id} notification={item} />)}
      {mockNotifications.map((item) => (
        <NotificationsItem key={item.id} notification={item} />
      ))}
    </StyledNotificationsList>
  )
}

export default NotificationsList
