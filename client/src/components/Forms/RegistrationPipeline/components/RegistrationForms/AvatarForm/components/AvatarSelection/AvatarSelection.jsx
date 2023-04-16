import { useFormikContext } from 'formik'

import ChooseAvatar from '../ChooseAvatar/ChooseAvatar'

import { Avatar, AvatarSelectionContainer } from './AvatarSelection.styles'

const AvatarSelection = ({ defaultAvatars }) => {
  const { getFieldProps } = useFormikContext()
  const currentAvatar = getFieldProps('file').value

  return (
    <AvatarSelectionContainer>
      <Avatar src={currentAvatar} alt="Avatar" />
      <ChooseAvatar defaultAvatars={defaultAvatars} />
    </AvatarSelectionContainer>
  )
}

export default AvatarSelection
