import { ToolbarContainer, NavContainer } from './TopTemplate.styles'

import TeameightsLogo from '../../assets/Team/TeameightsLogo.js'
import NavBar from '../NavBar/NavBar'

// * API
import authApi from '../../api/endpoints/auth'

// * Redux
import { useSelector, useDispatch } from 'react-redux'

const TopTemplate = () => {
  const dispatch = useDispatch()

  const handleUserLogout = () => {
    dispatch(authApi.logoutUser())
  }

  /**
   * Get global state from redux
   */
  const { user } = useSelector((state) => state.userReducer)

  return (
    <ToolbarContainer>
      <NavContainer>
        <NavBar user={user.user} handleUserLogout={handleUserLogout} />
      </NavContainer>
      <TeameightsLogo />
    </ToolbarContainer>
  )
}

export default TopTemplate
