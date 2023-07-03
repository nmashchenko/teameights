import MuiAlert from '@mui/material/Alert'
import styled from 'styled-components'

import { BLACK } from '../../../../shared/constants/colors'

export const AlertBox = styled(MuiAlert)`
  && {
    background: ${BLACK.main};
  }
`
