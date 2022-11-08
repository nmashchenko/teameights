import React, { useEffect } from 'react'
import InitialPart from './RegistrationParts/InitialPart/InitialPart'
import UserConcentration from './RegistrationParts/UserConcentration/UserConcentration'
import UserExperience from './RegistrationParts/UserExperience/UserExperience'
import Links from './RegistrationParts/LinksPart/Links'
import UserPersonalInfo from './RegistrationParts/UserPersonalInfo/UserPersonalInfo'
import { SnackbarProvider } from 'notistack'
import { styled } from '@mui/material'

// * Redux
import { useSelector } from 'react-redux'

function FinishRegistration() {
  const { active } = useSelector((state) => state.registrationReducer)

  const SnackbarStyled = styled(SnackbarProvider)`
    &.SnackbarItem-contentRoot {
      background-color: #cf625e;
    }
  `

  useEffect(() => {}, [active])

  return (
    <SnackbarStyled
      maxSnack={4}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      variant="error"
    >
      {active === 'InitialPart' && <InitialPart />}
      {active === 'UserPersonalInfo' && <UserPersonalInfo />}
      {active === 'UserConcentration' && <UserConcentration />}
      {active === 'UserExperience' && <UserExperience />}
      {active === 'Links' && <Links />}
    </SnackbarStyled>
  )
}

export default FinishRegistration
