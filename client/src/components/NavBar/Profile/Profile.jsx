import React, { useEffect, useState } from 'react'

import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { LOCAL_PATH } from '../../../http'
import userImg from '../../../screens/UsersList/img/tempImg.jpg'
import defaultImg from '../defaultImg.png'

import { ProfileIcon, UserContent, UserInfo, UserRealName, UserUsername } from './Profile.styles'

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

const Profile = ({ sidebar }) => {
  const { data: user } = useCheckAuth()

  const userImage = !user?.isRegistered
    ? defaultImg
    : user?.image
    ? LOCAL_PATH + '/' + user?.image
    : userImg
  const [data, setData] = useState(defaultData)

  useEffect(() => {
    if (user) {
      setData(changeData(user))
    }
  }, [user])

  return (
    <UserInfo>
      <ProfileIcon src={userImage} alt="Profile icon" />
      <UserContent>
        <UserRealName active={sidebar}>{data?.userRealName}</UserRealName>
        <UserUsername active={sidebar}>@{data?.userUsername}</UserUsername>
      </UserContent>
    </UserInfo>
  )
}

export default Profile
