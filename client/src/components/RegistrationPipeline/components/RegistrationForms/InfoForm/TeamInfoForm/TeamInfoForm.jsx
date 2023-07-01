import React, { useEffect, useState } from 'react'

import { useGetByTag } from '../../../../../../api/hooks/team/useGetByTag'
import { useDebounce } from '../../../../../../api/hooks/temeights/useDebounce'
import { countries } from '../../../../../../constants/countries'
import { teamTypes } from '../../../../../../constants/teamFormData'
import CustomInput from '../../../../../../shared/components/Formik/CustomInput/CustomInput'
import {
  GroupContainer,
  SectionContainer,
} from '../../../../../../shared/components/Formik/CustomInput/CustomInput.styles'
import CustomSelectAutocomplete from '../../../../../../shared/components/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import CustomTextArea from '../../../../../../shared/components/Formik/CustomTextArea/CustomTextArea'
import { InputsContainer } from '../InfoForm.styles'

const TeamInfoForm = () => {
  let { mutate: getTeamByTag, data: errorStatus } = useGetByTag()

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
        getTeamByTag(debouncedSearchTerm)
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
            <CustomInput placeholder="Input name" label="Team name" name="name" type="text" />
          </GroupContainer>
          <GroupContainer>
            <CustomSelectAutocomplete
              label="Сountry"
              name="country"
              options={countries}
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
              onInputChange={handleSearchInputChange}
              uniqueError={errorStatus?.data}
              uniqueErrorMessage="TAG already exist"
            />
          </GroupContainer>
          <GroupContainer>
            <CustomSelectAutocomplete
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

export default TeamInfoForm
