// * Modules
import React from 'react'
import { includes } from 'lodash'

// * Other
import CustomMultipleSelect from '../../../CustomMultipleSelect/CustomMultipleSelect'
// * Styles
import { ConcetrationContainer, Line, Text } from '../UserConcentration.styles'

const FrameworksArea = ({ frameworks, handleFrameworks, frameworksOptions, errors }) => {
  return (
    <ConcetrationContainer margin="10px 0 0 0">
      <Text fontWeight="400" margin="0 0 10px 0">
        Frameworks
      </Text>
      <CustomMultipleSelect
        data={frameworks}
        handleData={handleFrameworks}
        options={frameworksOptions}
        errors={errors}
        error={'frameworks'}
      />
      {includes(errors, 'frameworks') ? (
        <Line border="1px solid #cf625e" />
      ) : (
        <Line animation="none" />
      )}
    </ConcetrationContainer>
  )
}

export default FrameworksArea
