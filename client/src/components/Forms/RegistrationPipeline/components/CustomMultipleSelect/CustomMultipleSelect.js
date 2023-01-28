// * Modules
import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { includes } from 'lodash'

// * Assets
import ArrowDown from '../../../../../assets/Arrows/ArrowDown'
import ArrowDownRed from '../../../../../assets/Arrows/ArrowDownRed'

import { Item, SelectCustom } from './CustomMultipleSelect.styles'
// * Helpers
import MenuProps from './MenuProps'

const CustomSelect = ({ data, handleData, options, errors, error, multiple = true }) => {
  const animation = includes(errors, error) ? undefined : 'none'

  return (
    <>
      <FormControl sx={{ width: '400px' }}>
        <SelectCustom
          value={data}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          IconComponent={includes(errors, error) ? ArrowDownRed : ArrowDown}
          onChange={handleData}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          MenuProps={MenuProps}
          animation={animation}
          sx={{ height: 35 }}
          multiple={multiple}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', overflow: 'hidden', gap: 0.5 }}>
              {multiple ? (
                selected
                  .filter((item, index) => index < 2)
                  .map((item) => (
                    <Chip
                      icon={<CodeIcon />}
                      key={item}
                      label={item}
                      sx={{
                        background: '#2E3239',
                        color: 'white',
                        borderRadius: '5px',
                        marginRight: '5px',
                        height: '30px',
                      }}
                    />
                  ))
              ) : (
                <Chip
                  icon={<CodeIcon />}
                  key={selected}
                  label={selected}
                  sx={{
                    background: '#2E3239',
                    color: 'white',
                    borderRadius: '5px',
                    marginRight: '5px',
                    height: '30px',
                  }}
                />
              )}

              {selected.length > 2 && multiple && (
                <Chip
                  key={`+${selected.length - 2} more`}
                  label={`+${selected.length - 2} more`}
                  sx={{
                    background: '#2E3239',
                    color: 'white',
                    borderRadius: '5px',
                    marginRight: '5px',
                    height: '30px',
                  }}
                />
              )}
            </Box>
          )}
        >
          {options.map(({ label }) => (
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
