import React from 'react'

import CustomInput from '../../../../../shared/components/CustomInput/CustomInput'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

const UserEducationForm = () => {
  return (
    <ContentContainer rows={3}>
      <CustomInput label="University/School" name="university" type="text" />
      <CustomInput label="Major" name="major" type="text" />
      <CustomInput label="Expected Graduation" name="graduationDate" type="text" />
    </ContentContainer>
  )
}

export default UserEducationForm
