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
  AndMore,
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
import {LOCAL_PATH} from "../../../../http";
import Photo from "../../../../components/Profile/Photo.jpg";

//programminglanguages  when hovering, change last SVG to +4

// frameworks

// PASS IN PROPS TO RESPECTIVE COMPONENT TO RENDER
const UserCard = React.forwardRef((props, ref = null) => {
  const person = props.person

  const plLength = person.programmingLanguages.length

  const programmingLanguages = (
    <ProgrammingLanguagesContainer>
      {person.programmingLanguages.slice(0, plLength < 2 ? plLength : 2).map((element, i) => {
        let andMore = <></>

        if (i === 1 && plLength > 2) {
          andMore = <AndMore makeWhite={false}>{plLength - 2}+</AndMore>
        }

        return (
          <LanguageContainer key={element}>
            {andMore}
            {languageOptions[element]}
          </LanguageContainer>
        )
      })}
    </ProgrammingLanguagesContainer>
  )

  const ufLength = person.frameworks.length
  const frameworksContainer = (
    <FrameWorksContainer>
      {person.frameworks.length <= 4 ? (
        (() => {
          if (person.frameworks.length === 1) {
            return <LengthOneCase userFrameworks={person.frameworks} />
          } else if (person.frameworks.length === 2) {
            return <LengthTwoCase userFrameworks={person.frameworks} />
          } else if (person.frameworks.length === 3) {
            return <LengthThreeCase userFrameworks={person.frameworks} />
          } else if (person.frameworks.length === 4) {
            return <LengthFourCase userFrameworks={person.frameworks} />
          }
        })()
      ) : (
        <LengthFourSlicedCase userFrameworks={person.frameworks} />
      )}
    </FrameWorksContainer>
  )
  return (
    <Wrapper ref={ref}>
      <CardContainer plLength={plLength > 2} ufLength={ufLength > 4}>
        <UserInformationContainer>
          {/* TODO: Change for real image! */}
          <div>
            <UserImage src={person?.image ? LOCAL_PATH + '/' +  person.image :  userImg} alt="userImg" />
          </div>
          {programmingLanguages}
        </UserInformationContainer>
        <TextContainer>
          <UserData>
            <CountryContainer>
              <TitleText fontWeight="500" fontSize="12px" margin="0 7px 0 0">
                {person.fullName}, {person.age}
              </TitleText>
            </CountryContainer>
            <TitleText fontWeight="600" fontSize="12px">
              {person.concentration}
            </TitleText>
          </UserData>
        </TextContainer>
        {frameworksContainer}
      </CardContainer>
      {person.isLeader === true ? (
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
