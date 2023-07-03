import React, { useEffect, useState } from 'react'
import countryList from 'react-select-country-list'
import { useFormikContext } from 'formik'

import { useDebounce } from '../../../../../../api/hooks/temeights/useDebounce'
import { useValidateUsername } from '../../../../../../api/hooks/user/useValidateUsername'
import { countries } from '../../../../../../constants/countries'
import { useGetScreenWidth } from '../../../../../../hooks/useGetScreenWidth'
import { usePrompt } from '../../../../../../hooks/usePrompt'
import CustomInput from '../../../../../../shared/components/Formik/CustomInput/CustomInput'
import {
  GroupContainer,
  SectionContainer,
} from '../../../../../../shared/components/Formik/CustomInput/CustomInput.styles'
import CustomSelectAutocomplete from '../../../../../../shared/components/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import CustomTextArea from '../../../../../../shared/components/Formik/CustomTextArea/CustomTextArea'
import { InputsContainer } from '../InfoForm.styles'

const UserInfoForm = () => {
  let { mutate: validateUsername, data: errorStatus } = useValidateUsername()
  const { values, dirty } = useFormikContext()
  const width = useGetScreenWidth()

  // State and setters for ...
  // Search term
  const [searchTerm, setSearchTerm] = useState('')

  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false)
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        validateUsername(debouncedSearchTerm)
      } else {
        // setResults([])
        setIsSearching(false)
      }
    },
    [debouncedSearchTerm], // Only call effect if debounced search term changes
  )

  const handleSearchInputChange = (value) => {
    setSearchTerm(value) // Update the search term state with the input value
  }

  // prevent updating/etc when user has data
  usePrompt('You have unsaved changes. Do you want to discard them?', dirty, true)

  return (
    <>
      <InputsContainer>
        <SectionContainer>
          <GroupContainer>
            <CustomInput placeholder="Input name" label="Full name" name="fullName" type="text" />
          </GroupContainer>
          <GroupContainer>
            <CustomSelectAutocomplete
              label="Сountry"
              name="country"
              options={countries}
              placeholder="Select country"
              value={values['country']}
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
              onInputChange={handleSearchInputChange}
              uniqueError={errorStatus?.data}
              uniqueErrorMessage="Username is already taken"
            />
          </GroupContainer>
          <GroupContainer>
            <CustomInput
              shouldFormatDate={true}
              label="Birthday"
              name="dateOfBirth"
              type="text"
              placeholder="DD/MM/YYYY"
            />
          </GroupContainer>
        </SectionContainer>
      </InputsContainer>
      <CustomTextArea
        style={{ height: width > 768 ? 'calc(100% - 5rem)' : '38px' }}
        label="About me (optional)"
        name="description"
        placeholder={width > 468 ? 'Write something about yourself...' : 'Write about you...'}
        maxLength={230}
        margin={width > 768 ? '0 0 5rem 0' : 0}
      />
    </>
  )
}

export default UserInfoForm
