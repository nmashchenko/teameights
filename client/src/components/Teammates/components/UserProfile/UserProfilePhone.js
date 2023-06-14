import React, { useState } from 'react'

import LongArrowLeft from '../../../../assets/Arrows/LongArrowLeft'
import LongArrowRight from '../../../../assets/Arrows/LongArrowRight'
// * Assets
import AddUserIcon from '../../../../assets/Shared/AddUserIcon'
import Close from '../../../../assets/Shared/Close'
import Message from '../../../../assets/Shared/Message'
import { frameworkColors, frameworkTextColors } from '../../../../constants/frameworkColors'
import { languageOptions } from '../../../../constants/programmingLanguages'
import { calculateAge } from '../../../../utils/calculateAge'
import { getCountryFlag } from '../../../../utils/getCountryFlag'

import {
  Button,
  CloseContainer,
  FlagIcon,
  FlexWrapper,
  Framework,
  LanguageContainer,
  MobileProfile,
  MobileWrapper,
  Text,
  UserImg,
} from './UserProfile.styles'

const UserProfilePhone = ({ user, mobileProfile, handleClose }) => {
  return (
    <MobileProfile anchor="bottom" open={mobileProfile} onClose={handleClose}>
      <MobileWrapper>
        <FlexWrapper justifyContent="space-between">
          <Button width="73px" background="none" onClick={handleClose}>
            <LongArrowLeft />
            Back
          </Button>
          <Button width="73px" background="none">
            Profile
            <LongArrowRight />
          </Button>
        </FlexWrapper>
        <FlexWrapper gap="24px" flexDirection="column" marginTop="32px">
          <FlexWrapper gap="32px">
            <div>
              <UserImg src={user.image} alt={`${user?.username}'s image`} />
            </div>
            <FlexWrapper flexDirection="column" maxHeight="70px">
              <FlexWrapper gap="8px" alignItems="center" maxHeight="30px">
                <Text fontSize="20px">
                  {user?.fullName?.split(' ')[0]}, {calculateAge(user.dateOfBirth)}
                </Text>
                {getCountryFlag(user.country) && <FlagIcon src={getCountryFlag(user.country)} />}
              </FlexWrapper>
              <Text fontSize="14px" color="#8F9094" fontWeight="400">
                {user.concentration}
              </Text>
              <Text fontSize="14px" color="#8F9094" fontWeight="400">
                {user.experience} years of experience
              </Text>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper justifyContent="space-between">
            <FlexWrapper gap="8px">
              <Button width="100%">
                Invite
                <AddUserIcon />
              </Button>
              <Button width="100%" background="none" border="2px solid #46A11B">
                Message
                <Message />
              </Button>
            </FlexWrapper>
          </FlexWrapper>
          {user?.description && (
            <Text fontSize="16px" fontWeight="400">
              {user.description}
            </Text>
          )}
          <FlexWrapper flexWrap="wrap" gap="8px">
            {user?.frameworks?.map((framework) => (
              <Framework
                key={framework}
                justifyContent="end"
                marginBottom="0"
                background={frameworkColors[framework]}
                color={frameworkTextColors[framework]}
                flexBasis="33.3%"
              >
                <h3>{framework}</h3>
              </Framework>
            ))}
          </FlexWrapper>
          <FlexWrapper flexWrap="wrap" gap="8px">
            {user?.programmingLanguages?.map((language) => (
              <LanguageContainer key={language} width="100%" flexBasis="50%">
                {languageOptions[language]}
              </LanguageContainer>
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </MobileWrapper>
    </MobileProfile>
  )
}

export default UserProfilePhone
