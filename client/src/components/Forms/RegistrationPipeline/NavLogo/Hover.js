import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

export default function Hover({ open, handlePopoverClose, anchorEl }) {
  return (
    <div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          marginTop: '3px',
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
          If you encounter any problems, email us at helpteameights@gmail.com
        </Typography>
      </Popover>
    </div>
  )
}
