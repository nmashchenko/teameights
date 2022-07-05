// * Modules
import React, {useState, useContext} from 'react'
import { Context } from '..'
import {observer} from "mobx-react-lite";

const RegistrationForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [username, setUsername] = useState('')
  const {store} = useContext(Context)

  return (
    <div>
      <input
        onChange={e => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="Username"
      />
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="Password"
      />
      <input
        onChange={e => setPasswordRepeat(e.target.value)}
        value={passwordRepeat}
        type="text"
        placeholder="Repeat password"
      />
      <button onClick={() => store.registration(username, email, password, passwordRepeat)}>Registration</button>
    </div>
  )
}

export default observer(RegistrationForm);