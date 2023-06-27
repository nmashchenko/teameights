// * Modules
import React, { forwardRef, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import LongArrowRight from '../../../../assets/Arrows/LongArrowRight'
import AddUserIcon from '../../../../assets/Shared/AddUserIcon'
import Close from '../../../../assets/Shared/Close'
import Message from '../../../../assets/Shared/Message'
import { frameworkColors, frameworkTextColors } from '../../../../constants/frameworkColors'
import { languageOptions } from '../../../../constants/programmingLanguages'
// * Assets
import { calculateAge } from '../../../../utils/calculateAge'
import { getCountryFlag } from '../../../../utils/getCountryFlag'

import {
  Button,
  CloseContainer,
  Container,
  FlagIcon,
  FlexWrapper,
  Framework,
  LanguageContainer,
  ProfileContainer,
  Text,
  UserImg,
} from './UserProfile.styles'

const UserProfile = ({ user, handleClose }, ref) => {
  const navigate = useNavigate()

  return (
    <Container>
      <ProfileContainer>
        <CloseContainer onClick={handleClose}>
          <Close />
        </CloseContainer>
        <FlexWrapper gap="24px" flexDirection="column">
          <FlexWrapper gap="32px">
            <div>
              <UserImg src={user?.image} alt={`${user?.username}'s image`} />
            </div>
            <FlexWrapper flexDirection="column" maxHeight="70px">
              <FlexWrapper gap="8px" alignItems="center" maxHeight="30px">
                <Text fontSize="20px">
                  {user?.fullName?.split(' ')[0]}, {calculateAge(user?.dateOfBirth)}
                </Text>
                {getCountryFlag(user.country) && <FlagIcon src={getCountryFlag(user.country)} />}
              </FlexWrapper>
              <Text fontSize="14px" color="#8F9094" fontWeight="400">
                {user?.concentration}
              </Text>
              <Text fontSize="14px" color="#8F9094" fontWeight="400">
                {user?.experience} years of experience
              </Text>
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
              >
                <h3>{framework}</h3>
              </Framework>
            ))}
          </FlexWrapper>
          <FlexWrapper flexWrap="wrap" gap="8px">
            {user?.programmingLanguages?.map((language) => (
              <LanguageContainer key={language}>{languageOptions[language]}</LanguageContainer>
            ))}
          </FlexWrapper>
          <FlexWrapper justifyContent="space-between" marginTop="48px">
            <FlexWrapper gap="8px">
              <Button>
                Invite
                <AddUserIcon />
              </Button>
              <Button width="124px" background="none" border="2px solid #46A11B">
                Message
                <Message />
              </Button>
            </FlexWrapper>
            <Button width="73px" background="none" onClick={() => navigate(`/profile/${user._id}`)}>
              Profile
              <LongArrowRight />
            </Button>
          </FlexWrapper>
        </FlexWrapper>
      </ProfileContainer>
    </Container>
  )
}

export default memo(forwardRef(UserProfile))
