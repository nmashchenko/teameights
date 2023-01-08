import React from 'react'
import { useFormikContext } from 'formik'

import concentrationOptions from '../../../../../../constants/concentrations'
import frameworkOptions from '../../../../../../constants/frameworks'
import programmingLanguageOptions from '../../../../../../constants/programmingLanguages'
import SelectValue from '../../../../../../shared/components/CustomSelect/components/SelectValue'
import CustomSelect from '../../../../../../shared/components/CustomSelect/CustomSelect'
import { Item } from '../../../../../../shared/components/CustomSelect/CustomSelect.styles'
import { ButtonContainer } from '../../../../../../shared/styles/Button.styles'
import FormButton from '../../MultiStepRegistration/components/FormButton/FormButton'

import { ContentContainer } from './UserConcentrationForm.styles'

const UserConcentrationForm = () => {
  const { errors } = useFormikContext()

  return (
    <ContentContainer>
      <CustomSelect
        multiple={true}
        label="Programming Languages"
        name="programmingLanguages"
        renderValue={(selected) => <SelectValue selected={selected} max={3} />}
        options={programmingLanguageOptions}
        width="22rem"
      />
      <CustomSelect
        multiple={true}
        label="Frameworks"
        name="frameworks"
        options={frameworkOptions}
        renderValue={(selected) => <SelectValue selected={selected}  max={3}/>}
        width="22rem"
      />
      <CustomSelect
        label="Concentration"
        name="concentration"
        renderValue={(selected) => <SelectValue selected={selected}  max={3}/>}
        options={concentrationOptions}
        width="22rem"
      />
      <ButtonContainer>
        <FormButton errors={errors} />
      </ButtonContainer>
    </ContentContainer>
  )
}

export default UserConcentrationForm
