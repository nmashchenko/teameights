import React from 'react'
import Snackbar from '@mui/material/Snackbar'

import { AlertBox } from './SnackBar.styles'
import { isEqual } from 'lodash'
const SnackBar = ({ open, handleClose, error, vertical = 'top' }) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />
  })

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: isEqual(vertical, 'top') ? 'top' : 'bottom',
        horizontal: 'right',
      }}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  )
}

export default SnackBar
