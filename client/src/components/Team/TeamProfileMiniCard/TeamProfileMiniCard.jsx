import { useFormikContext } from 'formik'

import Cake from '../../../assets/Team/Cake'
import { PencilSimple } from '../../../assets/Team/PencilSimple'
import Users from '../../../assets/Team/Users'
import { B2fs, B2fw, B2lh, H4fs, H4fw, H4lh } from '../../../constants/fonts'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper'
import { Text } from '../TeamForm/TeamForm.styles'

import {
  CakeBox,
  EditImageButton,
  RightContainer,
  SVGAndText,
  TeamImgBorder,
  TeamInformationContainer,
} from './TeamProfileMiniCard.styles'

const TeamProfileMiniCard = ({ team, isEditing, setEditImage, actionType, editImage }) => {
  const { values } = useFormikContext()

  return (
    <>
      <RightContainer>
        <TeamInformationContainer>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100px', height: '124px' }}>
              <TeamImgBorder
                alt={team?.username}
                src={values?.file ? values?.file : team?.image} // not currently
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
            margin="0 0 16px 0"
            fontSize={`${H4fs}`}
            lineHeight={`${H4lh}`}
            fontWeight={`${H4fw}`}
          >
            {team?.name}
          </Text>
          <FlexWrapper direction="column" gap="8px" align="start" justify="start">
            <SVGAndText margin="0 0 8px 0">
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
                {team?.members.length}/8 members
              </Text>
            </SVGAndText>
          </FlexWrapper>
        </TeamInformationContainer>
        {actionType}
      </RightContainer>
    </>
  )
}

export default TeamProfileMiniCard
