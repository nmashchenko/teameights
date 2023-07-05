import React from 'react'
import { useFormikContext } from 'formik'

import { userConcentrations } from '../../../../../shared/constants/finishRegistrationData'
import CustomSelectAutocomplete from '../../../../../shared/ui/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

const UserConcentrationForm = () => {
  const { values } = useFormikContext()

  return (
    <ContentContainer rows={userConcentrations.length}>
      {userConcentrations.map((concentration) => (
        <CustomSelectAutocomplete
          key={concentration.name}
          multiple={concentration.multiple}
          label={concentration.label}
          name={concentration.name}
          options={concentration.options}
          value={values[concentration.name]}
        />
      ))}
    </ContentContainer>
  )
}

export default UserConcentrationForm
