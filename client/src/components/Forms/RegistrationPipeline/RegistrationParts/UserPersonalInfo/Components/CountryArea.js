// * Modules
import React from 'react'
import CustomSelect from '../../../CustomSelect/CustomSelect'

// * Styles
import { Text } from '../UserPersonalInfo.styles'

const CountryArea = ({ errors, handleCountry, country }) => {
  return (
    <>
      <Text fontSize="17px" fontWeight="400">
        Country
      </Text>
      <CustomSelect country={country} handleCountry={handleCountry} errors={errors} />
    </>
  )
}

export default CountryArea
