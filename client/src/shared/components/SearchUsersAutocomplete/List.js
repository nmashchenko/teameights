import { useState } from 'react'
import { Grid } from '@mui/material'

import CardSkeleton from '../CardSkeleton/CardSkeleton'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import { HidableWrapper } from '../Modal/Modal.styles'

import { UserImg, UsernameText } from './SearchUsersAutocomplete.styles'

export const List = ({ props, option }) => {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <li {...props} key={option.username}>
      <FlexWrapper gap="8px" maxHeight="30px" justify="center" align="center">
        <HidableWrapper display={imgLoading ? 'block' : 'none'}>
          <CardSkeleton width="30px" parentMaxWidth="30px" height="30px" borderRadius="50%" />
        </HidableWrapper>
        <HidableWrapper display={imgLoading ? 'none' : 'block'}>
          <UserImg src={option.image} alt="User's image" onLoad={() => setImgLoading(false)} />
        </HidableWrapper>
        <UsernameText>{option.username}</UsernameText>
      </FlexWrapper>
    </li>
  )
}
