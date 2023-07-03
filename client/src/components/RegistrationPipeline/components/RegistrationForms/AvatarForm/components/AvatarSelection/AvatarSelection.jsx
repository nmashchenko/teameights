import { useFormikContext } from 'formik'

import ChooseAvatar from '../../../../../../../shared/ui/ChooseAvatar/ChooseAvatar'

import { Avatar, AvatarSelectionContainer } from './AvatarSelection.styles'

const AvatarSelection = () => {
  const { getFieldProps } = useFormikContext()
  const currentAvatar = getFieldProps('file').value

  return (
    <AvatarSelectionContainer>
      <Avatar src={currentAvatar} alt="Avatar" />
      <ChooseAvatar />
    </AvatarSelectionContainer>
  )
}

export default AvatarSelection
