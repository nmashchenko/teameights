import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import {LIME, WHITE, BLACK, GREY} from '../../../../constants/colors'
import {device} from '../../../../constants/breakpoints'

export const Item = styled(MenuItem)`
  &.MuiMenuItem-root {
    font-family: 'Montserrat';
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

  &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
    background-color: #E0FF00;
    color: black;
  }

  &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover {
    background-color: #E0FF00;
    color: black;
  }
`

export const PlaceholderText = styled.h5`
  font-family: 'Montserrat';
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin: 0;
`

export const CustomSelect = styled(Select)`
  &.css-vrp7az-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
    background: none;
  }
`