// * Modules
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

// * Constants
import { GREEN } from '../../../../constants/colors'

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

export const SelectCustom = styled(Select)``
