import { useCallback } from 'react'
import { useFormikContext } from 'formik'

import { useGetScreenWidth } from '../../../../../../../hooks/useGetScreenWidth'
import CardSkeleton from '../../../../../../../shared/components/CardSkeleton/CardSkeleton'
import ChooseAvatar from '../../../../../../../shared/components/ChooseAvatar/ChooseAvatar'

import { Avatar, AvatarSelectionContainer, AvatarWrapper } from './AvatarSelection.styles'

const AvatarSelection = ({ type }) => {
  const { getFieldProps } = useFormikContext()
  const currentAvatar = getFieldProps('file').value
  const width = useGetScreenWidth()

  const handleCurrentSize = useCallback(() => {
    if (width > 900) {
      return '270px'
    } else if (width > 768 && width <= 900) {
      return '170px'
    } else {
      return '140px'
    }
  }, [width])

  return (
    <AvatarSelectionContainer>
      <AvatarWrapper>
        {currentAvatar ? (
          <Avatar src={currentAvatar} alt="Avatar" />
        ) : (
          <CardSkeleton
            width={handleCurrentSize()}
            height={handleCurrentSize()}
            borderRadius="50%"
          />
        )}
      </AvatarWrapper>
      <ChooseAvatar type={type} />
    </AvatarSelectionContainer>
  )
}

export default AvatarSelection
