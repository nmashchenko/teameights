import { includes } from 'lodash'
import React, { useState } from 'react'

// * Styles
import {
  ExperienceContainer,
  ExperienceButton,
  ExperienceButtonClicked,
} from '../UserExperience.styles'

const ExperienceArea = ({ setExperience, setErrors, errors }) => {
  const [zeroOneClicked, setZeroOneClicked] = useState(false)
  const [oneThreeClicked, setOneThreeClicked] = useState(false)
  const [threePlusClicked, setThreePlusClicked] = useState(false)

  const handleZeroOne = () => {
    setErrors((errors) => errors.filter((word) => word !== 'experience'))
    setExperience('0-1')
    setZeroOneClicked(true)
    setOneThreeClicked(false)
    setThreePlusClicked(false)
  }

  const handleOneThree = () => {
    setErrors((errors) => errors.filter((word) => word !== 'experience'))
    setExperience('1-3')
    setZeroOneClicked(false)
    setOneThreeClicked(true)
    setThreePlusClicked(false)
  }

  const handleThreePlus = () => {
    setErrors((errors) => errors.filter((word) => word !== 'experience'))
    setExperience('3+')
    setZeroOneClicked(false)
    setOneThreeClicked(false)
    setThreePlusClicked(true)
  }

  return (
    <ExperienceContainer>
      {zeroOneClicked ? (
        <ExperienceButtonClicked onClick={handleZeroOne}>0-1 years</ExperienceButtonClicked>
      ) : includes(errors, 'experience') ? (
        <ExperienceButton onClick={handleZeroOne} border="1px solid #cf625e">
          0-1 years
        </ExperienceButton>
      ) : (
        <ExperienceButton onClick={handleZeroOne} animation="none">
          0-1 years
        </ExperienceButton>
      )}
      {oneThreeClicked ? (
        <ExperienceButtonClicked onClick={handleOneThree}>1-3 years</ExperienceButtonClicked>
      ) : includes(errors, 'experience') ? (
        <ExperienceButton onClick={handleOneThree} border="1px solid #cf625e">
          1-3 years
        </ExperienceButton>
      ) : (
        <ExperienceButton onClick={handleOneThree} animation="none">
          1-3 years
        </ExperienceButton>
      )}
      {threePlusClicked ? (
        <ExperienceButtonClicked onClick={handleThreePlus}>3+ years</ExperienceButtonClicked>
      ) : includes(errors, 'experience') ? (
        <ExperienceButton onClick={handleThreePlus} border="1px solid #cf625e">
          3+ years
        </ExperienceButton>
      ) : (
        <ExperienceButton onClick={handleThreePlus} animation="none">
          3+ years
        </ExperienceButton>
      )}
    </ExperienceContainer>
  )
}

export default ExperienceArea
