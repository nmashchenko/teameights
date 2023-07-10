import React, { memo, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { useInviteUser } from '../../../../api/hooks/team/useInviteUser'
import LongArrowLeft from '../../../../assets/Arrows/LongArrowLeft'
import LongArrowRight from '../../../../assets/Arrows/LongArrowRight'
// * Assets
import AddUserIcon from '../../../../assets/Shared/AddUserIcon'
import Message from '../../../../assets/Shared/Message'
import { frameworkColors, frameworkTextColors } from '../../../../constants/frameworkColors'
import { languageOptions } from '../../../../constants/programmingLanguages'
import CardSkeleton from '../../../../shared/components/CardSkeleton/CardSkeleton'
import { infoToaster } from '../../../../shared/components/Toasters/Info.toaster'
import { calculateAge } from '../../../../utils/calculateAge'
import { getCountryFlag } from '../../../../utils/getCountryFlag'
import { HidableWrapper } from '../../Teammates.styles'

import {
  Button,
  FlagIcon,
  FlexWrapper,
  Framework,
  LanguageContainer,
  MobileProfile,
  MobileWrapper,
  Text,
  UserImg,
} from './UserProfile.styles'

const UserProfilePhone = ({ currentUser, showingUser, mobileProfile, handleClose }) => {
  const navigate = useNavigate()
  const { mutate: inviteUser, isLoading: isInviting } = useInviteUser()
  const [imgLoading, setImgLoading] = useState(true)

  const handleInvite = () => {
    const details = {
      email: showingUser.email,
      teamid: currentUser?.team?._id,
      from_user_id: currentUser?._id,
    }

    inviteUser(details)
  }

  const showInviteButton = () => {
    /** Check if current user has a team */
    if (currentUser?.team) {
      /** Check if  current user has showing user as team member  */
      if (!currentUser?.team?.members?.some((member) => member === showingUser?._id)) {
        return true
      }
    }

    return false
  }

  return (
    <MobileProfile anchor="bottom" open={mobileProfile} onClose={handleClose}>
      <MobileWrapper>
        <FlexWrapper justifyContent="space-between">
          <Button
            width="73px"
            background="none"
            onClick={() => {
              setImgLoading(true)
              handleClose()
            }}
          >
            <LongArrowLeft />
            Back
          </Button>
          <Button
            width="73px"
            background="none"
            onClick={() => navigate(`/profile/${showingUser._id}`)}
          >
            Profile
            <LongArrowRight />
          </Button>
        </FlexWrapper>
        <FlexWrapper gap="24px" flexDirection="column" marginTop="32px">
          <FlexWrapper gap="32px" maxHeight="70px">
            <HidableWrapper display={imgLoading ? 'block' : 'none'}>
              <CardSkeleton width="70px" height="70px" borderRadius="50%" />
            </HidableWrapper>
            <HidableWrapper display={imgLoading ? 'none' : 'block'}>
              <UserImg
                src={showingUser?.image}
                alt={`${showingUser?.username}'s image`}
                onLoad={() => setImgLoading(false)}
              />
            </HidableWrapper>
            <FlexWrapper flexDirection="column" maxHeight="70px">
              <FlexWrapper gap="8px" alignItems="center" maxHeight="30px">
                <Text fontSize="20px">
                  {showingUser?.fullName?.split(' ')[0]}, {calculateAge(showingUser.dateOfBirth)}
                </Text>
                {getCountryFlag(showingUser?.country) && (
                  <FlagIcon src={getCountryFlag(showingUser?.country)} />
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
          <FlexWrapper gap="8px" width="100%">
            {showInviteButton() && (
              <Button type="button" onClick={handleInvite} width="100%">
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
              width="100%"
              background="none"
              border="2px solid #46A11B"
              onClick={() => infoToaster('Coming in the next update!')}
            >
              Message
              <Message />
            </Button>
          </FlexWrapper>
          {showingUser?.description && (
            <Text fontSize="16px" fontWeight="400">
              {showingUser?.description}
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
                flexBasis="33.3%"
              >
                <h3>{framework}</h3>
              </Framework>
            ))}
          </FlexWrapper>
          <FlexWrapper flexWrap="wrap" gap="8px">
            {showingUser?.programmingLanguages?.map((language) => (
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

export default memo(UserProfilePhone)
