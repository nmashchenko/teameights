// * Modules
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
// * Redux
import { useNavigate } from 'react-router-dom'

// API
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useCreateTeam } from '../../../api/hooks/team/useCreateTeam'
import { defaultTeamAvatars } from '../../../constants/teamFormData'
// * Assets
import { createTeamValidation } from '../../../schemas'
import Loader from '../../../shared/components/Loader/Loader'
import { setIsModalOpen } from '../../../store/reducers/Shared'
import MultiStepRegistration from '../RegistrationPipeline/components/MultiStepRegistration/MultiStepRegistration'
import AvatarForm from '../RegistrationPipeline/components/RegistrationForms/AvatarForm/AvatarForm'
import InfoForm from '../RegistrationPipeline/components/RegistrationForms/InfoForm'

function CreateTeamForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [teamName, setTeamName] = useState('')
  const [teamAvatar, setTeamAvatar] = useState(null)

  const [country, setCountry] = useState('')
  const { mutate: createTeam, isLoading: isCreatingTeam } = useCreateTeam(teamAvatar)
  const { data: user, isLoading: isUserLoading } = useCheckAuth()
  const userId = user?._id
  const steps = [
    { component: <InfoForm />, name: 'Create team', isOptional: false },
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
    // members: {
    //   ids: [userId],
    //   emails: [user.email]
    // },
    file: null,
  }

  const submitForm = async (formData) => {
    const teamData = {
      name: formData.name,
      description: formData.description,
      leader: userId,
      country: formData.country,
      type: formData.type.toLowerCase(),
      tag: formData.tag,
      members: formData.members,
    }

    await setTeamAvatar(formData.file)

    createTeam(teamData)
  }

  if (isUserLoading || isCreatingTeam) {
    return <Loader />
  }

  return (
    <>
      <MultiStepRegistration
        steps={steps}
        validationSchema={createTeamValidation}
        initialValues={initialValues}
        submitForm={submitForm}
      />
      {/* {!isCreatingTeam && !isUserLoading && <Toaster />} */}
    </>
  )
}

export default CreateTeamForm
