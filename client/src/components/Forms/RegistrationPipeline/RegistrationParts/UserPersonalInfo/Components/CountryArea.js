// * Modules
import React from 'react'
import CustomSelect from '../../../CustomSelect/CustomSelect'

// * Styles
import { Text } from '../UserPersonalInfo.styles'

const CountryArea = ({ errors, handleCountry, country }) => {
  return (
    <div>
      <Text fontSize="18px" fontWeight="400">
        Country
      </Text>
      <CustomSelect country={country} handleCountry={handleCountry} errors={errors} />
    </div>
  )
}

export default CountryArea
