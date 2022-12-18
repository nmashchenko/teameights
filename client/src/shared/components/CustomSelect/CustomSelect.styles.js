import styled from "styled-components";
import Select from "@mui/material/Select";
import {GREEN, WHITE, GREY} from "../../../constants/colors";
import MenuItem from "@mui/material/MenuItem";
import {shake} from "../../styles/KeyFrames.styles";

export const SelectCustom = styled(Select)`
  animation-name: ${(props) => !props.$isError ? 'none' : shake};
  animation-duration: 0.3s;
  
  background: none;
  height:  45px;
  border: none;
  fontSize: 18px;
  color: ${WHITE.main};
  
  svg {
    color: ${(props) => props.isError ? '#cf625e'  : '#72EB3A'};
  }
  
  & .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
    color: ${WHITE.main};
  }
`

export const Line = styled.hr`
  margin: 0;
  border: none;
  height: 1px;
  background: ${(props) => props.background || '#4b4b4b'};
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;
`

export const Item = styled(MenuItem)`
  /* Root */
  &.MuiMenuItem-root {
    font-size: 0.875rem;
    font-weight: 600;
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
    margin-top: 5px;
    cursor: pointer;
    &:last-of-type {
      border-bottom: none;
    }
  }

  /* Selected item inside the filter */
  &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
    background: ${GREEN.alternativeBorder} !important;
    color: white !important;
    font-size: 0.875rem;
    font-weight: 600;
  }

  /* Hover for the selected item inside the filter */
  &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover {
    background: ${GREEN.alternativeBorder} !important;
    color: white !important;
    font-size: 0.875rem;
    font-weight: 600;
  }
`


export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: '250px',
            background: GREY.selectBackground,
            boxSizing: 'border-box',
            padding: '0 5px',
            margin: '5px 0',
            borderRadius: '5px',
            color: WHITE.main,
            overflow: 'auto',
            outline: '0px',
        },
    },
}