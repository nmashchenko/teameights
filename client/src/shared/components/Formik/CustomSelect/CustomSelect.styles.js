import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import styled from 'styled-components'

import { GREEN, GREY, WHITE } from '../../../../constants/colors'
import { shake } from '../../../styles/KeyFrames.styles'

export const SelectCustom = styled(Select)`
  animation-name: ${(props) => (!props.$isError ? 'none' : shake)};
  animation-duration: 0.3s;
  background: none;
  height: 45px;
  border: none;
  font-size: 18px;
  color: ${WHITE.main};
  width: 100%;

  svg {
    color: ${(props) => (props.isError ? '#cf625e' : '#72EB3A')};
  }

  fieldset {
    border: none !important;
    outline: none !important;
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
      margin: '12px 0',
      borderRadius: '5px',
      color: WHITE.main,
      overflow: 'auto',
      outline: '0px',
    },
    sx: {
      '&::-webkit-scrollbar': {
        width: '9px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#365A08',
        borderRadius: '10px',
        height: '30px !important',
      },
      '&::-webkit-scrollbar-track': {
        marginTop: '10px',
        marginBottom: '10px',
      },
    },
  },
}
