import { useFormikContext } from 'formik'

import ChooseAvatar from '../../../../../../../shared/components/ChooseAvatar/ChooseAvatar'

import { Avatar, AvatarSelectionContainer, AvatarWrapper } from './AvatarSelection.styles'

const AvatarSelection = () => {
  const { getFieldProps } = useFormikContext()
  const currentAvatar = getFieldProps('file').value

  return (
    <AvatarSelectionContainer>
      <AvatarWrapper>
        <Avatar src={currentAvatar} alt="Avatar" />
      </AvatarWrapper>
      <ChooseAvatar />
    </AvatarSelectionContainer>
  )
}

export default AvatarSelection
