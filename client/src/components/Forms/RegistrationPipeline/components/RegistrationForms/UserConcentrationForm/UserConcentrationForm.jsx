import React from 'react'

import concentrationOptions from '../../../../../../constants/concentrations'
import frameworkOptions from '../../../../../../constants/frameworks'
import programmingLanguageOptions from '../../../../../../constants/programmingLanguages'
import SelectValue from '../../../../../../shared/components/CustomSelect/components/SelectValue'
import CustomSelect from '../../../../../../shared/components/CustomSelect/CustomSelect'


import { ContentContainer } from './UserConcentrationForm.styles'

const UserConcentrationForm = () => {

  return (
    <ContentContainer>
      <CustomSelect
        multiple={true}
        label="Programming Languages"
        name="programmingLanguages"
        renderValue={(selected) => <SelectValue selected={selected} max={3} />}
        options={programmingLanguageOptions}
        width="100%"
      />
      <CustomSelect
        multiple={true}
        label="Frameworks"
        name="frameworks"
        options={frameworkOptions}
        renderValue={(selected) => <SelectValue selected={selected} max={3} />}
        width="100%"
      />
      <CustomSelect
        label="Concentration"
        name="concentration"
        renderValue={(selected) => <SelectValue selected={selected} max={3} />}
        options={concentrationOptions}
        width="100%"
      />
    </ContentContainer>
  )
}

export default UserConcentrationForm
