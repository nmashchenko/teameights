import {
  CardContainer,
  UserInformationContainer,
  TextContainer,
  TitleText,
  CountryFlag,
  ProgrammingLanguagesContainer,
  LanguageContainer,
} from './UserCard.styles'

function UserCard(props) {
  return(
    <CardContainer>
      <UserInformationContainer>
        <TextContainer>
          <TitleText>Nikita, 20</TitleText>
          <TitleText fontWeight='600' fontSize='15px' color='white'>Full-Stack dev.</TitleText>
        </TextContainer>
        <CountryFlag countryCode={props.countryCode} svg />
      </UserInformationContainer>
      <ProgrammingLanguagesContainer>
        <LanguageContainer>
          <h3>JS</h3>
        </LanguageContainer>
        <LanguageContainer>
          <h3>C++</h3>
        </LanguageContainer>
        <LanguageContainer>
          <h3>SQL</h3>
        </LanguageContainer>
        <LanguageContainer>
          <h3>C</h3>
        </LanguageContainer>
      </ProgrammingLanguagesContainer>
    </CardContainer>
  )
}

export default UserCard