import React from 'react'

import { userConcentrations } from '../../../../../../constants/finishRegistrationData'
import SelectValue from '../../../../../../shared/components/CustomSelect/components/SelectValue'
import CustomSelect from '../../../../../../shared/components/CustomSelect/CustomSelect'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

const UserConcentrationForm = () => {
  return (
    <ContentContainer rows={userConcentrations.length}>
      {userConcentrations.map((concentration) => (
        <CustomSelect
          key={concentration.name}
          multiple={concentration.multiple}
          label={concentration.label}
          name={concentration.name}
          renderValue={(selected) => <SelectValue selected={selected} max={3} />}
          options={concentration.options}
        />
      ))}
    </ContentContainer>
  )
}

export default UserConcentrationForm
