import isEqual from "lodash/isEqual";
import CrownImg from "../../img/CrownTest.png";
import userImg from "../../img/tempImg.jpg";
import Country from "../../img/Country.svg";
import FrameworkColors from "./FrameworkColors";

import {
  Wrapper,
  CardContainer,
  UserInformationContainer,
  UserImage,
  FrameWorksContainer,
  Framework,
  UserData,
  TextContainer,
  CountryContainer,
  TitleText,
  ProgrammingLanguagesContainer,
  LanguageContainer,
  CrownContainer,
} from "./UserCard.styles";

function UserCard(props) {
  return (
    <Wrapper>
      <CardContainer>
        <UserInformationContainer>
          <div>
            <UserImage src={userImg} alt="userImg" />
          </div>
          <ProgrammingLanguagesContainer>
            {props.person.userProgrammingLanguages.length <= 2
              ? props.person.userProgrammingLanguages.map((element, index) => (
                  <LanguageContainer key={element}>
                    {isEqual(element, "HTML/CSS") ? (
                      <TitleText fontSize="12px">HTML</TitleText>
                    ) : (
                      <TitleText fontSize="12px">{element}</TitleText>
                    )}
                  </LanguageContainer>
                ))
              : props.person.userProgrammingLanguages
                  .slice(0, 2)
                  .map((element, index) => (
                    <LanguageContainer key={element}>
                      {isEqual(element, "HTML/CSS") ? (
                        <TitleText fontSize="12px">HTML</TitleText>
                      ) : (
                        <TitleText fontSize="12px">{element}</TitleText>
                      )}
                    </LanguageContainer>
                  ))}
          </ProgrammingLanguagesContainer>
        </UserInformationContainer>
        <TextContainer>
          <UserData>
            <CountryContainer>
              <TitleText fontWeight="500" fontSize="12px" margin="0 7px 0 0">
                {props.person.userRealName}, {props.person.userAge}
              </TitleText>
              <img src={Country} alt="Country"></img>
            </CountryContainer>
            <TitleText fontWeight="600" fontSize="12px">
              {props.person.userConcentration}
            </TitleText>
          </UserData>
        </TextContainer>
        {/*
          if length === 1: justify 1 block in center 
          if length === 2: set width to 100% for all
          if length === 3: margin-right: 10px for index 0 
          if length === 4: margin-right: 10px for index 0,2
        */}
        <FrameWorksContainer>
          {props.person.userFrameworks.length <= 4
            ? (() => {
                if (props.person.userFrameworks.length === 1) {
                  return props.person.userFrameworks.map((element) => (
                    <Framework
                      key={element}
                      justifyContent="center"
                      marginBottom="0"
                      background={FrameworkColors[element]}
                    >
                      <h3>{element}</h3>
                    </Framework>
                  ));
                } else if (props.person.userFrameworks.length === 2) {
                  return props.person.userFrameworks.map((element) => (
                    <Framework
                      key={element}
                      width="100%"
                      background={FrameworkColors[element]}
                    >
                      <h3>{element}</h3>
                    </Framework>
                  ));
                } else if (props.person.userFrameworks.length === 3) {
                  return props.person.userFrameworks.map((element, index) =>
                    index === 0 ? (
                      <Framework
                        key={element}
                        marginRight="12px"
                        background={FrameworkColors[element]}
                      >
                        <h3>{element}</h3>
                      </Framework>
                    ) : (
                      <Framework
                        key={element}
                        background={FrameworkColors[element]}
                      >
                        <h3>{element}</h3>
                      </Framework>
                    )
                  );
                } else if (props.person.userFrameworks.length === 4) {
                  return props.person.userFrameworks.map((element, index) =>
                    index % 2 === 0 ? (
                      <Framework
                        key={element}
                        marginRight="12px"
                        background={FrameworkColors[element]}
                      >
                        <h3>{element}</h3>
                      </Framework>
                    ) : (
                      <Framework
                        key={element}
                        background={FrameworkColors[element]}
                      >
                        <h3>{element}</h3>
                      </Framework>
                    )
                  );
                }
              })()
            : props.person.userFrameworks.slice(0, 4).map((element, index) =>
                index % 2 === 0 ? (
                  <Framework
                    key={element}
                    marginRight="12px"
                    background={FrameworkColors[element]}
                  >
                    <h3>{element}</h3>
                  </Framework>
                ) : (
                  <Framework
                    key={element}
                    background={FrameworkColors[element]}
                  >
                    <h3>{element}</h3>
                  </Framework>
                )
              )}
        </FrameWorksContainer>
      </CardContainer>
      {props.person.userLeader === true ? (
        <CrownContainer>
          <img src={CrownImg} alt="crown"></img>
        </CrownContainer>
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
}

export default UserCard;
