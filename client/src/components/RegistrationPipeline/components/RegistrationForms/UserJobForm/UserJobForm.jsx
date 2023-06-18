import React, { useState } from 'react'
import { useFormikContext } from 'formik'

import CustomInput from '../../../../../shared/components/Formik/CustomInput/CustomInput'
import CheckboxWithLabel from '../../CheckboxWithLabel/CheckboxWithLabel'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'
import { GroupItems, InputWrapper } from '../UserEducationForm/UserEducationForm.styles'

const UserJobForm = () => {
  const [checkbox, setCheckbox] = useState(false)
  const { setFieldValue } = useFormikContext()

  const handleClick = () => {
    if (checkbox) {
      setCheckbox(false)
      setFieldValue('endDate', '')
    } else {
      setCheckbox(true)
      setFieldValue('endDate', '0')
    }
  }

  return (
    <ContentContainer>
      <GroupItems>
        <InputWrapper grow="2">
          <CustomInput
            label="Title"
            name="title"
            type="text"
            placeholder="Ex: Software Developer"
          />
        </InputWrapper>
        <InputWrapper width="12rem">
          <CustomInput
            label="From"
            name="startDate"
            type="number"
            placeholder="Input year"
            shouldFormatYear={true}
          />
        </InputWrapper>
      </GroupItems>
      <GroupItems>
        <InputWrapper grow="2">
          <CustomInput label="Company" name="company" type="text" placeholder="Ex: Teameights" />
        </InputWrapper>
        <InputWrapper width="12rem">
          <CustomInput
            label="To"
            name="endDate"
            type="number"
            placeholder="Input year"
            shouldFormatYear={true}
            disabled={checkbox}
            isOptional={checkbox}
          />
        </InputWrapper>
      </GroupItems>
      <CheckboxWithLabel
        label="I am still working here"
        value={checkbox}
        checked={checkbox}
        onChange={handleClick}
      />
    </ContentContainer>
  )
}

export default UserJobForm
