import { useState } from 'react'
import { useFormikContext } from 'formik'

import { checkUserStatus } from '../../../../utils/checkUserStatus'
import { ProfileSection } from '../../Profile.styles'

import EditingComponentAvatar from './EditingComponents/EditingComponentAvatar'
import EditingComponentDefault from './EditingComponents/EditingComponentDefault'
import EditingComponentDescription from './EditingComponents/EditingComponentDescription'
import EditingComponentFrameworks from './EditingComponents/EditingComponentFrameworks'
import EditingComponentLanguages from './EditingComponents/EditingComponentLanguages'
import EditingComponentProfile from './EditingComponents/EditingComponentProfile'
import EditingComponentProjects from './EditingComponents/EditingComponentProjects'

const ResumeInfo = ({ showingUser, currentUser, id, isEditing, setIsEditing }) => {
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
        content = <EditingComponentAvatar handleCancel={handleCancel} />
        break
      case 'profile':
        content = <EditingComponentProfile />
        break

      case 'description':
        content = <EditingComponentDescription handleCancel={handleCancel} />
        break

      case 'projects':
        content = <EditingComponentProjects handleBack={handleCancel} showingUser={showingUser} />
        break

      case 'frameworks':
        content = <EditingComponentFrameworks handleCancel={handleCancel} />
        break

      case 'languages':
        content = <EditingComponentLanguages handleCancel={handleCancel} />
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
