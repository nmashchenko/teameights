import React from 'react'

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

const UserCard = React.forwardRef((props, ref = null) => {
  return (
    <Wrapper ref={ref}>
      <CardContainer>
        <UserInformationContainer>
          {/* TODO: Change for real image! */}
          <div>
            <UserImage src={userImg} alt="userImg" />
          </div>
          <ProgrammingLanguagesContainer>
            {props.person.programmingLanguages.length <= 2
              ? props.person.programmingLanguages.map((element) => (
                  <LanguageContainer key={element}>{languageOptions[element]}</LanguageContainer>
                ))
              : props.person.programmingLanguages
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
                {props.person.fullName}, {props.person.age}
              </TitleText>
            </CountryContainer>
            <TitleText fontWeight="600" fontSize="12px">
              {props.person.concentration}
            </TitleText>
          </UserData>
        </TextContainer>
        <FrameWorksContainer>
          {props.person.frameworks.length <= 4 ? (
            (() => {
              if (props.person.frameworks.length === 1) {
                return <LengthOneCase userFrameworks={props.person.frameworks} />
              } else if (props.person.frameworks.length === 2) {
                return <LengthTwoCase userFrameworks={props.person.frameworks} />
              } else if (props.person.frameworks.length === 3) {
                return <LengthThreeCase userFrameworks={props.person.frameworks} />
              } else if (props.person.frameworks.length === 4) {
                return <LengthFourCase userFrameworks={props.person.frameworks} />
              }
            })()
          ) : (
            <LengthFourSlicedCase userFrameworks={props.person.frameworks} />
          )}
        </FrameWorksContainer>
      </CardContainer>
      {props.person.isLeader === true ? (
        <CrownContainer>
          <img src={CrownImg} alt="crown"></img>
        </CrownContainer>
      ) : (
        <div></div>
      )}
    </Wrapper>
  )
})

export default UserCard
