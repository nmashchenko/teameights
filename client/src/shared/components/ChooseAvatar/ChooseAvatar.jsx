import { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'

import { defaultUserAvatars } from '../../../constants/finishRegistrationData'
import { defaultTeamAvatars } from '../../../constants/teamFormData'

import CustomDropZone from './components/CustomDropZone/CustomDropZone'
import {
  ChooseAvatarContainer,
  ChooseAvatarText,
  DefaultAvatar,
  DefaultAvatarContainer,
  DefaultAvatarList,
} from './ChooseAvatar.styles'

const ChooseAvatar = ({ type = 'user' }) => {
  const [defaultAvatarSelected, setDefaultAvatarSelected] = useState(
    type === 'user' ? defaultUserAvatars[0] : defaultTeamAvatars[0],
  )
  const [avatar, setAvatar] = useState(null)
  const { setFieldValue } = useFormikContext()

  const onDefaultAvatarSelect = (defaultAvatar) => {
    setDefaultAvatarSelected(defaultAvatar)
    if (avatar) {
      setAvatar(null)
    }
  }

  useEffect(() => {
    if (avatar) {
      setFieldValue('file', avatar)
      setDefaultAvatarSelected(null)
    } else {
      setFieldValue('file', defaultAvatarSelected?.path)
    }
  }, [avatar, defaultAvatarSelected])

  const avatars = type === 'user' ? defaultUserAvatars : defaultTeamAvatars

  return (
    <ChooseAvatarContainer>
      <ChooseAvatarText>Select one of default</ChooseAvatarText>
      <DefaultAvatarList>
        {avatars?.map((avatar) => (
          <DefaultAvatarContainer
            onClick={() => onDefaultAvatarSelect(avatar)}
            key={avatar.name}
            selected={defaultAvatarSelected?.name === avatar.name}
          >
            <DefaultAvatar src={avatar.path} alt={`default ${avatar.name}`} />
          </DefaultAvatarContainer>
        ))}
      </DefaultAvatarList>
      <ChooseAvatarText>Or add your own</ChooseAvatarText>
      <CustomDropZone setUserAvatar={setAvatar} defaultAvatarSelected={defaultAvatarSelected} />
    </ChooseAvatarContainer>
  )
}

export default ChooseAvatar
