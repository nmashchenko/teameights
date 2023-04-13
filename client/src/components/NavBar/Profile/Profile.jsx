import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import NoNotifications from '../../../assets/NoNotifications'
import NotificationIcon from '../../../assets/NotificationIcon'
import { LOCAL_PATH } from '../../../http'
import userImg from '../../../screens/UsersList/img/tempImg.jpg'
import defaultImg from '../defaultImg.png'

import NotificationModal from './NotificationModal/NotificationModal'
import {
  NotificationIconCenter,
  NotificationToggle,
  ProfileIcon,
  UserContent,
  UserInfo,
  UserRealName,
  UserUsername,
} from './Profile.styles'

let defaultData = {
  userRealName: 'Unknown',
  userUsername: 'unknown@email.com',
  notificationBell: false,
  userImg: defaultImg,
}

const changeData = (data) => {
  return {
    userRealName: data.fullName,
    userUsername: data.username,
    notificationBell: true,
    userImg: defaultImg,
  }
}

// Sidebar profile with notification capability
const Profile = ({ sidebar }) => {
  const { isAuth } = useSelector((state) => state.userReducer)
  const { data: user } = useCheckAuth()

  const [notificationModal, setNotificationModal] = useState(false)

  const userImage = !user?.isRegistered
    ? defaultImg
    : user?.image
    ? LOCAL_PATH + '/' + user?.image
    : userImg
  const [data, changeDataState] = useState(defaultData)

  useEffect(() => {
    if (isAuth) {
      changeDataState(changeData(user))
    }
  }, [isAuth])

  const toggleNotificationModal = (e) => {
    e.stopPropagation()
    setNotificationModal((prevState) => !prevState)
  }

  const bell = data.notificationBell ? (
    <NotificationToggle onClick={toggleNotificationModal}>
      <NotificationIcon />
    </NotificationToggle>
  ) : (
    <NoNotifications />
  )

  return (
    <UserInfo>
      <ProfileIcon src={userImage} alt="Profile icon" />
      <UserContent>
        <UserRealName active={sidebar}>{data?.userRealName}</UserRealName>
        <UserUsername active={sidebar}>@{data?.userUsername}</UserUsername>
      </UserContent>
      {/* <NotificationIconCenter>
        {notificationModal ? (
          <NotificationModal
            notificationModal={notificationModal}
            toggleNotificationModal={toggleNotificationModal}
          />
        ) : (
          bell
        )}
      </NotificationIconCenter> */}
    </UserInfo>
  )
}

export default Profile
