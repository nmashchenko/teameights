import { ToolbarContainer, NavContainer } from './TopTemplate.styles'

import TeameightsLogo from '../../assets/Team/TeameightsLogo.js'
import NavBar from '../NavBar/NavBar'

// * API
import authApi from '../../api/endpoints/auth'

// * Redux
import { useSelector, useDispatch } from 'react-redux'

// * Modules
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {useCheckAuth} from "../../api/hooks/useCheckAuth";

const TopTemplate = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUserLogout = () => {
    dispatch(authApi.logoutUser())
    navigate('/auth/login', { replace: true })
  }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     dispatch(authApi.checkAuth())
  //   }
  // }, [])


  return (
    <ToolbarContainer>
      <NavContainer>
        <NavBar handleUserLogout={handleUserLogout} />
      </NavContainer>
      <TeameightsLogo />
    </ToolbarContainer>
  )
}

export default TopTemplate
