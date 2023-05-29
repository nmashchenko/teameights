import React, { memo } from 'react'

import typeOptions from '../../../../constants/types'
import CustomSelect from '../../../../shared/components/CustomSelect/CustomSelect'
import { PlaceholderText } from '../../../Teammates/components/SelectField/SelectField.styles'

const TypeSelect = ({ team, backgroundColor }) => {
  return (
    <CustomSelect
      multiple={false}
      label="type"
      name="type"
      options={typeOptions}
      line={false}
      hideLabelOnSelect={true}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <PlaceholderText style={{ marginRight: '1rem', textAlign: 'start', fontWeight: '400' }}>
              {team.type}
            </PlaceholderText>
          )
        }

        return selected
      }}
      styles={{
        height: '38px',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
        borderBottom: '1px solid #86878B',
        width: '100%',
        backgroundColor: `${backgroundColor[3]}`,
      }}
    />
  )
}

export default memo(TypeSelect)
