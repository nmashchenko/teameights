import BehanceIcon from '../../../../assets/Links/BehanceIcon'
import GitHubIcon from '../../../../assets/Links/GitHubIcon'
import LinkedInIcon from '../../../../assets/Links/LinkedInIcon'
import TelegramIcon from '../../../../assets/Links/TelegramIcon'
import CakeIcon from '../../../../assets/UserProfile/Cake'
import EmailIcon from '../../../../assets/UserProfile/EmailIcon'
import LocationIcon from '../../../../assets/UserProfile/LocationIcon'
import MessageIcon from '../../../../assets/UserProfile/MessageIcon'
import StarIcon from '../../../../assets/UserProfile/StarIcon'
import UserIcon from '../../../../assets/UserProfile/UserIcon'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import { calculateAge } from '../../../../utils/calculateAge'
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

const ProfileInfo = ({ user }) => {
  const infoListArr = [
    { icon: <UserIcon />, infoEl: user?.concentration },
    { icon: <StarIcon />, infoEl: `${user?.experience} years of experience` },
    { icon: <LocationIcon />, infoEl: user?.country },
    { icon: <CakeIcon />, infoEl: `${calculateAge(user?.dateOfBirth)} years old` },
    {
      icon: <EmailIcon />,
      infoEl: (
        <a href={'mailto:' + user?.email} target="_blank" rel="noreferrer">
          {user?.email}
        </a>
      ),
    },
  ]

  const socialArr = [
    user?.links?.github && { icon: <GitHubIcon />, link: user?.links?.github },
    user?.links?.behance && { icon: <BehanceIcon />, link: user?.links?.behance },
    user?.links?.telegram && { icon: <TelegramIcon />, link: user?.links?.telegram },
    user?.links?.linkedIn && { icon: <LinkedInIcon />, link: user?.links?.linkedIn },
  ].filter(Boolean)

  return (
    <ProfileSection width="270px" padding="36px 24px 24px" align="center" gap="32px">
      <UserInfo>
        <AvatarWrapper>
          <AvatarImg src={user?.image} />
        </AvatarWrapper>
        <FlexWrapper direction="column" align="center" gap="8px">
          <Text>{user?.fullName}</Text>
          <Text color="#c1c1c4" fontWeight="300" fontSize="14px">
            @{user?.username}
          </Text>
        </FlexWrapper>
        <MessageBtn>
          Message
          <MessageIcon />
        </MessageBtn>
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
