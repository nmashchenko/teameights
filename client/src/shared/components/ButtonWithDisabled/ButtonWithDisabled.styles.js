import styled from "styled-components";
import {GREEN, RED, WHITE} from "../../../constants/colors";

export const ButtonDisabled = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  width:  ${(props) => props.width || '11rem'};
  height: 40px;
  color: ${WHITE.main};
  background: ${RED.alert};
  opacity: 0.3;
  border-radius: 25px;
  cursor: not-allowed;
`

export const Button = styled.button`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  border: none;
  width:  ${(props) => props.width || '10.5rem'};
  height: 49px;
  color: ${WHITE.main};
  background: ${GREEN.button};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`