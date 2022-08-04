// * Modules
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

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
    background: #365a08 !important;
    color: white !important;
    font-size: 0.875rem;
    font-weight: 600;
  }

  /* Hover for the selected item inside the filter */
  &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover {
    background: #365a08 !important;
    color: white !important;
    font-size: 0.875rem;
    font-weight: 600;
  }

  /* Root of input */
  &.MuiOutlinedInput-root
    MuiInputBase-root
    MuiInputBase-colorPrimary
    Mui-focused
    MuiInputBase-formControl
    sc-egNfGp
    kouRYJ
    css-1nbbxgk-MuiInputBase-root-MuiOutlinedInput-root {
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
  }
`

export const PlaceholderText = styled.h5`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin: 0;
`

export const CustomSelect = styled(Select)`
  &.css-vrp7az-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    background: none;
  }
`
