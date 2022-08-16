// * Modules
import React from 'react'
import { isEqual, includes } from 'lodash'

// * Styles
import { Input, Text } from '../UserPersonalInfo.styles'

const NameUsernameArea = ({ userData, errors, handleUsername, handleName }) => {
  return (
    <>
      <Text fontSize="17px" fontWeight="400">
        {isEqual(userData.userUsername, '') ? 'Username' : 'Full Name'}
      </Text>
      {isEqual(userData.userUsername, '') ? (
        includes(errors, 'username') ? (
          <Input onChange={handleUsername} border="1px solid #cf625e" />
        ) : (
          <Input onChange={handleUsername} animation="none" />
        )
      ) : includes(errors, 'name') ? (
        <Input onChange={handleName} border="1px solid #cf625e" />
      ) : (
        <Input onChange={handleName} animation="none" />
      )}
    </>
  )
}

export default NameUsernameArea
