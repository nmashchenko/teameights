import React from 'react'
import countryList from 'react-select-country-list'

import CustomInput from '../../../../../../../shared/components/CustomInput/CustomInput'
import {
  GroupContainer,
  SectionContainer,
} from '../../../../../../../shared/components/CustomInput/CustomInput.styles'
import CustomSelect from '../../../../../../../shared/components/CustomSelect/CustomSelect'
import CustomTextArea from '../../../../../../../shared/components/CustomTextArea/CustomTextArea'
import { InputsContainer } from '../InfoForm.styles'

const UserInfoForm = () => {
  const countriesOptions = React.useMemo(() => countryList().getData(), [])

  return (
    <>
      <InputsContainer>
        <SectionContainer>
          <GroupContainer>
            <CustomInput placeholder="Input name" label="Full name" name="fullName" type="text" />
          </GroupContainer>
          <GroupContainer>
            <CustomSelect
              label="Сountry"
              name="country"
              options={countriesOptions}
              placeholder="Select country"
            />
          </GroupContainer>
        </SectionContainer>
        <SectionContainer>
          <GroupContainer>
            <CustomInput
              placeholder="Input username"
              label="Username"
              name="username"
              type="text"
            />
          </GroupContainer>
          <GroupContainer>
            <CustomInput label="Age" name="age" type="text" />
          </GroupContainer>
        </SectionContainer>
      </InputsContainer>
      <CustomTextArea
        style={{ height: 'calc(100% - 5rem)' }}
        label="About me (optional)"
        name="description"
        placeholder="Write something about yourself..."
        maxLength={200}
        margin="0 0 5rem 0"
      />
    </>
  )
}

export default UserInfoForm
