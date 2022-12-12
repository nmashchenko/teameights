// * Images
import CrownImg from '../../img/CrownTest.png'
import userImg from '../../img/tempImg.jpg'

import LengthFourCase from './FrameworksCases/LengthFourCase'
import LengthFourSlicedCase from './FrameworksCases/LengthFourSlicedCase'
// * Cases
import LengthOneCase from './FrameworksCases/LengthOneCase'
import LengthThreeCase from './FrameworksCases/LengthThreeCase'
import LengthTwoCase from './FrameworksCases/LengthTwoCase'
// * Colors
import languageOptions from './ProgrammingLanguages'
// * Styles
import {
  CardContainer,
  CountryContainer,
  CrownContainer,
  FrameWorksContainer,
  LanguageContainer,
  ProgrammingLanguagesContainer,
  TextContainer,
  TitleText,
  UserData,
  UserImage,
  UserInformationContainer,
  Wrapper,
} from './UserCard.styles'

function UserCard(props) {
  return (
    <Wrapper>
      <CardContainer>
        <UserInformationContainer>
          {/* TODO: Change for real image! */}
          <div>
            <UserImage src={userImg} alt="userImg" />
          </div>
          <ProgrammingLanguagesContainer>
            {props.person.userProgrammingLanguages.length <= 2
              ? props.person.userProgrammingLanguages.map((element) => (
                  <LanguageContainer key={element}>{languageOptions[element]}</LanguageContainer>
                ))
              : props.person.userProgrammingLanguages
                  .slice(0, 2)
                  .map((element) => (
                    <LanguageContainer key={element}>{languageOptions[element]}</LanguageContainer>
                  ))}
          </ProgrammingLanguagesContainer>
        </UserInformationContainer>
        <TextContainer>
          <UserData>
            <CountryContainer>
              <TitleText fontWeight="500" fontSize="12px" margin="0 7px 0 0">
                {props.person.userRealName}, {props.person.userAge}
              </TitleText>
            </CountryContainer>
            <TitleText fontWeight="600" fontSize="12px">
              {props.person.userConcentration}
            </TitleText>
          </UserData>
        </TextContainer>
        <FrameWorksContainer>
          {props.person.userFrameworks.length <= 4 ? (
            (() => {
              if (props.person.userFrameworks.length === 1) {
                return <LengthOneCase userFrameworks={props.person.userFrameworks} />
              } else if (props.person.userFrameworks.length === 2) {
                return <LengthTwoCase userFrameworks={props.person.userFrameworks} />
              } else if (props.person.userFrameworks.length === 3) {
                return <LengthThreeCase userFrameworks={props.person.userFrameworks} />
              } else if (props.person.userFrameworks.length === 4) {
                return <LengthFourCase userFrameworks={props.person.userFrameworks} />
              }
            })()
          ) : (
            <LengthFourSlicedCase userFrameworks={props.person.userFrameworks} />
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
  )
}

export default UserCard
