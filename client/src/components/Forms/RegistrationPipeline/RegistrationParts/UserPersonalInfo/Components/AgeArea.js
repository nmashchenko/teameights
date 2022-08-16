// * Modules
import React from 'react'
import { includes } from 'lodash'

// * Styles
import { Input, Text } from '../UserPersonalInfo.styles'

const AgeArea = ({ errors, handleAge }) => {
  return (
    <>
      <Text fontSize="17px" fontWeight="400">
        Age
      </Text>
      {includes(errors, 'age') ? (
        <Input onChange={handleAge} border="1px solid #cf625e" />
      ) : (
        <Input onChange={handleAge} animation="none" />
      )}
    </>
  )
}

export default AgeArea
