import React, { useState } from 'react'
import { useFormikContext } from 'formik'

import CustomInput from '../../../../../shared/components/Formik/CustomInput/CustomInput'
import CheckboxWithLabel from '../../CheckboxWithLabel/CheckboxWithLabel'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'
import { InputWrapper } from '../UserEducationForm/UserEducationForm.styles'

const UserJobForm = () => {
  const [checkbox, setCheckbox] = useState(false)
  const { setFieldValue, values } = useFormikContext()

  console.log(values)

  const handleClick = () => {
    if (checkbox) {
      setCheckbox(false)
      setFieldValue('jobData[0].endDate', '')
    } else {
      setCheckbox(true)
      setFieldValue('jobData[0].endDate', '0')
    }
  }

  return (
    <ContentContainer>
      <CustomInput
        label="Title"
        name="jobData[0].title"
        type="text"
        placeholder="Ex: Software Developer"
      />
      <CustomInput
        label="Company"
        name="jobData[0].company"
        type="text"
        placeholder="Ex: Teameights"
      />
      <InputWrapper>
        <CustomInput
          label="From"
          name="jobData[0].startDate"
          type="number"
          placeholder="Input year"
          shouldFormatYear={true}
          containerWidth="100%"
        />
        <CustomInput
          label="To"
          name="jobData[0].endDate"
          type="number"
          placeholder="Input year"
          shouldFormatYear={true}
          disabled={checkbox}
          isOptional={checkbox}
          containerWidth="100%"
        />
      </InputWrapper>

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
