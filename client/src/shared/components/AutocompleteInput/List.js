import { Grid } from '@mui/material'

import { LOCAL_PATH } from '../../../http'

export const List = ({ props, option }) => {
  return (
    <li {...props}>
      <Grid container alignItems="center">
        <Grid item sx={{ display: 'flex', width: 38 }}>
          <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={option.image} />
        </Grid>
        <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
          <h3 style={{ fontSize: '18px', color: 'white', fontWeight: 400 }}>{option.username}</h3>
        </Grid>
      </Grid>
    </li>
  )
}
