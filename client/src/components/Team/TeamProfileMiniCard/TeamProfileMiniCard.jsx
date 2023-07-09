import { useState } from 'react'
import { useFormikContext } from 'formik'

import Cake from '../../../assets/Team/Cake'
import { PencilSimple } from '../../../assets/Team/PencilSimple'
import Users from '../../../assets/Team/Users'
import { B2fs, B2fw, B2lh, H4fs, H4fw, H4lh } from '../../../constants/fonts'
import CardSkeleton from '../../../shared/components/CardSkeleton/CardSkeleton'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper'
import { HidableWrapper, Text } from '../TeamForm/TeamForm.styles'

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
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <>
      <RightContainer>
        <TeamInformationContainer>
          <FlexWrapper justify="center">
            <FlexWrapper position="relative" width="100px" height="124px">
              <HidableWrapper display={imgLoading ? 'block' : 'none'}>
                <CardSkeleton width="100px" height="100px" borderRadius="50%" />
              </HidableWrapper>
              <HidableWrapper display={imgLoading ? 'none' : 'block'}>
                <TeamImgBorder
                  alt={team?.username}
                  src={values?.file ? values?.file : team?.image}
                  onLoad={() => setImgLoading(false)}
                />
              </HidableWrapper>

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
            </FlexWrapper>
          </FlexWrapper>
          {!team ? (
            <CardSkeleton width="100%" height="30px" borderRadius="5px" />
          ) : (
            <Text
              fontSize={`${H4fs}`}
              lineHeight={`${H4lh}`}
              fontWeight={`${H4fw}`}
              textAlign="center"
            >
              {team?.name}
            </Text>
          )}

          <FlexWrapper
            direction="column"
            gap="8px"
            align="start"
            justify="start"
            margin="16px 0 0 0"
          >
            <SVGAndText margin="0 0 8px 0">
              <CakeBox>
                <Cake />
              </CakeBox>
              {!team ? (
                <CardSkeleton width="93px" parentMaxWidth="93px" height="24px" borderRadius="5px" />
              ) : (
                <Text
                  margin="0 0 0 0"
                  fontSize={`${B2fs}`}
                  lineHeight={`${B2lh}`}
                  fontWeight={`${B2fw}`}
                >
                  {team?.createdAt.split('T')[0]}
                </Text>
              )}
            </SVGAndText>
            <SVGAndText>
              <CakeBox>
                <Users />
              </CakeBox>
              {!team ? (
                <CardSkeleton width="93px" parentMaxWidth="93px" height="24px" borderRadius="5px" />
              ) : (
                <Text fontSize={`${B2fs}`} lineHeight={`${B2lh}`} fontWeight={`${B2fw}`}>
                  {team?.members.length}/8 members
                </Text>
              )}
            </SVGAndText>
          </FlexWrapper>
        </TeamInformationContainer>
        {actionType}
      </RightContainer>
    </>
  )
}

export default TeamProfileMiniCard
