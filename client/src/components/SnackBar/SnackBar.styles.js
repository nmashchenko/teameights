import MuiAlert from '@mui/material/Alert'
import styled from 'styled-components'

import { device } from '../../constants/breakpoints'
import { RED } from '../../constants/colors'

export const AlertBox = styled(MuiAlert)`
  && {
    /* margin-top: 100px; */
    background: ${RED.alert};
  }

  @media ${device.tablet} {
    max-width: 250px;
  }
`
