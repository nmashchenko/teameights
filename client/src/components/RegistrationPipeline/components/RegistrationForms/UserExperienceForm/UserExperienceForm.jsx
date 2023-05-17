import React from 'react'

import {
  userExperienceOptions,
  userLeaderOptions,
} from '../../../../../constants/finishRegistrationData'
import CustomRadioButtonsGroup from '../../../../../shared/components/CustomRadioButtonsGroup/CustomRadioButtonsGroup'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import { NoteContainer, NoteText, QuestionSection, QuestionText } from './UserExperienceForm.styles'

const UserExperienceForm = () => {
  return (
    <ContentContainer rows={2}>
      <QuestionSection>
        <QuestionText>How many years of experience you have?</QuestionText>
        <CustomRadioButtonsGroup name="experience" options={userExperienceOptions} />
      </QuestionSection>
      <QuestionSection>
        <QuestionText>Do you want to be a leader of the team?</QuestionText>
        <CustomRadioButtonsGroup name="leader" options={userLeaderOptions} />
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
