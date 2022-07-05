// * Modules
import React, {useState, useContext} from 'react'
import { Context } from '..'
import {observer} from "mobx-react-lite";

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {store} = useContext(Context)

  return (
    <div>
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
      <button onClick={() => store.login(email, password)}>Login</button>
    </div>
  )
}

export default observer(LoginForm)