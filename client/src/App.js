// * Modules
import React, { useState, useEffect, useContext } from 'react'
import { Context } from '.';
import { observer } from "mobx-react-lite";

// * Components
import LoginForm from "./components/LoginForm";
import RegistrationForm from './components/RegistrationForm';

// * Services
import UserService from './services/UserService'

function App() {
  const {store} = useContext(Context);
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data)
    } catch(err){
      console.log(err);
    }
  }

  if(store.isLoading) {
    return <div>Загрузка...</div>
  }

  if(!store.isAuth) {
    return (
      <>
          <h1>Please, authorize first!</h1>
          <LoginForm></LoginForm>
      </>
    )
  }

  return (
    <div>
      <h1>{store.isAuth ? `Authorized ${store.user.email}` : `Not authorized`}</h1>
      <h1>{store.user.isActivated ? `Account is activated` : `Please activate your account!`}</h1>
      <button onClick={() => store.logout()}>Log out</button>
      <div>
        <button onClick={getUsers}>Get users list</button>
      </div>
      {users.map(user => 
        <div key={user.email}>{user.email}</div>  
      )}
    </div>
  );
}
export default observer(App);
