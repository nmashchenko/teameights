import AvatarEditIcon from '../../../../../assets/Avatars/AvatarEditIcon'

import { AvatarEditContainer } from './AvatarEditButton.styles'

const AvatarEditButton = (props) => {
  return (
    <AvatarEditContainer {...props}>
      <AvatarEditIcon />
    </AvatarEditContainer>
  )
}

export default AvatarEditButton
