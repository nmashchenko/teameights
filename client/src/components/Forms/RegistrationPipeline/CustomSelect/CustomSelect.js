// * Modules
import React, { useState, useEffect } from 'react'
import countryList from 'react-select-country-list'
import FormControl from '@mui/material/FormControl'
import { SelectCustom, Item } from './CustomSelect.styles'

// * Constants
import { GREEN, WHITE } from '../../../../constants/colors'

// * Helpers
import MenuProps from './MenuProps'

// * Assets
import ArrowDown from '../../../../assets/Arrows/ArrowDown'

const CustomSelect = ({ country, setCountry }) => {
  const [countries, setCountries] = useState([])
  const changeHandler = (event) => {
    setCountry(event.target.value)
  }

  useEffect(() => {
    const data = countryList().getData()
    setCountries(data)
  }, [])
  return (
    <>
      <FormControl sx={{ margin: '10px 0 30px 0', width: '240px' }}>
        <SelectCustom
          value={country}
          IconComponent={ArrowDown}
          onChange={changeHandler}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={MenuProps}
          sx={{
            borderRadius: '5px',
            background: 'none',
            height: '45px',
            border: `1px solid ${GREEN.alternativeBorder}`,
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
