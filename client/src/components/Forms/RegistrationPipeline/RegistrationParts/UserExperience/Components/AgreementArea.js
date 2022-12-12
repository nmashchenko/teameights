import React, { useState } from 'react'
import { includes } from 'lodash'

// * Styles
import {
  ExperienceButton,
  ExperienceButtonClicked,
  ExperienceContainer,
} from '../UserExperience.styles'

const AgreementArea = ({ setLeader, setErrors, errors }) => {
  const [agreed, setAgreed] = useState(false)
  const [disagreed, setDisagreed] = useState(false)

  const handleAgreed = () => {
    setErrors((errors) => errors.filter((word) => word !== 'leader'))
    setLeader(true)
    setAgreed(true)
    setDisagreed(false)
  }

  const handleDisagreed = () => {
    setErrors((errors) => errors.filter((word) => word !== 'leader'))
    setLeader(false)
    setAgreed(false)
    setDisagreed(true)
  }

  return (
    <ExperienceContainer>
      {agreed ? (
        <ExperienceButtonClicked onClick={handleAgreed}>YES</ExperienceButtonClicked>
      ) : includes(errors, 'leader') ? (
        <ExperienceButton onClick={handleAgreed} border="1px solid #cf625e">
          YES
        </ExperienceButton>
      ) : (
        <ExperienceButton onClick={handleAgreed} animation="none">
          YES
        </ExperienceButton>
      )}
      {disagreed ? (
        <ExperienceButtonClicked onClick={handleDisagreed}>NO</ExperienceButtonClicked>
      ) : includes(errors, 'leader') ? (
        <ExperienceButton onClick={handleDisagreed} border="1px solid #cf625e">
          NO
        </ExperienceButton>
      ) : (
        <ExperienceButton onClick={handleDisagreed} animation="none">
          NO
        </ExperienceButton>
      )}
    </ExperienceContainer>
  )
}

export default AgreementArea
