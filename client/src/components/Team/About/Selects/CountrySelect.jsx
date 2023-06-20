import React, { memo, useMemo } from 'react'
import countryList from 'react-select-country-list'

import { B2fs, B2fw, B2lh } from '../../../../constants/fonts'
import CustomSelect from '../../../../shared/components/Formik/CustomSelect/CustomSelect'
import { PlaceholderText } from '../../../Teammates/components/SelectField/SelectField.styles'

const CountrySelect = ({ team }) => {
  const countriesOptions = useMemo(() => countryList().getData(), [])

  return (
    <CustomSelect
      multiple={false}
      label="Country"
      name="country"
      options={countriesOptions}
      line={false}
      hideLabelOnSelect={true}
      renderValue={(selected) => {
        if (selected?.length === 0) {
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
        width: '100%',
        fontSize: B2fs,
        fontWeight: B2fw,
        lineHeight: B2lh,
      }}
    />
  )
}

export default CountrySelect
