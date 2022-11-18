// * Modules
import React from 'react'
import { includes } from 'lodash'

// * Styles
import { Input, Text } from '../UserPersonalInfo.styles'

const AgeArea = ({ errors, handleAge, age }) => {
  return (
    <div>
      <Text fontSize="18px" fontWeight="400">
        Age
      </Text>
      {includes(errors, 'age') ? (
        <Input onChange={handleAge} borderColor="#cf625e" value={age} />
      ) : (
        <Input onChange={handleAge} animation="none" value={age} />
      )}
    </div>
  )
}

export default AgeArea
