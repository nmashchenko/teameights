// * Modules
import React, { useState } from 'react'

// API
import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useCreateTeam } from '../../api/hooks/team/useCreateTeam'
import { defaultTeamAvatars } from '../../constants/teamFormData'
// * Assets
import { createTeamValidation } from '../../schemas'
import Loader from '../../shared/components/Loader/Loader'
import { errorToaster } from '../../shared/components/Toasters/Error.toaster'
import { transformToCreateTeamDto } from '../../utils/transformToCreateTeamDto'
import MultiStepRegistration from '../RegistrationPipeline/components/MultiStepRegistration/MultiStepRegistration'
import AvatarForm from '../RegistrationPipeline/components/RegistrationForms/AvatarForm/AvatarForm'
import InfoForm from '../RegistrationPipeline/components/RegistrationForms/InfoForm'
import InviteMembersForm from '../RegistrationPipeline/components/RegistrationForms/InviteMembersForm/InviteMembersForm'

function CreateTeam() {
  const [teamAvatar, setTeamAvatar] = useState(null)
  const {
    mutate: createTeam,
    isLoading: isCreatingTeam,
    isError: isCreatingTeamError,
    error,
  } = useCreateTeam(teamAvatar)
  const { data: user, isLoading: isUserLoading } = useCheckAuth()
  const userId = user?._id
  const steps = [
    { component: <InfoForm />, name: 'Create team', isOptional: false },
    {
      component: <InviteMembersForm />,
      name: 'Invite members',
      isOptional: true,
    },
    {
      component: (
        <AvatarForm
          text="You can upload an image to represent your team on the platform, or select one of our default options. The avatar can be changed at any time."
          defaultAvatars={defaultTeamAvatars}
        />
      ),
      name: 'Add team avatar',
      isOptional: true,
    },
  ]

  const initialValues = {
    name: '',
    tag: '',
    type: '',
    country: '',
    description: '',
    members: [{ username: user?.username, image: user?.image, id: user?._id, email: user?.email }],
    file: null,
  }

  const submitForm = async (formData) => {
    let membersModified = transformToCreateTeamDto(formData.members)

    const teamData = {
      name: formData.name,
      description: formData.description,
      leader: userId,
      country: formData.country,
      type: formData.type.toLowerCase(),
      tag: formData.tag,
      members: membersModified.members,
    }

    setTeamAvatar(formData.file)

    createTeam(teamData)
  }

  if (isCreatingTeamError && !isCreatingTeam) {
    errorToaster(error)
  }

  return (
    <>
      {(isUserLoading || isCreatingTeam) && <Loader />}
      <MultiStepRegistration
        steps={steps}
        validationSchema={createTeamValidation}
        initialValues={initialValues}
        submitForm={submitForm}
      />
    </>
  )
}

export default CreateTeam
