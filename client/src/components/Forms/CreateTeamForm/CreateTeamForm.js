// * Modules
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import isEqual from 'lodash/isEqual'

// API
import createTeam from '../../../api/endpoints/team'

// * Assets
import X from '../../../assets/X'
import ProfileEllipse from './img/ProfileEllipse.png'
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

function CreateTeamForm() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [teamName, setTeamName] = useState('')
  const [country, setCountry] = useState('')

  const { user } = useSelector((state) => state.userReducer)
  const userId = user.user._id

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
      if (isEqual(value.data, {})) {
        enqueueSnackbar('You have a team already!', {
          preventDuplicate: true,
        })
      } else {
        setTeamName('')
        setCountry('')
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
            <ProfileContainer>
              <img src={ProfileEllipse} alt="crown"></img>
              <ProfileEditContainer>
                <ProfileEditIcon />
              </ProfileEditContainer>
            </ProfileContainer>
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
