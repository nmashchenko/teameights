import isEqual from "lodash/isEqual";

import {
  CardContainer,
  UserInformationContainer,
  TextContainer,
  TitleText,
  CountryFlag,
  ProgrammingLanguagesContainer,
  LanguageContainer,
} from "./UserCard.styles";

function UserCard(props) {
  return (
    <CardContainer>
      <UserInformationContainer>
        <TextContainer>
          <TitleText>
            {props.person.userRealName}, {props.person.userAge}
          </TitleText>
          <TitleText fontWeight="600" fontSize="15px" color="white">
            {props.person.userConcentration}
          </TitleText>
        </TextContainer>
        <CountryFlag countryCode={props.countryCode.internet} svg />
      </UserInformationContainer>
      <ProgrammingLanguagesContainer>
        {props.person.userProgrammingLanguages.length <= 4
          ? props.person.userProgrammingLanguages.map((element) => (
              <LanguageContainer key={element}>
                {isEqual(element, "HTML/CSS") ? (
                  <h3>HTML</h3>
                ) : (
                  <h3>{element}</h3>
                )}
              </LanguageContainer>
            ))
          : props.person.userProgrammingLanguages
              .slice(0, 4)
              .map((element) => (
                <LanguageContainer key={element}>
                  {isEqual(element, "HTML/CSS") ? (
                    <h3>HTML</h3>
                  ) : (
                    <h3>{element}</h3>
                  )}
                </LanguageContainer>
              ))}
      </ProgrammingLanguagesContainer>
    </CardContainer>
  );
}

export default UserCard;
