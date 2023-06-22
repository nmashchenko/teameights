// * Modules
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useLogoutUser } from '../../api/hooks/auth/useLogoutUser'
import { socket } from '../../api/sockets/notifications.socket'
// * Assets
import Close from '../../assets/Sidebar/Close'
import Exit from '../../assets/Sidebar/Exit'
import ShortLogo from '../../assets/Sidebar/ShortLogo'
import Team from '../../assets/Sidebar/Team'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import IconWrapper from '../../shared/components/IconWrapper/IconWrapper'
import Loader from '../../shared/components/Loader/Loader'

// * Data
import NavItem from './NavItem/NavItem'
import NotificationsContent from './NotificationsContent/NotificationsContent'
import Profile from './Profile/Profile'
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
  const { data: user, isFetching: isUserDataLoading } = useCheckAuth()

  const [userNotifications, setUserNotifications] = useState(user?.notifications || [])

  const newNavData = [
    NavBarData[0],
    {
      title: 'Team',
      icon: <Team />,
      path: user?.team ? `/team/${user.team._id}` : '/team',
    },
    ...NavBarData.slice(1),
  ]

  const { mutate: logoutUser, isLoading: isUserLoggingOut } = useLogoutUser()
  const navigate = useNavigate()
  const navMenuRef = useRef(null)

  useEffect(() => {
    if (user) {
      socket.connect()

      setUserNotifications(user?.notifications)

      console.log(`Connecting socket...`)
      socket.emit('subscribeToNotifications', JSON.stringify({ id: user._id }))

      return () => {
        socket.disconnect()
      }
    }
  }, [isUserDataLoading])

  useEffect(() => {
    if (user) {
      socket.on(`notification-${user._id}`, (notification) => {
        // Find the index of the existing notification with the same _id
        const existingIndex = userNotifications.findIndex(
          (n) => String(n._id) === String(notification._id),
        )

        // If an existing notification is found, update it
        if (existingIndex !== -1) {
          const updatedNotifications = [...userNotifications]

          updatedNotifications[existingIndex] = notification
          setUserNotifications(updatedNotifications)
        }
        // If not, add the new notification to the array
        else {
          setUserNotifications([...userNotifications, notification])
        }
      })

      return () => {
        socket.off(`notification-${user._id}`)
      }
    }
  }, [userNotifications])

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
                userNotifications={userNotifications}
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
