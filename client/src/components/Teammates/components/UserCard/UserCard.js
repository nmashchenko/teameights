import React from 'react'

// * Images
import CrownImg from '../../../../assets/UserProfile/LeaderCrown.png'
// * Colors
import { languageOptions } from '../../../../constants/programmingLanguages'
import { LOCAL_PATH } from '../../../../http'
import { calculateAge } from '../../../../utils/calculateAge'

import LengthFourCase from './FrameworksCases/LengthFourCase'
import LengthFourSlicedCase from './FrameworksCases/LengthFourSlicedCase'
// * Cases
import LengthOneCase from './FrameworksCases/LengthOneCase'
import LengthThreeCase from './FrameworksCases/LengthThreeCase'
import LengthTwoCase from './FrameworksCases/LengthTwoCase'
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

// PASS IN PROPS TO RESPECTIVE COMPONENT TO RENDER
const UserCard = React.forwardRef((props, ref) => {
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
          <div>
            <UserImage src={LOCAL_PATH + '/' + person.image} alt="User's image" />
          </div>
          {programmingLanguages}
        </UserInformationContainer>
        <TextContainer>
          <UserData>
            <CountryContainer>
              <TitleText fontWeight="500" fontSize="12px" margin="0 7px 0 0">
                {person.fullName}, {calculateAge(person.dateOfBirth)}
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
