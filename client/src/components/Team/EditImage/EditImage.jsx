import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'

import { CheckCircle } from '../../../assets/Team/CheckCircle'
import { UploadSymbol } from '../../../assets/Team/UploadSymbol'

import { DefaultImg, FileButton, FormikContainer, ImageBox, MyRadioGroup } from './EditImage.styles'

const EditImage = ({
  selectedImage,
  imgData,
  picture,
  setImgData,
  setPicture,
  changeSelectedImage,
  defaultTeamImages,
}) => {
  const [errorMessage, updateErrorMessage] = useState('')

  useEffect(() => {
    if (errorMessage === '') {
      return
    }

    const timer = () => {
      updateErrorMessage('')
    }

    const timeout = setTimeout(timer, 2000)

    return () => clearTimeout(timeout)
  }, [errorMessage])

  const selectedImgJSX =
    imgData === null ? (
      <>
        <UploadSymbol />
        <p style={{ margin: '0', marginTop: '12px' }}>
          {errorMessage.length > 0 ? errorMessage : 'Drop here or click to upload'}
        </p>
      </>
    ) : (
      <div>{picture === null ? '' : picture.name}</div>
    )

  return (
    <FormikContainer>
      <Formik
        initialValues={{
          image: '',
          default: '',
        }}
      >
        {() => {
          return (
            <Form
              style={{
                marginTop: '8px',
                color: '#FFFFFF',
              }}
              id="saveForm"
            >
              <label htmlFor="defaults" style={{ marginBottom: '16px', display: 'inline-block' }}>
                Select a default
              </label>
              <MyRadioGroup
                name="default"
                onClick={(e) => {
                  const pic = e.target.dataset.pic

                  if (pic === undefined) {
                    return
                  }
                  const nextPic = pic === selectedImage ? '' : pic

                  setPicture(null)
                  setImgData(null)
                  changeSelectedImage(nextPic)
                }}
              >
                {defaultTeamImages.map((image, key) => (
                  <ImageBox key={key} myKey={String(key) === selectedImage}>
                    <DefaultImg
                      data-pic={key}
                      src={require(`../../../assets/Images/team/${image}.png`)}
                    />
                    <span>
                      <CheckCircle />
                    </span>
                  </ImageBox>
                ))}
              </MyRadioGroup>

              <label htmlFor="image" style={{ marginBottom: '16px', display: 'inline-block' }}>
                Or add your own
              </label>
              <Field
                style={{
                  color: '#FFF',
                  border: 'none',
                  borderBottom: '1px solid #86878B',
                  transition: 'all .2s',
                  position: 'absolute',
                  opacity: '0',
                  pointerEvents: 'none',
                }}
                type="file"
                id="image"
                name="image"
                onChange={(ev) => {
                  ev.preventDefault()
                  const file = ev.target.files[0]

                  const fileExtension = file.name.split('.').pop().toLowerCase()

                  // check file type
                  if (
                    !file.type.includes('jpeg') &&
                    !fileExtension.includes('png') &&
                    !fileExtension.includes('jpg')
                  ) {
                    updateErrorMessage('Only JPEG, JPG and PNG formats are accepted.')

                    return
                  }

                  if (file.size > 10000000) {
                    updateErrorMessage('Image too big')

                    return
                  }

                  setPicture(file)
                  const reader = new FileReader()

                  reader.addEventListener('load', () => {
                    changeSelectedImage('')
                    setImgData(reader.result)
                  })
                  reader.readAsDataURL(file)
                }}
              />
              <FileButton
                onClick={(ev) => {
                  ev.preventDefault()
                  document.querySelector('#image').click()
                }}
                onDrop={(ev) => {
                  ev.preventDefault()

                  if (ev.dataTransfer.items) {
                    // Use DataTransferItemList interface to access the file(s)
                    ;[...ev.dataTransfer.items].forEach((item, i) => {
                      // If dropped items aren't files, reject them
                      if (item.kind === 'file') {
                        const file = item.getAsFile()

                        const fileExtension = file.name.split('.').pop().toLowerCase()

                        // check file type
                        if (
                          !file.type.includes('jpeg') &&
                          !fileExtension.includes('png') &&
                          !fileExtension.includes('jpg')
                        ) {
                          updateErrorMessage('Only JPEG, JPG and PNG formats are accepted.')

                          return
                        }

                        setPicture(file)
                        const reader = new FileReader()

                        reader.readAsDataURL(file)
                        reader.addEventListener('load', () => {
                          changeSelectedImage('')
                          setImgData(reader.result)
                        })
                      }
                    })
                  } else {
                    // Use DataTransfer interface to access the file(s)
                    ;[...ev.dataTransfer.files].forEach((file, i) => {
                      // console.log(`… file[${i}].name = ${file.name}`)
                    })
                  }
                }}
                onDragOver={(e) => {
                  e.preventDefault()
                  document.querySelector('#image').click()
                }}
                dropzone="move"
              >
                {selectedImgJSX}
              </FileButton>
            </Form>
          )
        }}
      </Formik>
    </FormikContainer>
  )
}

export default EditImage
