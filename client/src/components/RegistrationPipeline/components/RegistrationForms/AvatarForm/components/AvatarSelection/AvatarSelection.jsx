import { useFormikContext } from 'formik'

import ChooseAvatar from '../../../../../../../shared/components/ChooseAvatar/ChooseAvatar'

import { Avatar, AvatarSelectionContainer, AvatarWrapper } from './AvatarSelection.styles'

const AvatarSelection = ({ type }) => {
  const { getFieldProps } = useFormikContext()
  const currentAvatar = getFieldProps('file').value

  return (
    <AvatarSelectionContainer>
      <AvatarWrapper>
        <Avatar src={currentAvatar} alt="Avatar" />
      </AvatarWrapper>
      <ChooseAvatar type={type} />
    </AvatarSelectionContainer>
  )
}

export default AvatarSelection
