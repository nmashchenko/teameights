import React from 'react'
import Modal from '@mui/material/Modal'
import { v4 as uuidv4 } from 'uuid'

import HollowNotificationBell from '../../../../assets/HollowNotificationBell'
import X from '../../../../assets/X'
import userImg from '../../tempImg.jpg'

import {
  Join,
  Notification,
  NotificationBackDrop,
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

const userNotificationList = []

const userNotification = {
  img: userImg,
  userRealName: 'Dummy Test',
  desc: 'lorem asoidjasodijasoidjasoidajsdioj',
  key: uuidv4(),
}

for (let i = 0; i < 5; ++i) {
  userNotificationList.push(userNotification)
}

const NotificationModal = ({ notificationModal, toggleNotificationModal }) => {
  return (
    <Modal open={notificationModal}>
      <NotificationModalDiv
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <NotificationBackDrop />
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
          {userNotificationList.map((data) => {
            return (
              <Notification key={data.key}>
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
    </Modal>
  )
}

export default NotificationModal