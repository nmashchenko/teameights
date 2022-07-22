import styled from "styled-components";
import { BLACK } from "../../../../constants/colors";
import ReactCountryFlag from "react-country-flag";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 100px;
`;

export const TitleText = styled.h3`
  font-family: "Montserrat";
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || "#FBFBFB"};
  margin: ${(props) => props.margin || "0px"};
`;

export const LanguageContainer = styled.div`
  width: 89.59px;
  height: 47.06px;
  background: ${(props) => props.languageContainerColor || "#E0FF00"};
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h3 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 19px;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ProgrammingLanguagesContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 120px);
  grid-template-rows: repeat(2, 70px);
  align-items: center;
`;

export const CountryFlag = styled(ReactCountryFlag)`
  width: 60px !important;
  height: 60px !important;
  margin-bottom: 10px !important;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 260px;
  width: 100%;
  max-height: 330px;
  height: 100%;
  padding: 32px 26px;
  background: ${(props) => props.backgroundColor || BLACK.main};
  background-image: ${(props) => props.backgroundImage || "none"};
  border-radius: 25px;

  &:hover {
    cursor: pointer;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    transition: 0.4s ease-in-out;
  }

  &:hover ${LanguageContainer} {
    background: black;
    transition: 0.3s;
  }

  &:hover h3 {
    color: white;
  }

  &:hover ${TitleText} {
    color: black;
  }
`;

export const CrownContainer = styled.div`
  position: absolute;
  margin-bottom: 300px;
  margin-right: 250px;
  width: 56px;
  height: 54px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
`;
