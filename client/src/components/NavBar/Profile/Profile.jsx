import React, { useEffect, useState } from 'react'

import unregisteredImg from '../../../assets/Images/user/unregistered.png'
import { useCheckAuth } from '../../../shared/api/hooks/auth/useCheckAuth'

import { ProfileIcon, UserContent, UserInfo, UserRealName, UserUsername } from './Profile.styles'

let defaultData = {
  userRealName: 'Unknown',
  userUsername: 'unknown@email.com',
  notificationBell: false,
  userImg: unregisteredImg,
}

const changeData = (data) => {
  console.log(data)

  return {
    userRealName: data.fullName,
    userUsername: data.username,
    notificationBell: true,
    userImg: data.image,
  }
}

const Profile = ({ sidebar }) => {
  const { data: user } = useCheckAuth()
  const isUserRegistered = user?.isRegistered
  const [data, setData] = useState(defaultData)

  useEffect(() => {
    if (isUserRegistered) {
      setData(changeData(user))
    } else {
      setData(defaultData)
    }
  }, [user])

  return (
    <UserInfo>
      <ProfileIcon src={data.userImg} alt="Profile icon" />
      <UserContent>
        <UserRealName active={sidebar}>{data?.userRealName}</UserRealName>
        <UserUsername active={sidebar}>@{data?.userUsername}</UserUsername>
      </UserContent>
    </UserInfo>
  )
}

export default Profile
