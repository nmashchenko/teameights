import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import UploadAvatarIcon from '../../../../../assets/Avatars/uploadAvatarIcon.svg'

import { DropzoneContent, DropzoneText } from './CustomDropZone.styles'

const MAX_SIZE = 1572864

const CustomDropZone = ({ setUserAvatar, defaultAvatarSelected }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]

    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function () {
      const imageUrl = reader.result

      setUserAvatar(imageUrl)
    }
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
    isFileDialogActive,
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxSize: MAX_SIZE,
  })

  function renderDropzoneText() {
    if (fileRejections[0] && !defaultAvatarSelected) {
      return <DropzoneText>{fileRejections[0]?.errors[0].message}</DropzoneText>
    }

    if (acceptedFiles[0] && !defaultAvatarSelected) {
      return <DropzoneText>{acceptedFiles[0]?.name}</DropzoneText>
    }

    if (
      (!isDragActive && !acceptedFiles?.length && !fileRejections?.length) ||
      defaultAvatarSelected
    ) {
      return (
        <>
          <UploadAvatarIcon />
          <DropzoneText>Drop here or click to upload</DropzoneText>
        </>
      )
    }

    return null
  }

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <DropzoneContent>{renderDropzoneText()}</DropzoneContent>
    </div>
  )
}

export default CustomDropZone
