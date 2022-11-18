// * Modules
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Avatar from 'react-avatar-edit'

// * Styles
import { DoneButton } from '../UserAvatar.styles'

const ModalWindow = ({
  open,
  handleClose,
  style,
  onCrop,
  onClose,
  onBeforeFileLoad,
  handleSaveClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Avatar
          imageHeight={200}
          height={200}
          width={200}
          onCrop={onCrop}
          onClose={onClose}
          cropRadius={40}
          minCropRadius={40}
          onBeforeFileLoad={onBeforeFileLoad}
          labelStyle={{
            cursor: 'pointer',
            color: '#5D9D0B',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
          src={null}
        />
        <DoneButton onClick={handleSaveClose}>Save</DoneButton>
      </Box>
    </Modal>
  )
}

export default ModalWindow
