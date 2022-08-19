// * Modules
import React, { useState } from 'react'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import SnackBar from '../../../../SnackBar/SnackBar'
import Stepper from '../../Stepper/Stepper'
import CustomMultipleSelect from '../../CustomMultipleSelect/CustomMultipleSelect'

// * Data
import frameworksOptions from '../../../../../constants/frameworks'
import concentrationsOptions from '../../../../../constants/concentrations'
import programmingLanguagesOptions from '../../../../../constants/programmingLanguages'

// * Redux
import { useSelector } from 'react-redux'

// * Styles
import {
  Container,
  CardContainer,
  TopContainer,
  Text,
  MiddleContainer,
  ConcetrationContainer,
  Line,
  BottomContainer,
  Button,
} from './UserConcentration.styles'

const UserConcentration = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [programmingLanguages, setProgrammingLanguages] = useState([])
  const [frameworks, setFrameworks] = useState([])
  const [concentration, setConcentration] = useState('')

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleProgrammingLanguages = (event) => {
    const {
      target: { value },
    } = event
    setProgrammingLanguages(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  const handleFrameworks = (event) => {
    const {
      target: { value },
    } = event
    setFrameworks(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  const handleConcentration = (event) => {
    setConcentration(event.target.value)
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
          <CardContainer>
            <TopContainer>
              <Text fontSize="18px" fontWeight="700" margin="0 0 10px 0">
                Concentration
              </Text>
            </TopContainer>
            <MiddleContainer>
              <ConcetrationContainer margin="15px 0 0 0">
                <Text fontSize="16px" fontWeight="400" margin="0 0 10px 0">
                  Programming Languages
                </Text>
                <CustomMultipleSelect
                  data={programmingLanguages}
                  handleData={handleProgrammingLanguages}
                  options={programmingLanguagesOptions}
                  errors={errors}
                />
                <Line />
              </ConcetrationContainer>
              <ConcetrationContainer margin="10px 0 0 0">
                <Text fontSize="16px" fontWeight="400" margin="0 0 10px 0">
                  Frameworks
                </Text>
                <CustomMultipleSelect
                  data={frameworks}
                  handleData={handleFrameworks}
                  options={frameworksOptions}
                  errors={errors}
                />
                <Line />
              </ConcetrationContainer>
              <ConcetrationContainer margin="10px 0 0 0">
                <Text fontSize="16px" fontWeight="400" margin="0 0 10px 0">
                  Concentration
                </Text>
                <CustomMultipleSelect
                  data={concentration}
                  handleData={handleConcentration}
                  options={concentrationsOptions}
                  errors={errors}
                  multiple={false}
                />
                <Line />
              </ConcetrationContainer>
            </MiddleContainer>
            <BottomContainer>
              <Button>Next</Button>
            </BottomContainer>
          </CardContainer>
        </Container>
      </form>
    </>
  )
}

export default UserConcentration
