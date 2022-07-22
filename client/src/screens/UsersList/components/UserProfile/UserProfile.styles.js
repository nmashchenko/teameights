import styled, { keyframes } from "styled-components";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import { LIME, WHITE, BLACK, GREY } from "../../../../constants/colors";
import { device } from "../../../../constants/breakpoints";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 80%;
`;

export const ProfileContainer = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h3`
  font-family: "Montserrat";
  font-weight: ${(props) => props.fontWeight || "600"};
  font-size: ${(props) => props.fontSize || "32px"};
  color: ${(props) => props.color || "#000"};
  margin: ${(props) => props.margin || "0px"};
  text-align: ${(props) => props.textAlign || "none"};
`;

const linkKeyframesRev = keyframes`
    0% {
        background-size: 650%;
    }
    40% {
        background-size: 650%;
    }
    100% {
        background-size: 100%;
    }
`;

const linkKeyframes = keyframes`
  0% {
      background-size: 100%;
    }
  80% {
      background-size: 650%;
    }
  100% {
      background-size: 650%;
    }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 24px;
  margin: 0 0 15px 0;
  /* Fallback: Set a background color. */
  background-color: #f3ec78;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, #f3ec78, #af4261);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  animation: ${linkKeyframesRev} 0.75s ease forwards;

  &:hover {
    cursor: pointer;
    animation: ${linkKeyframes} 0.5s ease-in forwards;
  }
`;

export const MainSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
`;

export const LeftSection = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const AboutMeContainer = styled.div`
  max-width: 370px;
  height: 200px;
`;

export const UserLinks = styled.div`
  margin-top: 45px;
  display: flex;
`;

export const RightSection = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const ImgContainer = styled.img`
  margin-top: 15px;
  width: 330px;
  height: 330px;
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 330px;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 330px;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  outline: none;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  margin-bottom: 25px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 17px;
  color: ${WHITE.main};
  cursor: pointer;

  &:hover {
    font-size: 18px;
    transition: 0.1s ease-in-out;
  }
`;
