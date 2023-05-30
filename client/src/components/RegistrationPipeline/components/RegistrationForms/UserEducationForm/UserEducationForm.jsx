import React, { useState } from 'react'
import { useFormikContext } from 'formik'

import CustomInput from '../../../../../shared/components/CustomInput/CustomInput'
import CheckboxWithLabel from '../../CheckboxWithLabel/CheckboxWithLabel'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import { GroupItems, InputWrapper } from './UserEducationForm.styles'

const UserEducationForm = () => {
  const [checkbox, setCheckbox] = useState(false)
  const { setFieldValue } = useFormikContext()

  const handleClick = () => {
    if (checkbox) {
      setCheckbox(false)
      setFieldValue('graduationDate', '')
    } else {
      setCheckbox(true)
      setFieldValue('graduationDate', '0')
    }
  }

  return (
    <ContentContainer>
      <GroupItems>
        <InputWrapper grow="2">
          <CustomInput
            label="Degree"
            name="degree"
            type="text"
            placeholder="Ex: Bachelor’s degree"
          />
        </InputWrapper>
        <InputWrapper width="12rem">
          <CustomInput
            label="From"
            name="addmissionDate"
            type="number"
            placeholder="Input year"
            shouldFormatYear={true}
          />
        </InputWrapper>
      </GroupItems>
      <GroupItems>
        <InputWrapper grow="2">
          <CustomInput label="Major" name="major" type="text" placeholder="Ex: Computer Science" />
        </InputWrapper>
        <InputWrapper width="12rem">
          <CustomInput
            label="To"
            name="graduationDate"
            type="number"
            placeholder="Input year"
            shouldFormatYear={true}
            disabled={checkbox}
            isOptional={checkbox}
          />
        </InputWrapper>
      </GroupItems>
      <CustomInput
        label="University/School"
        name="university"
        type="text"
        placeholder="Ex: Northwestern University"
      />
      <CheckboxWithLabel
        label="I am still studying here"
        value={checkbox}
        checked={checkbox}
        onChange={handleClick}
      />
    </ContentContainer>
  )
}

export default UserEducationForm
