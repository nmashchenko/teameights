import { useState } from 'react'
import { useFormikContext } from 'formik'

import { checkUserStatus } from '../../../../utils/checkUserStatus'
import { ProfileSection } from '../../Profile.styles'

import EditingComponentAvatar from './EditingComponents/EditingComponentAvatar'
import EditingComponentDefault from './EditingComponents/EditingComponentDefault'
import EditingComponentDescription from './EditingComponents/EditingComponentDescription'
import EditingComponentEducation from './EditingComponents/EditingComponentEducation'
import EditingComponentFrameworks from './EditingComponents/EditingComponentFrameworks'
import EditingComponentJob from './EditingComponents/EditingComponentJob'
import EditingComponentLanguages from './EditingComponents/EditingComponentLanguages'
import EditingComponentProfile from './EditingComponents/EditingComponentProfile'
import EditingComponentProjects from './EditingComponents/EditingComponentProjects'

const ResumeInfo = ({
  showingUser,
  currentUser,
  id,
  isEditing,
  setIsEditing,
  isUpdatingUser,
  isUpdatingAvatar,
}) => {
  const [active, setActive] = useState('projects')
  const { resetForm } = useFormikContext()
  const userStatus = checkUserStatus(currentUser, id)

  const handleCancel = () => {
    setIsEditing('')
    resetForm()
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
            setIsEditing={setIsEditing}
            userStatus={userStatus}
          />
        )
        break
      case 'avatar':
        content = (
          <EditingComponentAvatar handleCancel={handleCancel} isUpdatingAvatar={isUpdatingAvatar} />
        )
        break
      case 'profile':
        content = <EditingComponentProfile />
        break

      case 'description':
        content = (
          <EditingComponentDescription
            handleCancel={handleCancel}
            isUpdatingUser={isUpdatingUser}
          />
        )
        break

      case 'projects':
        content = <EditingComponentProjects handleBack={handleCancel} showingUser={showingUser} />
        break

      case 'frameworks':
        content = (
          <EditingComponentFrameworks handleCancel={handleCancel} isUpdatingUser={isUpdatingUser} />
        )
        break

      case 'languages':
        content = (
          <EditingComponentLanguages handleCancel={handleCancel} isUpdatingUser={isUpdatingUser} />
        )
        break

      case 'education':
        content = <EditingComponentEducation handleBack={handleCancel} showingUser={showingUser} />
        break

      case 'work':
        content = <EditingComponentJob handleBack={handleCancel} showingUser={showingUser} />
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
