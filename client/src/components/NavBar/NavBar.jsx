// * Modules
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useLogoutUser } from '../../api/hooks/auth/useLogoutUser'
// * Assets
import Close from '../../assets/Sidebar/Close'
import Exit from '../../assets/Sidebar/Exit'
import Notification from '../../assets/Sidebar/Notification'
import ShortLogo from '../../assets/Sidebar/ShortLogo'
import Team from '../../assets/Sidebar/Team'
import Loader from '../../shared/components/Loader/Loader'

// * Data
import NavItem from './NavItem/NavItem'
import Profile from './Profile/Profile'
import { NavBarData } from './NavBar.data'
import {
  BottomContent,
  NavBarClose,
  NavBarCopyright,
  NavBarLogo,
  NavBarToggle,
  NavIconWrapper,
  NavInteractBtn,
  NavInteractions,
  NavItems,
  NavMenu,
  NavWrapper,
  SignOutButton,
} from './NavBar.styles'

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const { isAuth } = useSelector((state) => state.userReducer)
  const { data: user } = useCheckAuth()

  const newNavData = [
    NavBarData[0],
    {
      title: 'Team',
      icon: <Team />,
      path: user?.team ? '/myteam' : '/team',
    },
    ...NavBarData.slice(1),
  ]

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
      <NavWrapper onClick={() => setSidebar(false)} active={sidebar}>
        <NavMenu onClick={(e) => e.stopPropagation()} active={sidebar} left="0">
          <NavBarToggle>
            <NavBarLogo active={sidebar}>
              <ShortLogo />
            </NavBarLogo>
            <NavBarClose active={sidebar} onClick={showSidebar}>
              <Close />
            </NavBarClose>
          </NavBarToggle>
          <Profile sidebar={sidebar} />
          <NavItems>
            {newNavData.map((item, index) => {
              return <NavItem active={sidebar} key={index} {...item} path={item.path} />
            })}
          </NavItems>
          <NavInteractions>
            <NavInteractBtn active={sidebar}>
              <NavIconWrapper>
                <Notification />
              </NavIconWrapper>
              <p>Notifications</p>
            </NavInteractBtn>
            {!isAuth ? (
              <NavInteractBtn
                active={sidebar}
                onClick={() => navigate('/auth/registration')}
                color="white"
              >
                <NavIconWrapper>
                  <Exit />
                </NavIconWrapper>
                <p>Sign Up</p>
              </NavInteractBtn>
            ) : (
              <NavInteractBtn active={sidebar} onClick={handleUseLogout}>
                <NavIconWrapper>
                  <Exit />
                </NavIconWrapper>
                <p>Sign Out</p>
              </NavInteractBtn>
            )}
          </NavInteractions>
          {/* <BottomContent>
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
            <UserText fontWeight="500" textTransform="capitalize" fontSize="11px" color="#86878B">
              copyright © {new Date().getFullYear()} Teameights.
            </UserText>
          </BottomContent> */}
          <NavBarCopyright active={sidebar}>
            copyright © {new Date().getFullYear()} Teameights.
          </NavBarCopyright>
        </NavMenu>
      </NavWrapper>
    </>
  )
}

export default NavBar
