import isEqual from "lodash/isEqual";
import CrownImg from "../../img/Crown.svg";

import {
  Wrapper,
  CardContainer,
  UserInformationContainer,
  TextContainer,
  TitleText,
  CountryFlag,
  ProgrammingLanguagesContainer,
  LanguageContainer,
  CrownContainer,
} from "./UserCard.styles";

function UserCard(props) {
  return (
    <Wrapper>
      <CardContainer
        backgroundColor={props.backgroundColor}
        backgroundImage={props.backgroundImage}
      >
        <UserInformationContainer>
          <TextContainer>
            <TitleText fontWeight="500" fontSize="14px" color={props.textColor}>
              {props.person.userRealName}, {props.person.userAge}
            </TitleText>
            <TitleText fontWeight="600" fontSize="15px" color={props.textColor}>
              {props.person.userConcentration}
            </TitleText>
          </TextContainer>
          <CountryFlag countryCode={props.countryCode.internet} svg />
        </UserInformationContainer>
        <ProgrammingLanguagesContainer>
          {props.person.userProgrammingLanguages.length <= 4
            ? props.person.userProgrammingLanguages.map((element) => (
                <LanguageContainer
                  key={element}
                  languageContainerColor={props.languageContainerColor}
                >
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
                  <LanguageContainer
                    key={element}
                    languageContainerColor={props.languageContainerColor}
                  >
                    {isEqual(element, "HTML/CSS") ? (
                      <h3>HTML</h3>
                    ) : (
                      <h3>{element}</h3>
                    )}
                  </LanguageContainer>
                ))}
        </ProgrammingLanguagesContainer>
      </CardContainer>
      {props.person.userLeader === true ? (
        <CrownContainer>
          <img src={CrownImg} alt="crown" style={{ marginBottom: "6px" }}></img>
        </CrownContainer>
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
}

export default UserCard;
