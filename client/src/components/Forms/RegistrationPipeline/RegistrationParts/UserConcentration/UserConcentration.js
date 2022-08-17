// * Modules
import React, { useState } from 'react'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import SnackBar from '../../../../SnackBar/SnackBar'
import Stepper from '../../Stepper/Stepper'

// * Redux
import { useSelector } from 'react-redux'

// * Styles
import { Container, CardContainer } from './UserConcentration.styles'

const UserConcentration = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <form>
        <NavLogo />
        {open && errors.length > 0 && (
          <SnackBar handleClose={handleClose} open={open} error={'fix errors'} vertical="bot" />
        )}
        <Container>
          <Stepper step={step} />
          <CardContainer></CardContainer>
        </Container>
      </form>
    </>
  )
}

export default UserConcentration
