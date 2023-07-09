import React, { memo, useState } from 'react'

import Crown from '../../../../assets/Shared/Crowns/Crown'
// * Images
// * Colors
import { languageOptions } from '../../../../constants/programmingLanguages'
import CardSkeleton from '../../../../shared/components/CardSkeleton/CardSkeleton'
import { calculateAge } from '../../../../utils/calculateAge'
import { getCountryFlag } from '../../../../utils/getCountryFlag'
import { HidableWrapper } from '../../Teammates.styles'

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
  FlagIcon,
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
  const [imgLoading, setImgLoading] = useState(true)

  const person = props.person

  const plLength = person.programmingLanguages.length

  const programmingLanguages = (
    <ProgrammingLanguagesContainer>
      {person.programmingLanguages.slice(0, plLength < 2 ? plLength : 2).map((element, i) => {
        let andMore = <></>

        if (i === 1 && plLength > 2) {
          andMore = <AndMore makeWhite={false}>{plLength - 2}+</AndMore>
        }

        if (plLength === 1) {
          return (
            <LanguageContainer key={element} width="100%">
              {languageOptions[element]}
            </LanguageContainer>
          )
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
        {person.isLeader === true && (
          <CrownContainer>
            <Crown />
          </CrownContainer>
        )}
        <UserInformationContainer>
          <HidableWrapper display={imgLoading ? 'block' : 'none'}>
            <CardSkeleton width="70px" height="70px" borderRadius="15px" />
          </HidableWrapper>

          <HidableWrapper display={imgLoading ? 'none' : 'block'}>
            <UserImage src={person.image} alt="User's image" onLoad={() => setImgLoading(false)} />
          </HidableWrapper>
          {programmingLanguages}
        </UserInformationContainer>
        <TextContainer>
          <UserData>
            <CountryContainer>
              <TitleText fontWeight="400" fontSize="16px" margin="0 7px 0 0">
                {person.fullName.split(' ')[0]}, {calculateAge(person.dateOfBirth)}
              </TitleText>
              {getCountryFlag(person.country) && <FlagIcon src={getCountryFlag(person.country)} />}
            </CountryContainer>
            <TitleText fontWeight="400" fontSize="14px" color="#8F9094">
              {person.concentration}
            </TitleText>
          </UserData>
        </TextContainer>
        {frameworksContainer}
      </CardContainer>
    </Wrapper>
  )
})

export default memo(UserCard)
