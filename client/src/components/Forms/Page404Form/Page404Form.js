// * Modules
import { useNavigate } from 'react-router-dom'

import LongArrowLeft from '../../../assets/Arrows/LongArrowLeft'
// * Assets
import Page404 from '../../../assets/Shared/SearchingPeople'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper'

// * Styles
import { Button, Container, Text } from './Page404Form.styles'
import { ParticlesContainer } from './ParticlesContainer'

const Page404Form = ({
  paddingLeft = '0',
  findText = `Please check the URL or contact us for assistance`,
}) => {
  const navigate = useNavigate()

  return (
    <>
      <Container paddingLeft={paddingLeft}>
        <FlexWrapper maxWidth="570px" width="100%" padding="0 24px">
          <Page404 />
        </FlexWrapper>
        <FlexWrapper direction="column" justify="center" align="center" gap="24px">
          <FlexWrapper direction="column" justify="center" align="center" gap="8px">
            <Text>Oops... it looks like you're lost.</Text>
            <Text fontWeight="400" fontSize="1rem">
              {findText}
            </Text>
          </FlexWrapper>

          <Button onClick={() => navigate('/', { replace: true })}>
            <LongArrowLeft />
            Return Home
          </Button>
        </FlexWrapper>
      </Container>
      <ParticlesContainer />
    </>
  )
}

export default Page404Form
