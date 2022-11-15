// * Modules
import React, { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'

// * Redux
import { useSelector } from 'react-redux'

// * Styles
import { Container, DataContainer } from './UserAvatar.styles'

const UserAvatar = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  console.log(userData)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [university, setUniversity] = useState('')
  const [major, setMajor] = useState('')
  const [graduationDate, setGraduationDate] = useState()

  return (
    <Container>
      <Stepper step={step} />
      <DataContainer>
        <NavLogo sectionName={'User Avatar'} />
      </DataContainer>
    </Container>
  )
}

export default UserAvatar
