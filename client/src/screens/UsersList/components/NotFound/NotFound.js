import React from 'react'
import NonFound from '../../../../assets/NonFound'
import { Container, InfoContainer, Text } from './NotFound.styles'

const NotFound = () => {
  return (
    <Container>
      <Text>No results found for your filters!</Text>
      <NonFound />
    </Container>
  )
}

export default NotFound
