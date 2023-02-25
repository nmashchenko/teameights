// * Modules
import React, { useState } from 'react'
// * Redux
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'
import { useSnackbar } from 'notistack'

// API
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import AvatarEditIcon from '../../../assets/AvatarEditIcon'
// * Assets
import X from '../../../assets/X'
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
import {useCreateTeam} from "../../../api/hooks/team/useCreateTeam";
import Loader from "../../../shared/components/Loader/Loader";
import ModalWindow from "../../../shared/components/ModalWindow/ModalWindow";
import {AvatarWrapper} from "../RegistrationPipeline/components/RegistrationForms/UserAvatarForm/UserAvatarForm.styles";
import {Button} from "../../../shared/styles/Button.styles";
import AvatarEditButton from "../../../shared/components/Forms/UserAvatar/AvatarEditButton/AvatarEditButton";
import {setIsModalOpen} from "../../../store/reducers/Shared";
import {useDispatch} from "react-redux";
import Avatar from "@mikhail2404/react-avatar-edit";
import {UserAvatar} from "../../../shared/components/Forms/UserAvatar/UserAvatar.styles";
import {useUpdateAvatar} from "../../../api/hooks/auth/useUpdateAvatar";

function CreateTeamForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const { mutate: updateAvatar } = useUpdateAvatar('teams')

  const [teamName, setTeamName] = useState('')
  const [teamAvatar, setTeamAvatar] = useState(null)

  const [country, setCountry] = useState('')
  const {mutate: createTeam} = useCreateTeam()
  const { data: user, isLoading: isUserLoading  } = useCheckAuth()
  const userId = user?._id
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
        const value = createTeam({name: teamName, country, leader: userId, type: "open", description: "A group of skilled individuals who work together on projects",})
        console.log({value})
        setTeamName('')
        setCountry('')
      }
    }
  }

  const loadTeamAvatar = () => {
    dispatch(setIsModalOpen(true))

  }
  if(isUserLoading){
    return <Loader />
  }
  return (
    <>
      <CreateTeamContainer>
        <TopTemplate />
        <Card>
          <MainContainer>
            <XContainer onClick={handleClose}>
              <X />
            </XContainer>
            <div>
              <UserAvatar src={teamAvatar ? teamAvatar : ProfileEllipse} alt="team-avatar" />
              <ModalWindow>
                <AvatarWrapper>
                  <Avatar
                      imageHeight={200}
                      height={200}
                      width={200}
                      onCrop={onCrop}
                      cropRadius={40}
                      minCropRadius={40}
                      labelStyle={{
                        cursor: 'pointer',
                        color: '#5D9D0B',
                        fontWeight: 'bold',
                        fontSize: '20px',
                      }}
                  />
                  <Button marginBottom="0" onClick={handleSaveClose}>
                    save
                  </Button>
                </AvatarWrapper>
              </ModalWindow>
              <AvatarEditButton onClick={loadTeamAvatar} />
            </div>
            <InputContainer>
              <Input
                placeholder="Team name"
                onChange={(e) => setTeamName(e.target.value)}
                value={teamName}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
            </InputContainer>
            <CreateButtonContainer onClick={handleSubmit}>Create</CreateButtonContainer>
          </MainContainer>
        </Card>
      </CreateTeamContainer>
    </>
  )
}

export default CreateTeamForm
