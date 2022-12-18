import styled from "styled-components";
import {WHITE} from "../../../constants/colors";
import {shake} from "../../styles/KeyFrames.styles";

export const Input = styled.input`
  outline: 0;
  border-width: 0 0 1.5px;
  border-color: ${(props) => props.borderColor || '#4b4b4b'};
  background: inherit;
  width: ${(props) => props.width || '240px'};
  height: ${(props) => props.height || '40px'};
  font-size: 18px;
  margin: ${(props) => props.margin || '16px 0 0 0'};
  color: ${WHITE.main};
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;

  &:focus {
    border-color: ${WHITE.main};
  }
`

