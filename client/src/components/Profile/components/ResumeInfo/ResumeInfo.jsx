import { useState } from 'react'
import { useFormikContext } from 'formik'

import { ProfileSection } from '../../Profile.styles'

import EditingComponentAvatar from './EditingComponents/EditingComponentAvatar'
import EditingComponentDefault from './EditingComponents/EditingComponentDefault'
import EditingComponentProfile from './EditingComponents/EditingComponentProfile'

const ResumeInfo = ({ showingUser, isEditing, setIsEditing }) => {
  const [active, setActive] = useState('projects')
  const { setFieldValue } = useFormikContext()

  const handleCancel = () => {
    setIsEditing('')
    setFieldValue('file', null)
  }

  const currentData = () => {
    let content = null

    switch (isEditing) {
      case '':
        content = (
          <EditingComponentDefault
            active={active}
            setActive={setActive}
            showingUser={showingUser}
          />
        )
        break
      case 'avatar':
        content = <EditingComponentAvatar handleCancel={handleCancel} />
        break
      case 'profile':
        content = <EditingComponentProfile />
        break

      default:
        content = null
        break
    }

    return content
  }

  return (
    <ProfileSection width="470px" padding="24px 32px">
      {currentData()}
    </ProfileSection>
  )
}

export default ResumeInfo
