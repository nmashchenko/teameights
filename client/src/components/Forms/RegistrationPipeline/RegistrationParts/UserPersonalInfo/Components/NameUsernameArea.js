// * Modules
import React from 'react'
import { includes } from 'lodash'

// * Styles
import { Input, Text } from '../UserPersonalInfo.styles'

const NameUsernameArea = ({ userData, errors, handleFunction, nameUsername, name }) => {
  if (nameUsername === 'Username') {
    return (
      <div>
        <Text fontSize="18px" fontWeight="400">
          {nameUsername}
        </Text>
        {userData.userUsername !== '' ? (
          <Input borderColor="#72EB3A" value={name} disabled />
        ) : includes(errors, 'username') ? (
          <Input onChange={handleFunction} borderColor="#cf625e" value={name} />
        ) : (
          <Input onChange={handleFunction} animation="none" value={name} />
        )}
      </div>
    )
  } else {
    return (
      <div>
        <Text fontSize="18px" fontWeight="400">
          {nameUsername}
        </Text>
        {userData.userRealName !== '' ? (
          <Input borderColor="#72EB3A" value={name} disabled />
        ) : includes(errors, 'name') ? (
          <Input onChange={handleFunction} borderColor="#cf625e" value={name} />
        ) : (
          <Input onChange={handleFunction} animation="none" value={name} />
        )}
      </div>
    )
  }
}

export default NameUsernameArea
