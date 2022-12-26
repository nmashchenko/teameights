// * Modules
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import isEqual from 'lodash/isEqual'

// * Redux
import { useSelector, useDispatch } from 'react-redux'
import { userAuth } from '../../../store/reducers/UserAuth'

// API
import createTeam from '../../../api/endpoints/team'

// * Assets
import X from '../../../assets/X'
import ProfileEllipse from './img/zxc1.jpg'
import ProfileEditIcon from '../../../assets/ProfileEditIcon'
import TopTemplate from '../../TopTemplate/TopTemplate'

import {
  CreateTeamContainer,
  Card,
  MainContainer,
  XContainer,
  ProfileContainer,
  Input,
  ProfileEditContainer,
  InputContainer,
  CreateButtonContainer,
} from './CreateTeamForm.styles'
import {useCheckAuth} from "../../../api/hooks/useCheckAuth";

function CreateTeamForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()

  const [teamName, setTeamName] = useState('')
  const [country, setCountry] = useState('')

  const {data: userData} = useCheckAuth()
  const user = userData?.data
  const { updateUser } = userAuth.actions
  const userId = user._id

  const handleClose = () => {
    navigate('/team', { replace: true })
  }

  const handleSubmit = async () => {
    if (isEqual(teamName, '') || isEqual(country, '')) {
      enqueueSnackbar('Fill in empty fields!', {
        preventDuplicate: true,
      })
    } else {
      const value = await createTeam.createTeam(teamName, country, [userId])
      console.log(value)
      if (isEqual(value.data, {})) {
        enqueueSnackbar('You have a team already!', {
          preventDuplicate: true,
        })
      } else {
        dispatch(updateUser(value.data))
        setTeamName('')
        setCountry('')
        navigate('/myteam')
      }
    }
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
              <ProfileContainer src={ProfileEllipse} alt="crown" />
              <ProfileEditContainer>
                <ProfileEditIcon />
              </ProfileEditContainer>
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
