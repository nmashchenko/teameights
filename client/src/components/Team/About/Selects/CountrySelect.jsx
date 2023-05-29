import React, { memo, useMemo } from 'react'
import countryList from 'react-select-country-list'

import { B2fs, B2fw, B2lh } from '../../../../constants/fonts'
import CustomSelect from '../../../../shared/components/CustomSelect/CustomSelect'
import { PlaceholderText } from '../../../Teammates/components/SelectField/SelectField.styles'

const CountrySelect = ({ team, backgroundColor }) => {
  const countriesOptions = useMemo(() => countryList().getData(), [])

  console.log('herre')

  return (
    <CustomSelect
      multiple={false}
      label="Country"
      name="countries"
      options={countriesOptions}
      line={false}
      hideLabelOnSelect={true}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <PlaceholderText style={{ marginRight: '1rem', textAlign: 'start', fontWeight: '400' }}>
              {team.country}
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
        backgroundColor: `${backgroundColor[2]}`,
        width: '100%',
        fontSize: B2fs,
        fontWeight: B2fw,
        lineHeight: B2lh,
      }}
    />
  )
}

export default memo(CountrySelect)
