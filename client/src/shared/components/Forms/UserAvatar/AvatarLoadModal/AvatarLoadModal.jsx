import Avatar from '@mikhail2404/react-avatar-edit'
import { ReactComponent as UploadAvatarIcon } from '../../../../../assets/uploadAvatarIcon.svg'

import { Button } from '../../../../styles/Button.styles'
import ModalWindow from '../../../ModalWindow/ModalWindow'

import { AvatarWrapper } from './AvatarLoadModal.styles'

const AvatarLoadModal = ({ handleSaveClose, ...props }) => {
  return (
    <>
      {/*<AvatarWrapper>*/}
        <Avatar
          imageHeight={200}
          height="7.375rem"
          width="100%"
          cropRadius={40}
          minCropRadius={40}
          label={  <div style={{display: 'flex', height: "100%", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                <UploadAvatarIcon />
              <p>Drop here or click to upload</p>
          </div>   }
          labelStyle={{
            cursor: 'pointer',
            color: '#5D9D0B',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
          exportAsSquare
          exportMimeType={'image/jpeg'}
          exportSize={200}
          exportQuality={0.7}
          {...props}
        />
        {/*<Button marginBottom="0" onClick={handleSaveClose}>*/}
        {/*  save*/}
        {/*</Button>*/}
      {/*</AvatarWrapper>*/}
    </>
  )
}

export default AvatarLoadModal
