import React from 'react'
import countryList from 'react-select-country-list'

import { teamTypes } from '../../../../../../../constants/teamFormData'
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
            <CustomInput placeholder="Input name" label="Team name" name="name" type="text" />
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
            <CustomInput placeholder="Team tag" label="Input tag" name="tag" type="text" />
          </GroupContainer>
          <GroupContainer>
            <CustomSelect
              label="Team type"
              name="type"
              options={teamTypes}
              placeholder="Select type"
            />
          </GroupContainer>
        </SectionContainer>
      </InputsContainer>
      <CustomTextArea
        style={{ height: 'calc(100% - 5rem)' }}
        label="About team (optional)"
        name="description"
        placeholder="Describe your team..."
        maxLength={200}
        margin="0 0 5rem 0"
      />
    </>
  )
}

export default UserInfoForm
