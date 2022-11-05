// * Modules
import React from 'react'
import { isEqual, includes } from 'lodash'

// * Styles
import { Input, Text } from '../UserPersonalInfo.styles'

const NameUsernameArea = ({ userData, errors, handleUsername, handleName }) => {
  return (
    <div>
      <Text fontSize="18px" fontWeight="400">
        Full Name
      </Text>
      {includes(errors, 'name') ? (
        <Input onChange={handleUsername} border="1px solid #cf625e" />
      ) : (
        <Input onChange={handleUsername} animation="none" />
      )}
    </div>
  )
}

export default NameUsernameArea
