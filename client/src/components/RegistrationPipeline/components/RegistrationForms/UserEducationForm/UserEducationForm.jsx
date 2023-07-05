import React, { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'

import { degrees } from '../../../../../constants/degrees'
import { majors } from '../../../../../constants/majors'
import CheckboxWithLabel from '../../../../../shared/components/CheckboxWithLabel/CheckboxWithLabel'
import CustomInput from '../../../../../shared/components/Formik/CustomInput/CustomInput'
import CustomSelectAutocomplete from '../../../../../shared/components/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import { GroupItems, InputWrapper } from './UserEducationForm.styles'

const UserEducationForm = () => {
  const [checkbox, setCheckbox] = useState(false)
  const { setFieldValue, values } = useFormikContext()

  useEffect(() => {
    values && values.universityData[0].graduationDate === '0'
      ? setCheckbox(true)
      : setCheckbox(false)
  }, [])

  const handleClick = () => {
    if (checkbox) {
      setCheckbox(false)
      setFieldValue('universityData[0].graduationDate', '')
    } else {
      setCheckbox(true)
      setFieldValue('universityData[0].graduationDate', '0')
    }
  }

  return (
    <ContentContainer>
      <CustomSelectAutocomplete
        label="Degree"
        name="universityData[0].degree"
        placeholder="Ex: Bachelor’s degree"
        options={degrees}
        value={values['universityData'][0].degree}
      />
      <CustomSelectAutocomplete
        label="Major"
        name="universityData[0].major"
        placeholder="Ex: Computer Science"
        options={majors}
        value={values['universityData'][0].major}
      />
      <CustomInput
        label="University/School"
        name="universityData[0].university"
        type="text"
        placeholder="Ex: Northwestern University"
      />
      <InputWrapper>
        <CustomInput
          label="From"
          name="universityData[0].addmissionDate"
          type="number"
          placeholder="Input year"
          shouldFormatYear={true}
          containerWidth="100%"
        />
        {values && values.universityData[0].graduationDate !== '0' && (
          <CustomInput
            label="To"
            name="universityData[0].graduationDate"
            type="number"
            placeholder="Input year"
            shouldFormatYear={true}
            disabled={checkbox}
            isOptional={checkbox}
            containerWidth="100%"
          />
        )}
      </InputWrapper>
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
