import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import UserCard from './components/UserCard/UserCard';


function UsersList() {
  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '130px', flexDirection: 'column'}}>
    <CssBaseline />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '130px'}}>
          <UserCard countryCode='US'/>
          <UserCard countryCode='UA'/>
          <UserCard countryCode='GE'/>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '130px'}}>
        <UserCard countryCode='FI'/>
        <UserCard countryCode='BE'/>
        <UserCard countryCode='FR'/>
     </div>

    </div>
  )
}

export default UsersList