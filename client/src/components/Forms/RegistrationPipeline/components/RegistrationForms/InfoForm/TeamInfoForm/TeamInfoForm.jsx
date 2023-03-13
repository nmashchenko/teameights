import React from 'react'
import countryList from 'react-select-country-list'

import CustomInput from '../../../../../../../shared/components/CustomInput/CustomInput'
import {
  GroupContainer,
  SectionContainer,
} from '../../../../../../../shared/components/CustomInput/CustomInput.styles'
import CustomSelect from '../../../../../../../shared/components/CustomSelect/CustomSelect'
import CustomTextArea from '../../../../../../../shared/components/CustomTextArea/CustomTextArea'

const UserInfoForm = () => {
  const countriesOptions = React.useMemo(() => countryList().getData(), [])

  return (
    <>
      <SectionContainer>
        <GroupContainer>
          <CustomInput placeholder="Input name" label="Team name" name="fullName" type="text" />
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
            placeholder="Team tag (optional)"
            label="Input tag"
            name="username"
            type="text"
          />
        </GroupContainer>
        <GroupContainer>
          {/*<CustomSelect label="Team type" name="type" placeholder="Select type"/>*/}
        </GroupContainer>
      </SectionContainer>
      <CustomTextArea
        label="About team (optional)"
        name="description"
        placeholder="Describe your team..."
        maxLength={200}
      />
    </>
  )
}

export default UserInfoForm
