import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import NoNotifications from '../../../assets/NoNotifications'
import NotificationIcon from '../../../assets/NotificationIcon'
import { LOCAL_PATH } from '../../../http'
import defaultImg from '../defaultImg.png'

import NotificationModal from './NotificationModal/NotificationModal'
import {
  AvatarContainer,
  NotificationIconCenter,
  NotificationToggle,
  ProfileIcon,
  UserInfoDiv,
  UserRealName,
  UserUsername,
} from './Profile.styles'

let defaultData = {
  userRealName: 'Unknown',
  userUsername: 'who_are_you?',
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
const Profile = () => {
  const { isAuth } = useSelector((state) => state.userReducer)
  const { data: user } = useCheckAuth()

  const [notificationModal, setNotificationModal] = useState(false)

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
    <AvatarContainer>
      <ProfileIcon
        src={user?.image ? LOCAL_PATH + '/' + user.image : defaultImg}
        alt="Profile icon"
      />
      <UserInfoDiv>
        <UserRealName>{data?.userRealName}</UserRealName>

        <UserUsername>@{data?.userUsername}</UserUsername>
      </UserInfoDiv>
      <NotificationIconCenter>
        {notificationModal ? (
          <NotificationModal
            notificationModal={notificationModal}
            toggleNotificationModal={toggleNotificationModal}
          />
        ) : (
          bell
        )}
      </NotificationIconCenter>
    </AvatarContainer>
  )
}

export default Profile
