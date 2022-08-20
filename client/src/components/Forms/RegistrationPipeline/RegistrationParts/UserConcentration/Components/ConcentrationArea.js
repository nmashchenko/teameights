// * Modules
import React from 'react'
import { includes } from 'lodash'

// * Other
import CustomMultipleSelect from '../../../CustomMultipleSelect/CustomMultipleSelect'

// * Styles
import { Text, ConcetrationContainer, Line } from '../UserConcentration.styles'

const ConcentrationArea = ({
  concentration,
  handleConcentration,
  concentrationsOptions,
  errors,
}) => {
  return (
    <ConcetrationContainer margin="10px 0 0 0">
      <Text fontSize="16px" fontWeight="400" margin="0 0 10px 0">
        Concentration
      </Text>
      <CustomMultipleSelect
        data={concentration}
        handleData={handleConcentration}
        options={concentrationsOptions}
        errors={errors}
        multiple={false}
        error={'concentration'}
      />
      {includes(errors, 'concentration') ? (
        <Line border="1px solid #cf625e" />
      ) : (
        <Line animation="none" />
      )}
    </ConcetrationContainer>
  )
}

export default ConcentrationArea
