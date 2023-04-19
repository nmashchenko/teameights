// * Modules
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useLogoutUser } from '../../api/hooks/auth/useLogoutUser'
// * Assets
import Close from '../../assets/Sidebar/Close'
import Exit from '../../assets/Sidebar/Exit'
import ShortLogo from '../../assets/Sidebar/ShortLogo'
import Team from '../../assets/Sidebar/Team'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import Loader from '../../shared/components/Loader/Loader'

// * Data
import NavItem from './NavItem/NavItem'
import NotificationsContent from './NotificationsContent/NotificationsContent'
import Profile from './Profile/Profile'
import { NavBarData } from './NavBar.data'
import {
  IconWrapper,
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
      path: user?.team ? '/myteam' : '/team',
    },
    ...NavBarData.slice(1),
  ]

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
                user={user}
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
                <IconWrapper width="24px" height="24px">
                  <Exit />
                </IconWrapper>
                <p>Sign Up</p>
              </NavInteractBtn>
            ) : (
              <NavInteractBtn active={sidebar} onClick={handleUseLogout}>
                <IconWrapper width="24px" height="24px">
                  <Exit />
                </IconWrapper>
                <p>Sign Out</p>
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
