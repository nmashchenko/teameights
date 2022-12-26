// * Modules
import React, { useState } from 'react'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'
import { useSnackbar } from 'notistack'

// API
import createTeam from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/useCheckAuth'
import ProfileEditIcon from '../../../assets/ProfileEditIcon'
// * Assets
import X from '../../../assets/X'
import { userAuth } from '../../../store/reducers/UserAuth'
import TopTemplate from '../../TopTemplate/TopTemplate'

import ProfileEllipse from './img/zxc1.jpg'
import {
  Card,
  CreateButtonContainer,
  CreateTeamContainer,
  Input,
  InputContainer,
  MainContainer,
  ProfileContainer,
  ProfileEditContainer,
  XContainer,
} from './CreateTeamForm.styles'

function CreateTeamForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()

  const [teamName, setTeamName] = useState('')
  const [country, setCountry] = useState('')

  const { data: userData } = useCheckAuth()
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
