import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormikContext } from 'formik'

import { useInviteUser } from '../../../../api/hooks/team/useInviteUser'
import BehanceIcon from '../../../../assets/Links/BehanceIcon'
import GitHubIcon from '../../../../assets/Links/GitHubIcon'
import LinkedInIcon from '../../../../assets/Links/LinkedInIcon'
import TelegramIcon from '../../../../assets/Links/TelegramIcon'
import CakeIcon from '../../../../assets/UserProfile/Cake'
import EditIcon from '../../../../assets/UserProfile/EditIcon'
import EmailIcon from '../../../../assets/UserProfile/EmailIcon'
import LocationIcon from '../../../../assets/UserProfile/LocationIcon'
import StarIcon from '../../../../assets/UserProfile/StarIcon'
import UserIcon from '../../../../assets/UserProfile/UserIcon'
import { useGetScreenWidth } from '../../../../hooks/useGetScreenWidth'
import CardSkeleton from '../../../../shared/components/CardSkeleton/CardSkeleton'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import { calculateAge } from '../../../../utils/calculateAge'
import { checkUserStatus } from '../../../../utils/checkUserStatus'
import { truncateString } from '../../../../utils/truncateString'
import { ProfileSection } from '../../Profile.styles'

import UserStatusButtons from './UserStatusButtons/UserStatusButtons'
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

const ProfileInfo = ({ showingUser, id, currentUser, isEditing, setIsEditing, isUpdatingUser }) => {
  const width = useGetScreenWidth()
  const navigate = useNavigate()
  const { mutate: inviteUser, isLoading: isInviting } = useInviteUser()
  const [imgLoading, setImgLoading] = useState(true)

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

  const handleEdit = (target) => {
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
        <div style={{ display: imgLoading ? 'block' : 'none' }}>
          <CardSkeleton width="100px" height="100px" borderRadius="50%" />
        </div>
        <AvatarWrapper display={imgLoading ? 'none' : 'block'}>
          <AvatarImg
            src={values.file && isEditing ? values.file : showingUser?.image}
            onLoad={() => setImgLoading(false)}
          />
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
