// * Modules
import React from 'react'
import { includes } from 'lodash'

// * Other
import CustomMultipleSelect from '../../../CustomMultipleSelect/CustomMultipleSelect'

// * Styles
import { Text, ConcetrationContainer, Line } from '../UserConcentration.styles'

const ProgrammingLanguagesArea = ({
  programmingLanguages,
  handleProgrammingLanguages,
  programmingLanguagesOptions,
  errors,
}) => {
  return (
    <ConcetrationContainer margin="15px 0 0 0">
      <Text fontWeight="400" margin="0 0 10px 0">
        Programming Languages
      </Text>
      <CustomMultipleSelect
        data={programmingLanguages}
        handleData={handleProgrammingLanguages}
        options={programmingLanguagesOptions}
        errors={errors}
        error={'programmingLanguages'}
      />
      {includes(errors, 'programmingLanguages') ? (
        <Line border="1px solid #cf625e" />
      ) : (
        <Line animation="none" />
      )}
    </ConcetrationContainer>
  )
}

export default ProgrammingLanguagesArea
