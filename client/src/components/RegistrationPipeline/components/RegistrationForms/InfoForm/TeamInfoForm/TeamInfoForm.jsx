import React, { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'

import { useGetByTag } from '../../../../../../shared/api/hooks/team/useGetByTag'
import { useDebounce } from '../../../../../../shared/api/hooks/temeights/useDebounce'
import { countries } from '../../../../../../shared/constants/countries'
import { teamTypes } from '../../../../../../shared/constants/teamFormData'
import { usePrompt } from '../../../../../../shared/lib/hooks/usePrompt'
import CustomInput from '../../../../../../shared/ui/Formik/CustomInput/CustomInput'
import {
  GroupContainer,
  SectionContainer,
} from '../../../../../../shared/ui/Formik/CustomInput/CustomInput.styles'
import CustomSelectAutocomplete from '../../../../../../shared/ui/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import CustomTextArea from '../../../../../../shared/ui/Formik/CustomTextArea/CustomTextArea'
import { InputsContainer } from '../InfoForm.styles'

const TeamInfoForm = () => {
  let { mutate: getTeamByTag, data: errorStatus } = useGetByTag()
  const { values, dirty } = useFormikContext()

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

  usePrompt('You have unsaved changes. Do you want to discard them?', dirty, false)

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
              value={values['country']}
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
              value={values['type']}
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
