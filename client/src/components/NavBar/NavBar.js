// * Modules
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useLogoutUser } from '../../api/hooks/auth/useLogoutUser'
// * Assets
import NavBarIcon from '../../assets/NavBarIcon'
import Close from '../../assets/Sidebar/Close'
import Exit from '../../assets/Sidebar/Exit'
import Notification from '../../assets/Sidebar/Notification'
import Team from '../../assets/Sidebar/Team'
import Routes from '../../constants/routes'
import Loader from '../../shared/components/Loader/Loader'
import { Button } from '../../shared/styles/Button.styles'

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

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const { isAuth } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()
  const { data: user } = useCheckAuth()

  const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser()

  const handleUseLogout = () => {
    logoutUser()
  }

  if (isUserLoggingOut) {
    return <Loader />
  }
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
                <TeameightsLogo />
                <Close />
              </NavBarToggle>
            </UserInfo>
            <NavItems>
              {NavBarData.map((item, index) => {
                return (
                  <NavItem key={index}>
                    <Link to={item.path}>
                      <IconNav>{item.icon} </IconNav>
                      <ItemTitle>{item.title}</ItemTitle>
                    </Link>
                  </NavItem>
                )
              })}
              <NavItem>
                <Link to={user?.userTeam ? '/myteam' : '/team'}>
                  <Team />
                  <ItemTitle>Team</ItemTitle>
                </Link>
              </NavItem>
            </NavItems>
            <BottomContent>
              {isAuth ? (
                <SingOutButton onClick={handleUseLogout}>
                  <Exit /> Sign Out
                </SingOutButton>
              ) : (
                <Button onClick={() => navigate(Routes.login)}>Login</Button>
              )}
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
