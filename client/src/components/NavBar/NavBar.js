// * Modules
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// * Assets
import NavBarIcon from '../../assets/NavBarIcon'
import Close from '../../assets/Sidebar/Close'
import Exit from '../../assets/Sidebar/Exit'
import Notification from '../../assets/Sidebar/Notification'

// * Data
import { NavBarData } from './NavBar.data'
import {
  BottomContent,
  ItemTitle,
  NameNotificationsContainer,
  NavBarToggle,
  NavIconContainer,
  NavItem,
  NavItems,
  NavMenu,
  NavMenuItems,
  NotificationsArea,
  SingOutButton,
  UserData,
  UserImage,
  UserInfo,
  UserText,
  UserTextContainer,
} from './NavBar.styles'
import userImg from './tempImg.jpg'

const NavBar = ({ user, handleUserLogout }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <NavIconContainer onClick={showSidebar}>
        <NavBarIcon />
      </NavIconContainer>

      {sidebar ? (
        <NavMenu left="0" transition="250ms">
          <NavMenuItems onClick={showSidebar}>
            <UserInfo>
              <NavBarToggle>
                <Close />
              </NavBarToggle>
              <UserData>
                <div>
                  <UserImage src={userImg} alt="user image" />
                </div>
                <UserTextContainer>
                  <NameNotificationsContainer>
                    <UserText fontWeight="600">{user.userRealName}</UserText>
                    <NotificationsArea>
                      <Notification />
                    </NotificationsArea>
                  </NameNotificationsContainer>
                  <UserText>{user.userConcentration}</UserText>
                </UserTextContainer>
              </UserData>
            </UserInfo>
            <NavItems>
              {NavBarData.map((item, index) => {
                return (
                  <NavItem key={index}>
                    <Link to={item.path}>
                      {item.icon}
                      <ItemTitle>{item.title}</ItemTitle>
                    </Link>
                  </NavItem>
                )
              })}
            </NavItems>
            <BottomContent>
              <SingOutButton onClick={handleUserLogout}>
                <Exit /> Sign Out
              </SingOutButton>
              <UserText
                fontWeight="400"
                fontSize="12px"
                color="rgba(255, 255, 255, 0.15)"
                margin="0 0 5px 0"
              >
                Copyright © 2022 Teameights.
              </UserText>
              <UserText
                fontWeight="400"
                fontSize="12px"
                color="rgba(255, 255, 255, 0.15)"
                margin="0 0 30px 0"
              >
                All rights reserved.
              </UserText>
            </BottomContent>
          </NavMenuItems>
        </NavMenu>
      ) : (
        <NavMenu />
      )}
    </>
  )
}

export default NavBar
