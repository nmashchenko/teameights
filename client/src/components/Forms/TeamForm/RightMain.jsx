import Cake from '../../../assets/Cake'
import Crown from '../../../assets/Crown'
import { B2fs, B2fw, B2lh, H4fs, H4fw, H4lh } from '../../../assets/fonts'
import { PencilSimple } from '../../../assets/PencilSimple'
import Users from '../../../assets/Users'
import http, { LOCAL_PATH } from '../../../http'

import {
  CakeBox,
  CrownContainer2,
  EditImageButton,
  RightContainer,
  SVGAndText,
  TeamImgBorder,
  TeamInformationContainer,
  Text,
} from './TeamForm.styles'

const RightMain = ({
  team,
  picture,
  selectedImage,
  isEditing,
  setEditImage,
  leaderOrMemberAction,
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
                alt={team.username}
                src={
                  picture !== null || selectedImage !== ''
                    ? servedProfilePic
                    : LOCAL_PATH + '/' + team?.image
                } // not currently
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
              <CrownContainer2>
                <Crown />
              </CrownContainer2>
            </div>
          </div>
          <Text
            margin="0 0 17px 0"
            fontSize={`${H4fs}`}
            lineHeight={`${H4lh}`}
            fontWeight={`${H4fw}`}
          >
            {team.name}
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
              {team.createdAt.split('T')[0]}
            </Text>
          </SVGAndText>
          <SVGAndText>
            <CakeBox>
              <Users />
            </CakeBox>
            <Text fontSize={`${B2fs}`} lineHeight={`${B2lh}`} fontWeight={`${B2fw}`}>
              {team.members.length}/8
            </Text>
          </SVGAndText>
        </TeamInformationContainer>
        {leaderOrMemberAction}
      </RightContainer>
    </>
  )
}

export default RightMain
