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
import Team from '../../assets/Sidebar/Team'
import TeameightsLogo from '../../assets/Team/TeameightsLogo'
import Loader from '../../shared/components/Loader/Loader'

// * Data
import { NavBarData } from './NavBar.data'
import {
  BottomContent,
  IconNav,
  ItemTitle,
  NavBarToggle,
  NavIconContainer,
  NavItem,
  NavItems,
  NavMenu,
  NavMenuItems,
  SingOutButton,
  UserInfo,
  UserText,
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
                  <IconNav>
                    <Team />
                  </IconNav>
                  <ItemTitle>Team</ItemTitle>
                </Link>
              </NavItem>
            </NavItems>
            <BottomContent>
              <SingOutButton onClick={handleUseLogout}>
                <Exit /> Sign Out
              </SingOutButton>
              <UserText fontWeight="400" fontSize="12px" color="rgba(255, 255, 255, 0.15)">
                copyright © 2022 Teameights.
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
