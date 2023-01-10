import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import Chip from '@mui/material/Chip'

import { SelectValueWrapper } from './SelectValue.styles'

const SelectValue = ({ selected, max = null }) => {
  const value = Array.isArray(selected) ? selected : [selected]

  if (!selected) {
    return
  }

  return (
    <SelectValueWrapper>
      {max
        ? value.slice(0, max).map((item, index) => (
            <Chip
              icon={index < max - 1 ? <CodeIcon /> : <></>}
              key={item}
              label={index < max - 1 ? item : `+${selected.length - 2} more`}
              sx={{
                background: '#2E3239',
                color: 'white',
                borderRadius: '5px',
                marginRight: '5px',
                height: '30px',
              }}
            />
          ))
        : value.map((item, index) => (
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
          ))}
    </SelectValueWrapper>
  )
}

export default SelectValue
