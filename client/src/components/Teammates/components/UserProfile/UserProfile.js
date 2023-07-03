// * Modules
import React, { forwardRef, memo } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { Slide } from '@mui/material'

import LongArrowRight from '../../../../assets/Arrows/LongArrowRight'
import AddUserIcon from '../../../../assets/Shared/AddUserIcon'
import Close from '../../../../assets/Shared/Close'
import Message from '../../../../assets/Shared/Message'
import { useInviteUser } from '../../../../shared/api/hooks/team/useInviteUser'
import { frameworkColors, frameworkTextColors } from '../../../../shared/constants/frameworkColors'
import { languageOptions } from '../../../../shared/constants/programmingLanguages'
// * Assets
import { calculateAge } from '../../../../shared/lib/utils/calculateAge'
import { getCountryFlag } from '../../../../shared/lib/utils/getCountryFlag'
import { infoToaster } from '../../../../shared/ui/Toasters/Info.toaster'

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

const UserProfile = ({ showingUser, currentUser, handleClose, open }, ref) => {
  const navigate = useNavigate()

  const { mutate: inviteUser, isLoading: isInviting } = useInviteUser()

  const handleInvite = () => {
    const details = {
      email: showingUser.email,
      teamid: currentUser?.team?._id,
      from_user_id: currentUser?._id,
    }

    inviteUser(details)
  }

  const showInviteButton = () => {
    /** Check if current showingUser has a team */
    if (currentUser?.team) {
      /** Check if  current showingUser has showing showingUser as team member  */
      if (!currentUser?.team?.members?.some((member) => member === showingUser?._id)) {
        return true
      }
    }

    return false
  }

  return (
    <Slide direction="up" in={open} ref={ref}>
      <Container tabIndex={-1}>
        <ProfileContainer>
          <CloseContainer onClick={handleClose}>
            <Close />
          </CloseContainer>
          <FlexWrapper gap="24px" flexDirection="column">
            <FlexWrapper gap="32px">
              <div>
                <UserImg src={showingUser?.image} alt={`${showingUser?.username}'s image`} />
              </div>
              <FlexWrapper flexDirection="column" maxHeight="70px">
                <FlexWrapper gap="8px" alignItems="center" maxHeight="30px">
                  <Text fontSize="20px">
                    {showingUser?.fullName?.split(' ')[0]}, {calculateAge(showingUser?.dateOfBirth)}
                  </Text>
                  {getCountryFlag(showingUser.country) && (
                    <FlagIcon src={getCountryFlag(showingUser.country)} />
                  )}
                </FlexWrapper>
                <Text fontSize="14px" color="#8F9094" fontWeight="400">
                  {showingUser?.concentration}
                </Text>
                <Text fontSize="14px" color="#8F9094" fontWeight="400">
                  {showingUser?.experience} years of experience
                </Text>
              </FlexWrapper>
            </FlexWrapper>
            {showingUser?.description && (
              <Text fontSize="16px" fontWeight="400">
                {showingUser.description}
              </Text>
            )}
            <FlexWrapper flexWrap="wrap" gap="8px">
              {showingUser?.frameworks?.map((framework) => (
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
              {showingUser?.programmingLanguages?.map((language) => (
                <LanguageContainer key={language}>{languageOptions[language]}</LanguageContainer>
              ))}
            </FlexWrapper>
            <FlexWrapper justifyContent="space-between" marginTop="48px">
              <FlexWrapper gap="8px">
                {showInviteButton() && (
                  <Button type="button" onClick={handleInvite}>
                    {isInviting ? (
                      <ThreeDots
                        height="24"
                        width="24"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                    ) : (
                      <>
                        Invite
                        <AddUserIcon />
                      </>
                    )}
                  </Button>
                )}
                <Button
                  width="124px"
                  background="none"
                  border="2px solid #46A11B"
                  onClick={() => infoToaster('Coming in the next update!')}
                >
                  Message
                  <Message />
                </Button>
              </FlexWrapper>
              <Button
                width="73px"
                background="none"
                onClick={() => navigate(`/profile/${showingUser._id}`)}
              >
                Profile
                <LongArrowRight />
              </Button>
            </FlexWrapper>
          </FlexWrapper>
        </ProfileContainer>
      </Container>
    </Slide>
  )
}

export default memo(forwardRef(UserProfile))
