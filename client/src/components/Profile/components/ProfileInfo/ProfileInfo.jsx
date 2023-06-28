import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { useInviteUser } from '../../../../api/hooks/team/useInviteUser'
import LongArrowLeft from '../../../../assets/Arrows/LongArrowLeft'
import BehanceIcon from '../../../../assets/Links/BehanceIcon'
import GitHubIcon from '../../../../assets/Links/GitHubIcon'
import LinkedInIcon from '../../../../assets/Links/LinkedInIcon'
import TelegramIcon from '../../../../assets/Links/TelegramIcon'
import AddUserIcon from '../../../../assets/Shared/AddUserIcon'
import CakeIcon from '../../../../assets/UserProfile/Cake'
import EmailIcon from '../../../../assets/UserProfile/EmailIcon'
import LocationIcon from '../../../../assets/UserProfile/LocationIcon'
import MessageIcon from '../../../../assets/UserProfile/MessageIcon'
import StarIcon from '../../../../assets/UserProfile/StarIcon'
import UserIcon from '../../../../assets/UserProfile/UserIcon'
import { useGetScreenWidth } from '../../../../hooks/useGetScreenWidth'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import { infoToaster } from '../../../../shared/components/Toasters/Info.toaster'
import { calculateAge } from '../../../../utils/calculateAge'
import { truncateString } from '../../../../utils/truncateString'
import { ProfileSection } from '../../Profile.styles'

import {
  AvatarImg,
  AvatarWrapper,
  InfoList,
  InfoListItem,
  MessageBtn,
  SocialList,
  Text,
  UserInfo,
} from './ProfileInfo.styles'

const ProfileInfo = ({ showingUser, id, currentUser }) => {
  const width = useGetScreenWidth()
  const navigate = useNavigate()
  const { mutate: inviteUser, isLoading: isInviting } = useInviteUser()

  const infoListArr = [
    { icon: <UserIcon />, infoEl: truncateString(showingUser?.concentration, width) },
    {
      icon: <StarIcon />,
      infoEl: truncateString(`${showingUser?.experience} years of experience`, width),
    },
    { icon: <LocationIcon />, infoEl: truncateString(showingUser?.country, width) },
    {
      icon: <CakeIcon />,
      infoEl: truncateString(`${calculateAge(showingUser?.dateOfBirth)} years old`, width),
    },
    {
      icon: <EmailIcon />,
      infoEl: (
        <a href={'mailto:' + showingUser?.email} target="_blank" rel="noreferrer">
          {truncateString(showingUser?.email, width)}
        </a>
      ),
    },
  ]

  const socialArr = [
    showingUser?.links?.github && { icon: <GitHubIcon />, link: showingUser?.links?.github },
    showingUser?.links?.behance && { icon: <BehanceIcon />, link: showingUser?.links?.behance },
    showingUser?.links?.telegram && { icon: <TelegramIcon />, link: showingUser?.links?.telegram },
    showingUser?.links?.linkedIn && { icon: <LinkedInIcon />, link: showingUser?.links?.linkedIn },
  ].filter(Boolean)

  /* Check if current showingUserId is the same as passed in params */
  const checkUserStatus = () => {
    if (currentUser?._id === id) {
      return 'same'
    } else if (currentUser?.team && currentUser?.team?.members.some((member) => member === id)) {
      return 'teammember'
    } else {
      return 'other'
    }
  }

  const handleInvite = () => {
    const details = {
      email: showingUser.email,
      teamid: currentUser?.team?._id,
      from_user_id: currentUser?._id,
    }

    inviteUser(details)
  }

  return (
    <ProfileSection width="270px" padding="36px 24px 24px" align="center" gap="32px">
      <UserInfo>
        <AvatarWrapper>
          <AvatarImg src={showingUser?.image} />
        </AvatarWrapper>
        <FlexWrapper direction="column" align="center" gap="8px">
          <Text>{showingUser?.fullName}</Text>
          <Text color="#c1c1c4" fontWeight="300" fontSize="14px">
            @{showingUser?.username}
          </Text>
        </FlexWrapper>
        {checkUserStatus() === 'same' && (
          <MessageBtn type="button" background="#46A11B">
            This is your profile
          </MessageBtn>
        )}
        {checkUserStatus() === 'teammember' && (
          <FlexWrapper gap="8px" width="100%">
            <MessageBtn type="button" onClick={() => navigate(-1)}>
              <LongArrowLeft />
              Back
            </MessageBtn>
            <MessageBtn
              type="button"
              onClick={() => infoToaster('Coming in the next update!')}
              background="#46A11B"
            >
              Message
              <MessageIcon />
            </MessageBtn>
          </FlexWrapper>
        )}
        {checkUserStatus() === 'other' && (
          <FlexWrapper gap="8px" width="100%">
            {currentUser?.team && (
              <MessageBtn type="button" background="#46A11B" border="none" onClick={handleInvite}>
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
              </MessageBtn>
            )}

            <MessageBtn type="button" onClick={() => infoToaster('Coming in the next update!')}>
              Message
              <MessageIcon />
            </MessageBtn>
          </FlexWrapper>
        )}
      </UserInfo>
      <InfoList>
        {infoListArr.map((item, index) => (
          <InfoListItem key={index}>
            {item.icon}
            <Text fontSize="16px" fontWeight="400">
              {item.infoEl}
            </Text>
          </InfoListItem>
        ))}
      </InfoList>
      {socialArr.length > 0 && (
        <SocialList>
          {socialArr.map((social, index) => (
            <li key={index}>
              <a href={social.link}>{social.icon}</a>
            </li>
          ))}
        </SocialList>
      )}
    </ProfileSection>
  )
}

export default ProfileInfo
