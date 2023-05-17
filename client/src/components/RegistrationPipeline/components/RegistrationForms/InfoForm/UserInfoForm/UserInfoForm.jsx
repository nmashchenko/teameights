import React, { useEffect, useState } from 'react'
import countryList from 'react-select-country-list'

import { useValidateUsername } from '../../../../../../api/hooks/auth/useValidateUsername'
import { useDebounce } from '../../../../../../api/hooks/temeights/useDebounce'
import CustomInput from '../../../../../../shared/components/CustomInput/CustomInput'
import {
  GroupContainer,
  SectionContainer,
} from '../../../../../../shared/components/CustomInput/CustomInput.styles'
import CustomSelect from '../../../../../../shared/components/CustomSelect/CustomSelect'
import CustomTextArea from '../../../../../../shared/components/CustomTextArea/CustomTextArea'
import CustomDatePicker from '../../../DatePicker/DatePicker'
import { InputsContainer } from '../InfoForm.styles'

const UserInfoForm = () => {
  const countriesOptions = React.useMemo(() => countryList().getData(), [])

  let { mutate: validateUsername, data: errorStatus } = useValidateUsername()

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
              onInputChange={handleSearchInputChange}
              uniqueError={errorStatus?.data}
              uniqueErrorMessage="Username is already taken"
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
