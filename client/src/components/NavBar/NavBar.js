// * Modules
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// * Assets
import NavBarIcon from '../../assets/NavBarIcon'
import Close from '../../assets/Sidebar/Close'
import Exit from '../../assets/Sidebar/Exit'

// * Data
import { NavBarData } from './NavBar.data'
import TeameightsLogo from '../../assets/Team/TeameightsLogo'

import {
  NavIconContainer,
  UserInfo,
  UserText,
  NavMenu,
  NavMenuItems,
  NavBarToggle,
  NavItem,
  ItemTitle,
  NavItems,
  BottomContent,
  SingOutButton,
  IconNav,
} from './NavBar.styles'

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
            </NavItems>
            <BottomContent>
              <SingOutButton onClick={handleUserLogout}>
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
