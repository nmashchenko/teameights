// * Modules
import React from 'react'
import { includes, isEqual } from 'lodash'

// * Styles
import { TextArea, Text, WordsCounterContainer, WordsCounter } from '../UserPersonalInfo.styles'

const AboutMeArea = ({ errors, handleDescription, description }) => {
  return (
    <>
      <div>
        <Text fontSize="17px" fontWeight="400">
          About me
        </Text>
        {includes(errors, 'description') ? (
          <TextArea
            border="1px solid #cf625e"
            onChange={handleDescription}
            placeholder="Start typing here..."
            maxLength={200}
          />
        ) : (
          <TextArea
            onChange={handleDescription}
            placeholder="Start typing here..."
            maxLength={200}
            animation="none"
          />
        )}
        <WordsCounterContainer>
          {!isEqual(description.length, 200) ? (
            <WordsCounter>{description.length}/200</WordsCounter>
          ) : (
            <WordsCounter color="#cf625e">{description.length}/200</WordsCounter>
          )}
        </WordsCounterContainer>
      </div>
    </>
  )
}

export default AboutMeArea
