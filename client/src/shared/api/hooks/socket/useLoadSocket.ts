import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from 'shared/model/hooks'
import { userAuth } from '../../../../app/providers/store/reducers/UserAuth'
import { socket } from '../../sockets/notifications.socket'

export const UseLoadSocket = () => {
  const { userId, notifications } = useAppSelector((state) => state.auth)

  const dispatch = useDispatch()

  function onConnect() {
    console.log('connected')
    //   setIsConnected(true)
    socket.emit('subscribeToNotifications', JSON.stringify({ id: userId }))
  }

  function onDisconnect() {
    console.log('disconnecting...')
  }

  useEffect(() => {
    if (userId) {
      socket.connect()

      socket.on('connect', onConnect)
      socket.on('disconnect', onDisconnect)

      return () => {
        socket.disconnect()

        socket.off('connect', onConnect)
        socket.off('disconnect', onDisconnect)
      }
    }
  }, [userId])

  useEffect(() => {
    function onNotificationsEvent(notification: $TSFIXME) {
      // Find the index of the existing notification with the same _id
      const existingIndex = notifications.findIndex(
        (n: $TSFIXME) => String(n._id) === String(notification._id),
      )

      // If an existing notification is found, update it
      if (existingIndex !== -1) {
        const updatedNotifications = [...notifications]

        updatedNotifications[existingIndex] = notification
        dispatch(userAuth?.actions.setUserNotifications(updatedNotifications))
      }
      // If not, add the new notification to the array
      else {
        dispatch(userAuth?.actions.setUserNotifications([...notifications, notification]))
      }
    }

    socket.on(`notification-${userId}`, onNotificationsEvent)

    return () => {
      socket.off(`notification-${userId}`, onNotificationsEvent)
    }
  }, [notifications])
}
