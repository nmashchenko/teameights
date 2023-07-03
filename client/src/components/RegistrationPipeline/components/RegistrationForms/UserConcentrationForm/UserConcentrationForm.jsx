import React from 'react'

import { userConcentrations } from '../../../../../shared/constants/finishRegistrationData'
import CustomSelectAutocomplete from '../../../../../shared/ui/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

const UserConcentrationForm = () => {
  return (
    <ContentContainer rows={userConcentrations.length}>
      {userConcentrations.map((concentration) => (
        <CustomSelectAutocomplete
          key={concentration.name}
          multiple={concentration.multiple}
          label={concentration.label}
          name={concentration.name}
          options={concentration.options}
        />
      ))}
    </ContentContainer>
  )
}

export default UserConcentrationForm
