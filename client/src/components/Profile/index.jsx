import { useNavigate } from 'react-router-dom'
import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useGetTeamData } from '../../api/hooks/team/useGetTeamData'
import ROUTES from '../../constants/routes'
import Loader from '../../shared/components/Loader/Loader'
import { Button } from '../../shared/styles/Button.styles'
import {useState} from "react";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import ProfileForm from "./components/ProfileForm";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const { data: user, isLoading: isUserDataLoading } = useCheckAuth()
  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData()

  const navigate = useNavigate()

  const editorToggler = () => {
    setIsEditing(prevIsEditing => !prevIsEditing)
  }

  if (isUserDataLoading || isUserTeamLoading) {
    return <Loader />
  }

  if (!user) {
    return <Button onClick={() => navigate(ROUTES.login)}>Login</Button>
  }

  const profileProps = {user, team, onEditorToggle: editorToggler}
  return (
    <>
      {isEditing ? <ProfileForm {...profileProps}/> : <ProfileDetails {...profileProps}/>}
    </>
  )
}

export default Profile
