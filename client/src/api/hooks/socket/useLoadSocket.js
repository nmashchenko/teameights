import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userAuth } from '../../../store/reducers/UserAuth'
import { socket } from '../../sockets/notifications.socket'

export const useLoadSocket = (user) => {
  const { notifications } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    socket.connect()

    function onConnect() {
      console.log('connected')
      //   setIsConnected(true)
      socket.emit('subscribeToNotifications', JSON.stringify({ id: '649412b18eab3e1f5587d7bf' }))
    }

    function onDisconnect() {
      console.log('disconnecting...')
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.disconnect()

      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      //   socket.off(`notification-649412b18eab3e1f5587d7bf`, onNotificationsEvent)
    }
  }, [])

  useEffect(() => {
    function onNotificationsEvent(notification) {
      console.log(notification)
      // Find the index of the existing notification with the same _id
      const existingIndex = notifications.findIndex(
        (n) => String(n._id) === String(notification._id),
      )

      console.log(existingIndex)
      // If an existing notification is found, update it
      if (existingIndex !== -1) {
        const updatedNotifications = [...notifications]

        console.log(updatedNotifications)

        updatedNotifications[existingIndex] = notification
        dispatch(userAuth.actions.setUserNotifications(updatedNotifications))
      }
      // If not, add the new notification to the array
      else {
        console.log([...notifications, notification])
        dispatch(userAuth.actions.setUserNotifications([...notifications, notification]))
      }
    }

    socket.on(`notification-649412b18eab3e1f5587d7bf`, onNotificationsEvent)

    return () => {
      socket.off(`notification-649412b18eab3e1f5587d7bf`, onNotificationsEvent)
    }
  }, [notifications])
}
