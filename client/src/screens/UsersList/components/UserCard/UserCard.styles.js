import styled from "styled-components";
import { BLACK } from "../../../../constants/colors";
import ReactCountryFlag from "react-country-flag";
import {device} from '../../../../constants/breakpoints'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`

export const ProgrammingLanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`

export const LanguageContainer = styled.div`
  background: #1B1D24;
  border-radius: 2px;
  width: 65px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) { 
    width: 90px;
  }
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: 60px;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`

export const CountryContainer = styled.div`
  display: flex;
`

export const TitleText = styled.h3`
  font-family: "Montserrat";
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || "#FFF"};
  margin: ${(props) => props.margin || "0px"};

  @media screen and (min-width: 1440px) { 
      font-size: 13px;
    }
`;

export const Framework = styled.div`
  width: ${(props) => props.width || "65px"};
  height: 30px;
  margin-right: ${(props) => props.marginRight || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "10px"};
  flex-grow: 1;
  background: ${(props) => props.background || "#E0FF00"};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h3 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 12px;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 1440px) { 
      font-size: 14px;
    }
  }
  
  @media screen and (min-width: 1440px) { 
    height: 40px;
  }
  
`;

export const FrameWorksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 75px;
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: center;
  margin-top: 20px;

  @media screen and (min-width: 1440px) { 
    height: 120px;
  }
`;

export const CrownContainer = styled.div`
  position: absolute;
  margin-bottom: 270px;
  margin-right: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) { 
    margin-bottom: 300px;
    margin-right: 235px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 200px;
  height: 270px;
  padding: 25px 22px;
  background: #2E3239;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.12);
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }

  &:hover + ${CrownContainer} {

  } 

   &:hover h3 {
  } 

   &:hover ${TitleText} {
  } 

  @media screen and (min-width: 1440px) { 
    width: 240px;
    height: 300px;
  }
`;
