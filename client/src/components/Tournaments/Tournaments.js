// * Modules
import { useNavigate } from 'react-router-dom'

// * Assets
import JS from '../../assets/LanguageLogo/JS'

// * Styles
import {
  BigCard,
  ButtonGeneral,
  Content,
  InnerText,
  Language,
  SmallCard,
  SmallCardContainer,
  Span,
  Text,
} from './Tournaments.styles'

function TournamentsForm() {
  const navigate = useNavigate()

  return (
    <Content>
      <SmallCard>
        <SmallCardContainer>
          <Text>Soon❤️</Text>
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
          <ButtonGeneral disabled>View</ButtonGeneral>
        </SmallCardContainer>
      </SmallCard>
      <BigCard>
        <Text fontSize="24px">
          Tournaments coming in the <Span>next</Span> updates🎉
        </Text>
      </BigCard>
    </Content>
  )
}

export default TournamentsForm
