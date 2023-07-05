// @ts-nocheck
// * Modules
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// * Assets
import {
  setIsFinishRegistrationStarted,
  setStep,
} from '../../app/providers/store/reducers/RegistrationAuth'
// API
import { transformToCreateTeamDto } from 'shared/lib/utils'
import { useCheckAuth } from '../../shared/api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../shared/api/hooks/shared/useUpdateAvatar'
import { useCreateTeam } from '../../shared/api/hooks/team/useCreateTeam'
import { createTeamValidation } from '../../shared/config/yup'
import { defaultTeamAvatars } from '../../shared/constants/teamFormData'
import Loader from '../../shared/ui/Loader/Loader'
import { errorToaster } from '../../shared/ui/Toasters/Error.toaster'
// eslint-disable-next-line max-len
import MultiStepRegistration from '../RegistrationPipeline/components/MultiStepRegistration/MultiStepRegistration'
import AvatarForm from '../RegistrationPipeline/components/RegistrationForms/AvatarForm/AvatarForm'
import InfoForm from '../RegistrationPipeline/components/RegistrationForms/InfoForm'
// eslint-disable-next-line max-len
import InviteMembersForm from '../RegistrationPipeline/components/RegistrationForms/InviteMembersForm/InviteMembersForm'

function CreateTeam() {
  const { mutate: updateAvatar, isLoading: isAvatarUpdating } = useUpdateAvatar('teams')

  const { mutate: createTeam, isLoading: isCreatingTeam } = useCreateTeam()

  const { data: user, isLoading: isUserLoading } = useCheckAuth()

  const dispatch = useDispatch()

  const navigate = useNavigate()

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
          text="You can upload an image to represent your team 
          on the platform, or select one of our default options. 
          The avatar can be changed at any time."
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

  const submitForm = (formData: $TSFIXME) => {
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

    try {
      createTeam(teamData, {
        onSuccess: (data) => {
          if (formData.file) {
            updateAvatar(
              { teamID: data._id, image: formData.file.split(',')[1] },
              {
                onSuccess: (updatedTeam) => {
                  dispatch(setIsFinishRegistrationStarted(false))
                  dispatch(setStep(1))
                  navigate(`/team/${updatedTeam.data._id}`)
                },
                onError: (error) => {
                  errorToaster(error)
                },
              },
            )
          }
        },
        onError: (error) => {
          errorToaster(error)
        },
      })
    } catch (e) {
      /* empty */
    }
  }

  return (
    <>
      {isUserLoading && <Loader />}
      <MultiStepRegistration
        steps={steps}
        validationSchema={createTeamValidation}
        initialValues={initialValues}
        submitForm={submitForm}
        isFinishingRegistration={isCreatingTeam || isAvatarUpdating}
      />
    </>
  )
}

export default CreateTeam
