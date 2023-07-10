// * Assets

// * Styles
import SearchingPeople from '../../../../assets/Shared/SearchingPeople'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'

import { Container, NonFoundContainer, Text } from './NotFound.styles'

const NotFound = () => {
  return (
    <Container>
      <NonFoundContainer>
        <SearchingPeople />
      </NonFoundContainer>
      <FlexWrapper direction="column" gap="8px">
        <Text>{`No results found :(`}</Text>
        <Text fontWeight="400" fontSize="16px">
          We can’t find any item matching your search
        </Text>
      </FlexWrapper>
    </Container>
  )
}

export default NotFound
