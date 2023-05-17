import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

export default function Hover({ open, handlePopoverClose, anchorEl }) {
  return (
    <div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          marginTop: '5px',
          borderRadius: '5px',
          '& .MuiPopover-paper': {
            background: '#2F3239',
            color: 'white',
          },
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          If you have any issues, please email
          <br /> us at <span style={{ color: '#5BD424' }}>helpteameights@gmail.com</span>
        </Typography>
      </Popover>
    </div>
  )
}
