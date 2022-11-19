// * Modules
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// * Assets
import X from '../../../assets/X'
import ProfileEllipse from './img/ProfileEllipse.png'
import CrownImg from './img/Crown.svg'
import ProfileEditIcon from '../../../assets/ProfileEditIcon'
import TopTemplate from '../../TopTemplate/TopTemplate'

import {
  CreateTeamContainer,
  Card,
  MainContainer,
  XContainer,
  ProfileContainer,
  CrownContainer,
  Input,
  ProfileEditContainer,
  InputContainer,
  CreateButtonContainer,
} from './CreateTeamForm.styles'

function CreateTeamForm() {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/team', { replace: true })
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
              {/* <CrownContainer>
              <img src={CrownImg} alt="crown"></img>
            </CrownContainer> */}
              <img src={ProfileEllipse} alt="crown"></img>
              <ProfileEditContainer>
                <ProfileEditIcon />
              </ProfileEditContainer>
            </ProfileContainer>
            <InputContainer>
              <Input placeholder="Team name" />
            </InputContainer>

            <InputContainer>
              <Input placeholder="Country" />
            </InputContainer>
            <CreateButtonContainer>Create</CreateButtonContainer>
          </MainContainer>
        </Card>
      </CreateTeamContainer>
    </>
  )
}

export default CreateTeamForm
