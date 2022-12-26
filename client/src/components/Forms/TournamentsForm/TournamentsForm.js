// * Modules
import { useNavigate } from 'react-router-dom'

// * Styles
import {
  Content,
  SmallCard,
  SmallCardContainer,
  Text,
  InnerText,
  BigCard,
  Language,
  ButtonGeneral,
} from './TournamentsForm.styles'

// * Assets
import JS from '../../../assets/LanguageLogo/JS'

function TournamentsForm() {
  const navigate = useNavigate()
  return (
      <Content>
        <SmallCard>
          <SmallCardContainer>
            <Text>12/04</Text>
          </SmallCardContainer>
          <SmallCardContainer justify="center" align="start" mr="69px">
            <Text fontSize="22px">Teameights cup #1</Text>
            <Text fontWeight="300">
              <InnerText fontWeight="300" color="#5D9D0B">
                All roles &nbsp;
              </InnerText>
              are welcome!
            </Text>
          </SmallCardContainer>
          <SmallCardContainer fd="row" gap="20px" mr="87px">
            <Language>
              <JS />
            </Language>
            <Language>
              <Text>+3</Text>
            </Language>
          </SmallCardContainer>
          <SmallCardContainer justify="center">
            <ButtonGeneral onClick={() => navigate('/tournament-info', { replace: true })}>
              View
            </ButtonGeneral>
          </SmallCardContainer>
        </SmallCard>
        <BigCard>
          <Text fontSize="18px">No recent tournaments found...</Text>
        </BigCard>
      </Content>
  )
}

export default TournamentsForm
