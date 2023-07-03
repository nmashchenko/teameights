// * Modules
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// * Assets
import Close from '../../assets/Sidebar/Close'
import Exit from '../../assets/Sidebar/Exit'
import ShortLogo from '../../assets/Sidebar/ShortLogo'
import Team from '../../assets/Sidebar/Team'
import UserIcon from '../../assets/Sidebar/UserIcon'
import { useCheckAuth } from '../../shared/api/hooks/auth/useCheckAuth'
import { useLogoutUser } from '../../shared/api/hooks/auth/useLogoutUser'
import { useOutsideClick } from '../../shared/lib/hooks/useOutsideClick'
import IconWrapper from '../../shared/ui/IconWrapper/IconWrapper'
import Loader from '../../shared/ui/Loader/Loader'

import NavItem from './NavItem/NavItem'
import NotificationsContent from './NotificationsContent/NotificationsContent'
import Profile from './Profile/Profile'
// * Data
import { NavBarData } from './NavBar.data'
import {
  MobileNavBarIconWrapper,
  NavBarClose,
  NavBarCopyright,
  NavBarLogo,
  NavBarToggle,
  NavInteractBtn,
  NavInteractions,
  NavItems,
  NavMenu,
  NavWrapper,
} from './NavBar.styles'

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [notificationModal, setNotificationModal] = useState(false)

  const { isAuth } = useSelector((state) => state.userReducer)
  const { data: user } = useCheckAuth()

  const newNavData = [
    NavBarData[0],
    {
      title: 'Team',
      icon: <Team />,
      path: user?.team ? `/team/${user.team._id}` : '/team',
    },
    NavBarData[1],
    user && {
      title: 'Profile',
      path: `/profile/${user._id}`,
      icon: <UserIcon />,
    },
  ].filter(Boolean)

  const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser()
  const navigate = useNavigate()
  const navMenuRef = useRef(null)

  useOutsideClick(navMenuRef, () => setSidebar(false), notificationModal)

  const handleUseLogout = () => {
    logoutUser()
  }

  if (isUserLoggingOut) {
    return <Loader />
  }
  const showSidebar = () => {
    setSidebar((prev) => !prev)
  }

  return (
    <>
      {/* This will appear for screen width <= 768px */}
      <MobileNavBarIconWrapper onClick={showSidebar} active={sidebar}>
        <NavBarClose active={sidebar}>
          <Close />
        </NavBarClose>
      </MobileNavBarIconWrapper>

      {/* This will appear for screen width > 768px */}
      <NavWrapper active={sidebar}>
        <NavMenu ref={navMenuRef} onClick={(e) => e.stopPropagation()} active={sidebar} left="0">
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
              return (
                <NavItem
                  onClick={() => setSidebar(false)}
                  active={sidebar}
                  key={index}
                  {...item}
                  path={item.path}
                />
              )
            })}
          </NavItems>
          <NavInteractions>
            {isAuth && user && (
              <NotificationsContent
                sidebar={sidebar}
                notificationModal={notificationModal}
                setNotificationModal={setNotificationModal}
              />
            )}
            {!isAuth ? (
              <NavInteractBtn
                active={sidebar}
                onClick={() => navigate('/auth/registration')}
                color="white"
              >
                <IconWrapper width="24px" height="24px" cursor="pointer">
                  <Exit />
                </IconWrapper>
                <p>Login</p>
              </NavInteractBtn>
            ) : (
              <NavInteractBtn active={sidebar} onClick={handleUseLogout}>
                <IconWrapper width="24px" height="24px" cursor="pointer">
                  <Exit />
                </IconWrapper>
                <p>Logout</p>
              </NavInteractBtn>
            )}
          </NavInteractions>
          <NavBarCopyright active={sidebar}>
            copyright © {new Date().getFullYear()} Teameights.
          </NavBarCopyright>
        </NavMenu>
      </NavWrapper>
    </>
  )
}

export default NavBar
