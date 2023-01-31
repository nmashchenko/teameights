// * Modules
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useLogoutUser } from '../../api/hooks/auth/useLogoutUser'
import ChevronRight from '../../assets/ChevronRight'
// * Assets
import NavBarIcon from '../../assets/NavBarIcon'
import Close from '../../assets/Sidebar/Close'
import Exit from '../../assets/Sidebar/Exit'
import Team from '../../assets/Sidebar/Team'
import TeameightsLogo from '../../assets/Team/TeameightsLogo'
import Loader from '../../shared/components/Loader/Loader'

// * Data
import Profile from './Profile/Profile'
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
  ShowChevron,
  SignOutButton,
  UserInfo,
  UserText,
} from './NavBar.styles'

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const { isAuth } = useSelector((state) => state.userReducer)
  // const navigate = useNavigate()
  const { data: user } = useCheckAuth()

  const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser()

  const navigate = useNavigate()

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
              <Profile />
              {NavBarData.map((item, index) => {
                return (
                  <NavItem key={index}>
                    <Link to={item.path}>
                      <IconNav>{item.icon} </IconNav>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ShowChevron>
                        <ChevronRight />
                      </ShowChevron>
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
                  <ShowChevron>
                    <ChevronRight />
                  </ShowChevron>
                </Link>
              </NavItem>
            </NavItems>
            <BottomContent>
              {!isAuth ? (
                <SignOutButton
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate('/auth/registration')
                  }}
                  color="white"
                >
                  <Exit /> Sign Up
                </SignOutButton>
              ) : (
                <SignOutButton onClick={handleUseLogout}>
                  <Exit /> Sign Out
                </SignOutButton>
              )}

              <UserText fontWeight="400" fontSize="12px" color="rgba(255, 255, 255, 0.15)">
                copyright © {new Date().getFullYear()} Teameights.
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
