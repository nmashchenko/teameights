// * Modules
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import styled, { keyframes } from 'styled-components'

// * Constants
import { GREEN } from '../../../../../constants/colors'

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
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

export const SelectCustom = styled(Select)`
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;

  & .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 5px 10px 5px 0 !important;
  }
`
