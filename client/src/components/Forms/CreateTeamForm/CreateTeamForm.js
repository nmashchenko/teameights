// * Modules
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// * Redux
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'
import { useSnackbar } from 'notistack'

// API
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useCreateTeam } from '../../../api/hooks/team/useCreateTeam'
import AvatarEditIcon from '../../../assets/AvatarEditIcon'
// * Assets
import X from '../../../assets/X'
import AvatarEditButton from '../../../shared/components/Forms/UserAvatar/AvatarEditButton/AvatarEditButton'
import AvatarLoadModal from '../../../shared/components/Forms/UserAvatar/AvatarLoadModal/AvatarLoadModal'
import { UserAvatar } from '../../../shared/components/Forms/UserAvatar/UserAvatar.styles'
import Loader from '../../../shared/components/Loader/Loader'
import { setIsModalOpen } from '../../../store/reducers/Shared'
import TopTemplate from '../../TopTemplate/TopTemplate'

import ProfileEllipse from './img/zxc1.jpg'
import {
  Card,
  CreateButtonContainer,
  CreateTeamContainer,
  Input,
  InputContainer,
  MainContainer,
  XContainer,
} from './CreateTeamForm.styles'
import MultiStepRegistration from "../RegistrationPipeline/components/MultiStepRegistration/MultiStepRegistration";
import InfoForm from "../RegistrationPipeline/components/RegistrationForms/InfoForm";
import UserConcentrationForm
  from "../RegistrationPipeline/components/RegistrationForms/UserConcentrationForm/UserConcentrationForm";
import UserExperienceForm
  from "../RegistrationPipeline/components/RegistrationForms/UserExperienceForm/UserExperienceForm";
import UserEducationForm
  from "../RegistrationPipeline/components/RegistrationForms/UserEducationForm/UserEducationForm";
import UserLinksForm from "../RegistrationPipeline/components/RegistrationForms/UserLinksForm/UserLinksForm";
import UserAvatarForm from "../RegistrationPipeline/components/RegistrationForms/UserAvatarForm/UserAvatarForm";
import {createTeamValidation} from "../../../schemas";

function CreateTeamForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const [teamName, setTeamName] = useState('')
  const [teamAvatar, setTeamAvatar] = useState(null)

  const [country, setCountry] = useState('')
  const { mutate: createTeam, isLoading: isCreatingTeam } = useCreateTeam(teamAvatar)
  const { data: user, isLoading: isUserLoading } = useCheckAuth()
  const userId = user?._id
  const steps  = [
    {index: 0, component: <InfoForm />},

  ]

  const initialValues = {
    name: 'string',
    tag: 'string',
    type: 'string',
    country: 'string',
    description: 'string',
    members: [],
    file: null,
  }
  const handleClose = () => {
    navigate('/team', { replace: true })
  }

  const handleSaveClose = () => {
    dispatch(setIsModalOpen(false))
  }

  const onCrop = (preview) => {
    setTeamAvatar(preview)
  }
  const handleSubmit = async () => {
    if (isEqual(teamName, '') || isEqual(country, '')) {
      enqueueSnackbar('Fill in empty fields!', {
        preventDuplicate: true,
      })
    } else {
      if (user.team) {
        enqueueSnackbar('You have a team already!', {
          preventDuplicate: true,
        })
      } else {
        createTeam({
          name: teamName,
          country,
          leader: userId,
          type: 'open',
          description: 'A group of skilled individuals who work together on projects',
        })
        setTeamName('')
        setCountry('')
      }
    }
  }

  const loadTeamAvatar = () => {
    dispatch(setIsModalOpen(true))
  }

  if (isUserLoading || isCreatingTeam) {
    return <Loader />
  }

  return (
    <>
      <MultiStepRegistration steps={steps} validationSchema={createTeamValidation} initialValues={initialValues}/>
      {/*<CreateTeamContainer>*/}
      {/*  <TopTemplate />*/}
      {/*  <Card>*/}
      {/*    <MainContainer>*/}
      {/*      <XContainer onClick={handleClose}>*/}
      {/*        <X />*/}
      {/*      </XContainer>*/}
      {/*      <div>*/}
      {/*        <UserAvatar src={teamAvatar ? teamAvatar : ProfileEllipse} alt="team-avatar" />*/}
      {/*        <AvatarLoadModal handleSaveClose={handleSaveClose} onCrop={onCrop} />*/}
      {/*        <AvatarEditButton onClick={loadTeamAvatar} />*/}
      {/*      </div>*/}
      {/*      <InputContainer>*/}
      {/*        <Input*/}
      {/*          placeholder="Team name"*/}
      {/*          onChange={(e) => setTeamName(e.target.value)}*/}
      {/*          value={teamName}*/}
      {/*        />*/}
      {/*      </InputContainer>*/}

      {/*      <InputContainer>*/}
      {/*        <Input*/}
      {/*          placeholder="Country"*/}
      {/*          onChange={(e) => setCountry(e.target.value)}*/}
      {/*          value={country}*/}
      {/*        />*/}
      {/*      </InputContainer>*/}
      {/*      <CreateButtonContainer onClick={handleSubmit}>Create</CreateButtonContainer>*/}
      {/*    </MainContainer>*/}
      {/*  </Card>*/}
      {/*</CreateTeamContainer>*/}
    </>
  )
}

export default CreateTeamForm
