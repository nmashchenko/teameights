import React, { useEffect, useState } from 'react'
import { Form, useFormikContext } from 'formik'

import { useGetByTag } from '../../../api/hooks/team/useGetByTag'
import { useDebounce } from '../../../api/hooks/temeights/useDebounce'
import { countries } from '../../../constants/countries'
import { teamTypes } from '../../../constants/teamFormData'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../shared/components/Formik/CustomInput/CustomInput'
import CustomSelectAutocomplete from '../../../shared/components/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import CustomTextArea from '../../../shared/components/Formik/CustomTextArea/CustomTextArea'
import Loader from '../../../shared/components/Loader/Loader'

import { FormContainer } from './About.styles'
import RegularAbout from './RegularAbout'

const About = ({ team, isEditing, setIsEditing, handleOpenDelete }) => {
  let { mutate: getTeamByTag, data: errorStatus } = useGetByTag()
  const { values } = useFormikContext()

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

  if (isEditing) {
    return (
      <Form>
        <FormContainer>
          <CustomInput placeholder="Input name" label="Name" name="name" type="text" />
          <CustomInput
            placeholder="Team tag"
            label="Input tag"
            name="tag"
            type="text"
            onInputChange={handleSearchInputChange}
            uniqueError={errorStatus?.data}
            uniqueErrorMessage="TAG already exist"
          />
          <CustomSelectAutocomplete
            label="Сountry"
            name="country"
            options={countries}
            placeholder="Select country"
            value={values['country']}
          />
          <CustomSelectAutocomplete
            label="Team type"
            name="type"
            options={teamTypes}
            placeholder="Select type"
            value={values['type']}
          />
        </FormContainer>
        <FlexWrapper width="100%">
          <CustomTextArea
            style={{ height: '103px' }}
            label="Description"
            name="description"
            placeholder="Describe your team..."
            maxLength={230}
            margin="0 0 5rem 0"
          />
        </FlexWrapper>
      </Form>
    )
  }

  return <RegularAbout team={team} />
}

export default About
