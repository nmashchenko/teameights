// * Modules
import React from 'react'
import { includes, isEqual } from 'lodash'

// * Styles
import {
  AboutMeContainer,
  Text,
  TextArea,
  WordsCounter,
  WordsCounterContainer,
} from '../UserPersonalInfo.styles'

const AboutMeArea = ({ errors, handleDescription, description }) => {
  return (
    <AboutMeContainer>
      <Text fontSize="18px" fontWeight="400">
        About me
      </Text>
      {includes(errors, 'description') ? (
        <TextArea
          border="1px solid #cf625e"
          onChange={handleDescription}
          placeholder="Start typing here..."
          maxLength={200}
          value={description}
        />
      ) : (
        <TextArea
          onChange={handleDescription}
          placeholder="Start typing here..."
          maxLength={200}
          animation="none"
          value={description}
        />
      )}
      <WordsCounterContainer>
        {!isEqual(description.length, 200) ? (
          <WordsCounter>{description.length}/200</WordsCounter>
        ) : (
          <WordsCounter color="#cf625e">{description.length}/200</WordsCounter>
        )}
      </WordsCounterContainer>
    </AboutMeContainer>
  )
}

export default AboutMeArea
