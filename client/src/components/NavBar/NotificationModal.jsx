import React from 'react'

import HollowNotificationBell from '../../assets/hollowNotificationBell'
import NoNotifications from '../../assets/NotificationIcon'
import X from '../../assets/X'

import {
  Join,
  Notification,
  NotificationData,
  NotificationDesc,
  NotificationModalDiv,
  NotificationTitle,
  NotificationToggle,
  NotificationUserData,
  NotificationUserImg,
  NotificationUserRealName,
  TopBar,
} from './NotificationModal.styles'
import userImg from './tempImg.jpg'

const userNotificationList = []

const userNotification = {
  img: userImg,
  userRealName: 'Dummy Test',
  desc: 'lorem asoidjasodijasoidjasoidajsdioj',
}

for (let i = 0; i < 5; ++i) {
  userNotificationList.push(userNotification)
}

const NotificationModal = ({ toggleNotificationModal }) => {
  return (
    <NotificationModalDiv
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <TopBar>
        <Join>
          <HollowNotificationBell />
          <NotificationTitle>Notifications</NotificationTitle>
        </Join>
        <NotificationToggle onClick={toggleNotificationModal}>
          <X />
        </NotificationToggle>
      </TopBar>
      <NotificationData>
        {userNotificationList.map((data, key) => {
          return (
            <Notification key={key}>
              <NotificationUserImg src={data.img} alt={`${data.userRealName}`} />
              <NotificationUserData>
                <NotificationUserRealName>{data.userRealName}</NotificationUserRealName>
                <NotificationDesc>{data.desc.slice(0, 20)}...</NotificationDesc>
              </NotificationUserData>
            </Notification>
          )
        })}
      </NotificationData>
    </NotificationModalDiv>
  )
}

export default NotificationModal
