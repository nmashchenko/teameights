import React, { useState } from 'react'
import NavBarIcon from "../../../../assets/NavBarIcon";
import Close from '../../../../assets/Sidebar/Close';
import { NavBarData } from './NavBar.data'
import { Link } from 'react-router-dom';
import userImg from '../../img/tempImg.jpg'
import Exit from '../../../../assets/Sidebar/Exit'

import {
  NavIconContainer,
  UserInfo,
  UserData,
  UserImage,
  UserTextContainer,
  UserText,
  NavMenu,
  NavMenuItems,
  NavBarToggle,
  NavItem,
  ItemTitle,
  NavItems,
  BottomContent,
  SingOutButton,

} from "./NavBar.styles";



const NavBar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <NavIconContainer onClick={showSidebar}>
        <NavBarIcon />
      </NavIconContainer>

      {sidebar ? 
      <NavMenu left='0' transition='250ms'>
        <NavMenuItems onClick={showSidebar}>
        <UserInfo>
          <NavBarToggle>
            <Close />
          </NavBarToggle>
          <UserData>
            <UserImage src={userImg} alt='user image' />
            <UserTextContainer>
              <UserText fontWeight='600'>Nikita Mashchenko</UserText>
              <UserText>Full Stack Developer</UserText>
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
                <SingOutButton onClick={props.handleUserLogout}><Exit /> Sign Out</SingOutButton>
                <UserText fontWeight='400' fontSize='12px' color='rgba(255, 255, 255, 0.15)' margin='0 0 5px 0'>Copyright © 2022 Teameights.</UserText>
                <UserText fontWeight='400' fontSize='12px' color='rgba(255, 255, 255, 0.15)' margin='0 0 30px 0'>All rights reserved.</UserText>
            </BottomContent>
        </NavMenuItems>
      </NavMenu>
      : 
      <NavMenu />
    }

      
    </>
  )
}  

export default NavBar