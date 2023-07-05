import { useFormikContext } from 'formik'
import { useNavigate } from 'react-router-dom'

import { useInviteUser } from '../../../../shared/api/hooks/team/useInviteUser'
import BehanceIcon from '../../../../shared/assets/Links/BehanceIcon'
import GitHubIcon from '../../../../shared/assets/Links/GitHubIcon'
import LinkedInIcon from '../../../../shared/assets/Links/LinkedInIcon'
import TelegramIcon from '../../../../shared/assets/Links/TelegramIcon'
import CakeIcon from '../../../../shared/assets/UserProfile/Cake'
import EditIcon from '../../../../shared/assets/UserProfile/EditIcon'
import EmailIcon from '../../../../shared/assets/UserProfile/EmailIcon'
import LocationIcon from '../../../../shared/assets/UserProfile/LocationIcon'
import StarIcon from '../../../../shared/assets/UserProfile/StarIcon'
import UserIcon from '../../../../shared/assets/UserProfile/UserIcon'
import { useGetScreenWidth } from '../../../../shared/lib/hooks/useGetScreenWidth'
import { checkUserStatus } from '../../../../shared/lib/utils/checkUserStatus'
import { truncateString } from '../../../../shared/lib/utils/truncateString'
import FlexWrapper from '../../../../shared/ui/FlexWrapper/FlexWrapper'
import { ProfileSection } from '../../Profile.styles'

import { FC } from 'react'
import { calculateAge } from 'shared/lib/utils'
import {
  AvatarImg,
  AvatarWrapper,
  EditButton,
  InfoList,
  InfoListItem,
  SocialList,
  Text,
  UserInfo,
} from './ProfileInfo.styles'
import UserStatusButtons from './UserStatusButtons/UserStatusButtons'

const ProfileInfo: FC<$TSFIXME> = ({ 
  showingUser, id, currentUser, isEditing, setIsEditing, isUpdatingUser }) => {
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

  const handleInvite = () => {
    const details = {
      email: showingUser.email,
      teamid: currentUser?.team?._id,
      from_user_id: currentUser?._id,
    }

    inviteUser(details)
  }

  const { values, resetForm } = useFormikContext()
  const userStatus = checkUserStatus(currentUser, id)

  const handleEdit = (target: $TSFIXME) => {
    if (!isEditing) {
      setIsEditing(target)
    } else {
      resetForm()
      setIsEditing('')
    }
  }

  return (
    <ProfileSection width="270px" padding="36px 24px 24px" align="center" gap="32px">
      <UserInfo>
        <AvatarWrapper>
          {/* @ts-ignore */}
          <AvatarImg src={values.file && isEditing ? values.file : showingUser?.image} />
          {userStatus === 'same' && (
            <EditButton onClick={() => handleEdit('avatar')}>
              <EditIcon />
            </EditButton>
          )}
        </AvatarWrapper>
        <FlexWrapper direction="column" align="center" gap="8px">
          <Text>{showingUser?.fullName}</Text>
          <Text color="#c1c1c4" fontWeight="300" fontSize="14px">
            @{showingUser?.username}
          </Text>
        </FlexWrapper>
        <UserStatusButtons
          currentUser={currentUser}
          id={id}
          isEditing={isEditing}
          handleEdit={handleEdit}
          navigate={navigate}
          handleInvite={handleInvite}
          isInviting={isInviting}
          userStatus={userStatus}
          isUpdatingUser={isUpdatingUser}
        />
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
              <a href={social.link} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </SocialList>
      )}
    </ProfileSection>
  )
}

export default ProfileInfo
