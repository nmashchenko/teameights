import { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'

import CustomDropZone from './components/CustomDropZone/CustomDropZone'
import {
  ChooseAvatarContainer,
  ChooseAvatarText,
  DefaultAvatar,
  DefaultAvatarContainer,
  DefaultAvatarList,
} from './ChooseAvatar.styles'

const ChooseAvatar = ({ defaultAvatars }) => {
  const [defaultAvatarSelected, setDefaultAvatarSelected] = useState(defaultAvatars[0])
  const [userAvatar, setUserAvatar] = useState(null)
  const { setFieldValue } = useFormikContext()

  const onDefaultAvatarSelect = (defaultAvatar) => {
    setDefaultAvatarSelected(defaultAvatar)
    if (userAvatar) {
      setUserAvatar(null)
    }
  }

  useEffect(() => {
    if (userAvatar) {
      setFieldValue('file', userAvatar)
      setDefaultAvatarSelected(null)
    } else {
      setFieldValue('file', defaultAvatarSelected?.path)
    }
  }, [userAvatar, defaultAvatarSelected])

  return (
    <ChooseAvatarContainer>
      <ChooseAvatarText>Select one of default</ChooseAvatarText>
      <DefaultAvatarList>
        {defaultAvatars.map((avatar) => (
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
      <CustomDropZone setUserAvatar={setUserAvatar} />
    </ChooseAvatarContainer>
  )
}

export default ChooseAvatar
