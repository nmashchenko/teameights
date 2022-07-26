import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NavIconContainer = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

export const NavMenu = styled.nav`
  width: 320px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  background: #1A1C22;
  top: 0;
  left: ${(props) => props.left || "-100%"};
  transition: ${(props) => props.transition || "550ms"};
  z-index: 999;
`

export const NavMenuItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const UserInfo = styled.div`
  width: 320px;
  height: 200px;
  background: #2E3239;
  border-radius: 0px 0px 12px 12px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`

export const NavBarToggle = styled.li`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
`

export const UserData = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border: 3px solid #365A08;
  border-radius: 50%;
`

export const UserTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const UserText = styled.h3`
  font-family: "Montserrat";
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#FFF"};
  margin: ${(props) => props.margin || "0px"};

`

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media screen and (min-width: 1440px) { 
    margin-top: 25px;
  }
`
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 30px 39px;
  height: 50px;
  
  @media screen and (min-width: 1440px) { 
    padding: 35px 39px;
    height: 60px;
  }

  >a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 30px 20px;
    border-radius: 4px;
    font-weight: 500;

    @media screen and (min-width: 1440px) { 
      font-size: 17px;
    }
  }

  >a:hover {
    /* background: green; */
    font-size: 16.5px;

    @media screen and (min-width: 1440px) { 
      font-size: 17.5px;
    }
  }
`

export const ItemTitle = styled.span`
  margin-left: 25px;
`

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: end;
  align-items: center;
`

export const SingOutButton = styled.button`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  width: 230px;
  height: 40px;
  background: #2E3239;
  border-radius: 5px;
  color: white;
  font-family: "Montserrat";
  font-weight: 600;
  cursor: pointer;

  &:hover {
    font-size: 14.5px;
  }

  @media screen and (min-width: 1440px) { 
    margin-bottom: 30px;
    height: 45px;
  }
`