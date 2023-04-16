import React from 'react'
import countryList from 'react-select-country-list'

import CustomInput from '../../../../../../../shared/components/CustomInput/CustomInput'
import {
  GroupContainer,
  SectionContainer,
} from '../../../../../../../shared/components/CustomInput/CustomInput.styles'
import CustomSelect from '../../../../../../../shared/components/CustomSelect/CustomSelect'
import CustomTextArea from '../../../../../../../shared/components/CustomTextArea/CustomTextArea'
import Stack from "@mui/material/Stack";
import {teamTypes} from "../../../../../../../constants/teamFormData";

const UserInfoForm = () => {
  const countriesOptions = React.useMemo(() => countryList().getData(), [])
  return (
    <>
        <Stack>
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
              <CustomInput
                placeholder="Team tag"
                label="Input tag"
                name="tag"
                type="text"
              />
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
        </Stack>
        <CustomTextArea
            style={{height: 'calc(100% - 5rem)'}}
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
