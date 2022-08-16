import MuiAlert from '@mui/material/Alert'
import styled from 'styled-components'
import { RED } from '../../constants/colors'
import { device } from '../../constants/breakpoints'

export const AlertBox = styled(MuiAlert)`
  && {
    /* margin-top: 100px; */
    background: ${RED.alert};
  }

  @media ${device.tablet} {
    max-width: 250px;
  }
`
