import Cake from '../../../assets/Team/Cake'
import Crown from '../../../assets/Team/Crown'
import { PencilSimple } from '../../../assets/Team/PencilSimple'
import Users from '../../../assets/Team/Users'
import { B2fs, B2fw, B2lh, H4fs, H4fw, H4lh } from '../../../constants/fonts'
import { LOCAL_PATH } from '../../../http'
import { Text } from '../TeamForm/TeamForm.styles'

import {
  CakeBox,
  EditImageButton,
  RightContainer,
  SVGAndText,
  TeamImgBorder,
  TeamInformationContainer,
} from './TeamProfileMiniCard.styles'

const TeamProfileMiniCard = ({
  team,
  picture,
  selectedImage,
  isEditing,
  setEditImage,
  actionType,
  servedProfilePic,
  editImage,
}) => {
  return (
    <>
      <RightContainer>
        <TeamInformationContainer>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100px', height: '124px' }}>
              <TeamImgBorder
                alt={team?.username}
                src={picture !== null || selectedImage !== '' ? servedProfilePic : team?.image} // not currently
              />
              {isEditing ? (
                <EditImageButton
                  editImage={editImage}
                  onClick={() => {
                    setEditImage((prevState) => !prevState)
                  }}
                >
                  <PencilSimple />
                </EditImageButton>
              ) : (
                <></>
              )}
            </div>
          </div>
          <Text
            margin="0 0 17px 0"
            fontSize={`${H4fs}`}
            lineHeight={`${H4lh}`}
            fontWeight={`${H4fw}`}
          >
            {team?.name}
          </Text>
          <SVGAndText margin="0 0 17px 0">
            <CakeBox>
              <Cake />
            </CakeBox>
            <Text
              margin="0 0 0 0"
              fontSize={`${B2fs}`}
              lineHeight={`${B2lh}`}
              fontWeight={`${B2fw}`}
            >
              {team?.createdAt.split('T')[0]}
            </Text>
          </SVGAndText>
          <SVGAndText>
            <CakeBox>
              <Users />
            </CakeBox>
            <Text fontSize={`${B2fs}`} lineHeight={`${B2lh}`} fontWeight={`${B2fw}`}>
              {team?.members.length}/8
            </Text>
          </SVGAndText>
        </TeamInformationContainer>
        {actionType}
      </RightContainer>
    </>
  )
}

export default TeamProfileMiniCard
