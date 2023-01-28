import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import NoNotifications from '../../assets/NoNotifications'
import NotificationIcon from '../../assets/NotificationIcon'

import NotificationModal from './NotificationModal'
// import { UserInfo } from './NavBar.styles'
import {
  NotificationContainer,
  NotificationIconCenter,
  NotificationToggle,
  ProfileIcon,
  UserInfoDiv,
  UserRealName,
  UserUsername,
} from './Profile.styles'
import userImg from './tempImg.jpg'

let data = {
  userRealName: 'Unknown',
  userUsername: 'who_are_you?',
  notificationBell: false,
}

const changeData = (data) => {
  return {
    userRealName: data.userRealName,
    userUsername: data.userUsername,
    notificationBell: true,
  }
}

// Sidebar profile with notification capability
const Profile = () => {
  const { isAuth } = useSelector((state) => state.userReducer)
  const { data: user } = useCheckAuth()

  const [notificationModal, setNotificationModal] = useState(false)

  if (isAuth) {
    data = changeData(user)
  }

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
    <NotificationContainer>
      <ProfileIcon src={userImg} alt="Profile icon" />
      <UserInfoDiv>
        <UserRealName>{data?.userRealName}</UserRealName>

        <UserUsername>@{data?.userUsername}</UserUsername>
      </UserInfoDiv>
      <NotificationIconCenter>
        {notificationModal ? (
          <NotificationModal toggleNotificationModal={toggleNotificationModal} />
        ) : (
          bell
        )}
      </NotificationIconCenter>
    </NotificationContainer>
  )
}

export default Profile
