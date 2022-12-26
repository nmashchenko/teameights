import React, { useEffect } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import { useFormikContext } from 'formik'

import {
  userExperienceOptions,
  userLeaderOptions,
} from '../../../../../../constants/finishRegistrationData'
import CustomRadioButtonsGroup from '../../../../../../shared/components/CustomRadioButtonsGroup/CustomRadioButtonsGroup'
import { Text } from '../../../../../../shared/styles/Tpography.styles'
import FormButton from '../../MultiStepRegistration/components/FormButton/FormButton'
import { Button, ButtonDisabled } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import { AlertContainer, ContentContainer } from './UserExperienceForm.styles'

const UserExperienceForm = () => {
  const { errors } = useFormikContext()

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
      <FormButton errors={errors} />
    </ContentContainer>
  )
}

export default UserExperienceForm
