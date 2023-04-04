import React from 'react'

import {
  userExperienceOptions,
  userLeaderOptions,
} from '../../../../../../constants/finishRegistrationData'
import CustomRadioButtonsGroup from '../../../../../../shared/components/CustomRadioButtonsGroup/CustomRadioButtonsGroup'
import { Text } from '../../../../../../shared/styles/Tpography.styles'

import { AlertContainer, ContentContainer } from './UserExperienceForm.styles'

const UserExperienceForm = () => {

  return (
    <ContentContainer>
      <Text fontSize="23px" fontWeight="400" margin="20px 0 0 0">
        How many years of experience you have?
      </Text>
      <CustomRadioButtonsGroup name="experience" options={userExperienceOptions} />
      <Text fontSize="23px" fontWeight="400" margin="40px 0 0 0">
        Do you want to be a leader of the team?
      </Text>
      <AlertContainer>
        <Text fontSize="16px" fontWeight="200" margin="15px 0 0 0" opacity="0.4">
          👑 Please note that leaders typically have 1-3+ years of experience and will be required
          to pass a leadership test.
        </Text>
      </AlertContainer>
      <CustomRadioButtonsGroup name="leader" options={userLeaderOptions} />
    </ContentContainer>
  )
}

export default UserExperienceForm
