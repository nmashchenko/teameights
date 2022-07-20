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
          <TitleText>{props.person.userRealName}, {props.person.userAge}</TitleText>
          <TitleText fontWeight='600' fontSize='15px' color='white'>{props.person.userConcentration}</TitleText>
        </TextContainer>
        <CountryFlag countryCode={props.countryCode.internet} svg />
        {/* <TextContainer>
          <TitleText>Vasya, 11</TitleText>
          <TitleText fontWeight='600' fontSize='15px' color='white'>Full Stack Developer</TitleText>
        </TextContainer>
        <CountryFlag countryCode='UA' svg /> */}
      </UserInformationContainer>
      <ProgrammingLanguagesContainer>
        {props.person.userProgrammingLanguages.map((element) => (
            <LanguageContainer key={element}>
            <h3>{element}</h3>
          </LanguageContainer>
        ))}
        {/* <LanguageContainer>
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
        </LanguageContainer> */}
      </ProgrammingLanguagesContainer>
    </CardContainer>
  )
}

export default UserCard