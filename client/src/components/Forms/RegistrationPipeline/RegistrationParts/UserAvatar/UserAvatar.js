// * Modules
import React, { useState } from 'react'
import ModalWindow from './ModalWindow/ModalWindow'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { useSnackbar } from 'notistack'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'
import { style } from './ModalWindow/ModalWindow.styles'
import ConsoleSimulator from './ConsoleSimulator/ConsoleSimulator'

// * Redux
import { useSelector } from 'react-redux'

// * Styles
import {
  Container,
  DataContainer,
  MiddleContainer,
  CardContainer,
  SelectContainer,
  UserImageContainer,
  UploadArea,
  Text,
  Button,
} from './UserAvatar.styles'
import { useEffect } from 'react'

// * Hooks
import useAvatarSubmit from './Hooks/useUserAvatarSubmit'

const UserAvatar = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  useEffect(() => {
    setUser(userData)
  }, [])

  const { enqueueSnackbar } = useSnackbar()

  // * useStates
  const [preview, setPreview] = useState(null)
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState({})
  const [lineTwoActive, setLineTwoActive] = useState(false)
  const [lineThreeActive, setLineThreeActive] = useState(false)
  const [lineFourActive, setLineFourActive] = useState(false)
  const [lineFiveActive, setLineFiveActive] = useState(false)
  const [lineSixActive, setLineSixActive] = useState(false)
  const [lineSevenActive, setLineSevenActive] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    setLineFourActive(true)
  }

  const handleClose = () => setOpen(false)

  const handleSaveClose = () => {
    setOpen(false)
    setLineFiveActive(true)
  }

  function onClose() {
    setPreview(null)
  }
  function onCrop(pv) {
    setUser({
      ...user,
      userPhoto: pv,
    })
    setPreview(pv)
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 2000000) {
      enqueueSnackbar('File is too big!', {
        preventDuplicate: true,
      })
      elem.target.value = ''
    }
  }

  // * useExperienceSubmit hook
  const handleSubmit = useAvatarSubmit(user, setOpen, setErrors)

  return (
    <Container>
      <Stepper step={step} />
      <DataContainer>
        <NavLogo sectionName={'User Avatar'} />
        <MiddleContainer>
          <ModalWindow
            open={open}
            handleClose={handleClose}
            style={style}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            handleSaveClose={handleSaveClose}
          />
          <CardContainer>
            <SelectContainer>
              <UserImageContainer>
                <UploadArea onClick={handleOpen}>
                  <FileUploadIcon sx={{ fontSize: '60px', color: 'white' }} />
                  <Text>UPLOAD</Text>
                </UploadArea>
              </UserImageContainer>
            </SelectContainer>
            <ConsoleSimulator
              preview={preview}
              userData={userData}
              lineTwoActive={lineTwoActive}
              lineThreeActive={lineThreeActive}
              lineFourActive={lineFourActive}
              lineFiveActive={lineFiveActive}
              lineSixActive={lineSixActive}
              lineSevenActive={lineSevenActive}
              setLineTwoActive={setLineTwoActive}
              setLineThreeActive={setLineThreeActive}
              setLineSixActive={setLineSixActive}
              setLineSevenActive={setLineSevenActive}
            />
          </CardContainer>
          <Button onClick={handleSubmit}>FINISH</Button>
        </MiddleContainer>
      </DataContainer>
    </Container>
  )
}

export default UserAvatar
