// * Modules
import React, { useEffect, useState } from 'react'
import countryList from 'react-select-country-list'
import FormControl from '@mui/material/FormControl'
import { includes } from 'lodash'

// * Assets
import ArrowDown from '../../../../assets/Arrows/ArrowDown'
import ArrowDownRed from '../../../../assets/Arrows/ArrowDownRed'
// * Constants
import { GREEN, WHITE } from '../../../../constants/colors'

import { Item, Line, SelectCustom } from './CustomSelect.styles'
// * Helpers
import MenuProps from './MenuProps'

const CustomSelect = ({ country, handleCountry, errors }) => {
  const [countries, setCountries] = useState([])

  const animation = includes(errors, 'country') ? undefined : 'none'

  useEffect(() => {
    const data = countryList().getData()

    setCountries(data)
  }, [])

  return (
    <>
      <FormControl sx={{ margin: '10px 0 0 0', width: '240px', padding: '0px' }}>
        <SelectCustom
          value={country}
          IconComponent={includes(errors, 'country') ? ArrowDownRed : ArrowDown}
          onChange={handleCountry}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={MenuProps}
          animation={animation}
          sx={{
            background: 'none',
            height: '45px',
            border: 'none',
            fontSize: '18px',
            color: WHITE.main,
          }}
        >
          {countries.map(({ label, value }) => (
            <Item key={label} value={label}>
              {label}
            </Item>
          ))}
        </SelectCustom>
      </FormControl>
      {includes(errors, 'country') ? <Line background="#cf625e" /> : <Line animation="none" />}
    </>
  )
}

export default CustomSelect
