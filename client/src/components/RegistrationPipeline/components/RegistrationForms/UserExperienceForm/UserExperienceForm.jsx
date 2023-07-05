import React from 'react'

import {
  userExperienceOptions,
  userLeaderOptions,
} from '../../../../../shared/constants/finishRegistrationData'
import CustomRadioButtonsGroup from '../../../../../shared/ui/Formik/CustomRadioButtonsGroup/CustomRadioButtonsGroup'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import { NoteContainer, NoteText, QuestionSection, QuestionText } from './UserExperienceForm.styles'

const UserExperienceForm = () => {
  return (
    <ContentContainer rows={2} gap={'3rem'}>
      <QuestionSection>
        <QuestionText>How many years of experience you have?</QuestionText>
        <CustomRadioButtonsGroup name="experience" options={userExperienceOptions} type="number" />
      </QuestionSection>
      <QuestionSection>
        <QuestionText>Do you want to be a leader of the team?</QuestionText>
        <CustomRadioButtonsGroup name="leader" options={userLeaderOptions} type="text" />
        <NoteContainer>
          <NoteText>
            Please note that leaders typically have 1-3+ years of experience and will be required to
            pass a leadership test.
          </NoteText>
        </NoteContainer>
      </QuestionSection>
    </ContentContainer>
  )
}

export default UserExperienceForm
