import React from 'react'

import CustomInput from '../../../../../../shared/components/CustomInput/CustomInput'
import { MiddleContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

const UserEducationForm = () => {

  return (
      <MiddleContainer alignItems="baseline">
        <CustomInput width="100%" label="University/School" name="university" type="text" />
        <CustomInput width="100%" label="Major" name="major" type="text" />
        <CustomInput width="100%" label="Expected Graduation" name="graduationDate" type="text" />
      </MiddleContainer>
  )
}

export default UserEducationForm
