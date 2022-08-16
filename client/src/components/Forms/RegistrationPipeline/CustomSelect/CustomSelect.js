// * Modules
import React, { useState, useEffect } from 'react'
import countryList from 'react-select-country-list'
import FormControl from '@mui/material/FormControl'
import { SelectCustom, Item } from './CustomSelect.styles'
import { includes } from 'lodash'

// * Constants
import { GREEN, WHITE } from '../../../../constants/colors'

// * Helpers
import MenuProps from './MenuProps'

// * Assets
import ArrowDown from '../../../../assets/Arrows/ArrowDown'
import ArrowDownRed from '../../../../assets/Arrows/ArrowDownRed'

const CustomSelect = ({ country, handleCountry, errors }) => {
  const [countries, setCountries] = useState([])

  const animation = includes(errors, 'country') ? undefined : 'none'

  useEffect(() => {
    const data = countryList().getData()
    setCountries(data)
  }, [])
  return (
    <>
      <FormControl sx={{ margin: '10px 0 30px 0', width: '240px' }}>
        <SelectCustom
          value={country}
          IconComponent={includes(errors, 'country') ? ArrowDownRed : ArrowDown}
          onChange={handleCountry}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={MenuProps}
          animation={animation}
          sx={{
            borderRadius: '5px',
            background: 'none',
            height: '45px',
            border: includes(errors, 'country')
              ? `1px solid #cf625e`
              : `1px solid ${GREEN.alternativeBorder}`,
            paddingRight: '10px',
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
    </>
  )
}

export default CustomSelect
