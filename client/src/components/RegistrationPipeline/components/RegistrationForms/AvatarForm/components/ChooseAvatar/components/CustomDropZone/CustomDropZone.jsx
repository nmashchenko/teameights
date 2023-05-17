import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

import { ReactComponent as UploadAvatarIcon } from '../../../../../../../../../assets/uploadAvatarIcon.svg'

import { DropzoneContent, DropzoneText } from './CustomDropZone.styles'

const CustomDropZone = ({ setUserAvatar }) => {
  function handleDrop(acceptedFiles) {
    const file = acceptedFiles[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function () {
      const imageUrl = reader.result

      setUserAvatar(imageUrl)
    }
  }

  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <DropzoneContent>
            <UploadAvatarIcon />
            <DropzoneText>Drop here or click to upload</DropzoneText>
          </DropzoneContent>
        </div>
      )}
    </Dropzone>
  )
}

export default CustomDropZone
