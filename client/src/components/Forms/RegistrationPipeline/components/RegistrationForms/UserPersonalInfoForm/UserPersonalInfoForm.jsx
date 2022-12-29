import React from 'react'
import { useDispatch } from 'react-redux'
import countryList from 'react-select-country-list'
import { useFormikContext } from 'formik'

import CustomInput from '../../../../../../shared/components/CustomInput/CustomInput'
import {
  GroupContainer,
  SectionContainer,
} from '../../../../../../shared/components/CustomInput/CustomInput.styles'
import CustomSelect from '../../../../../../shared/components/CustomSelect/CustomSelect'
import { Item } from '../../../../../../shared/components/CustomSelect/CustomSelect.styles'
import CustomTextArea from '../../../../../../shared/components/CustomTextArea/CustomTextArea'
import { ButtonsContainer } from '../../../../../../shared/styles/Button.styles'
import { setIsFinishedAvatarLoading } from '../../../../../../store/reducers/RegistrationAuth'
import FormButton from '../../MultiStepRegistration/components/FormButton/FormButton'
import { ResetButton } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import { ContentWrapper } from './UserPersonalInfoForm.styles'

const UserPersonalInfoForm = () => {
  const dispatch = useDispatch()
  const { errors, handleReset } = useFormikContext()

  const reset = () => {
    handleReset()
    dispatch(setIsFinishedAvatarLoading(false))
  }

  return (
    <ContentWrapper>
      <SectionContainer>
        <GroupContainer>
          <CustomInput label="Full Name" name="fullName" type="text" />
        </GroupContainer>
        <GroupContainer>
          <CustomSelect label="Сountry" name="country">
            {countryList()
              .getData()
              .map(({ label }) => (
                <Item key={label} value={label}>
                  {label}
                </Item>
              ))}
          </CustomSelect>
        </GroupContainer>
      </SectionContainer>
      <SectionContainer>
        <GroupContainer>
          <CustomInput label="Username" name="username" type="text" />
        </GroupContainer>
        <GroupContainer>
          <CustomInput label="Age" name="age" type="text" />
        </GroupContainer>
      </SectionContainer>
      <CustomTextArea
        label="About me"
        name="description"
        placeholder="Start typing here..."
        maxLength={200}
      />
      <ButtonsContainer width="100%">
        <ResetButton type="button" onClick={reset}>
          Reset all
        </ResetButton>
        <FormButton errors={errors} />
      </ButtonsContainer>
    </ContentWrapper>
  )
}

export default UserPersonalInfoForm
