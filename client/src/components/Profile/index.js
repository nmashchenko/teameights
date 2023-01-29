// * Modules
import { useNavigate } from 'react-router-dom'
import { Telegram } from '@mui/icons-material'

// * API
import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useGetTeamData } from '../../api/hooks/team/useGetTeamData'
import Email from '../../assets/UserProfile/Email'
import Github from '../../assets/UserProfile/Github'
import Linkedin from '../../assets/UserProfile/Linkedin'
import Location from '../../assets/UserProfile/Location'
import Star from '../../assets/UserProfile/Star'
import ROUTES from '../../constants/routes'
import {
  frameworkColors,
  frameworkTextColors,
} from '../../screens/UsersList/components/UserCard/FrameworkColors'
import languageOptions from '../../screens/UsersList/components/UserCard/ProgrammingLanguages'
import { Framework } from '../../screens/UsersList/components/UserCard/UserCard.styles'
import Loader from '../../shared/components/Loader/Loader'
import { Button } from '../../shared/styles/Button.styles'
import { CustomLink } from '../../shared/styles/Link.styles'

// * Assets
import Photo from './Photo.jpg'
// * Styles
import {
  BannerLine,
  EditBtnDiv,
  EditButton,
  IconTextContainer,
  ImgContainer,
  Information,
  InformationRow,
  LeftCard,
  ProfileLine,
  ProgrammingLanguage,
  RightCard,
  RightCardData,
  RightContainer,
  SocialRow,
  SocialWrapper,
  Text,
  TextContainer,
} from './Profile.styles'
import {useState} from "react";
import ProfileForm from "./components/ProfileForm/ProfileForm";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";

const Index = () => {
  const [isEditing, setIsEditing] = useState(true)
  const { data: user, isLoading: isUserDataLoading } = useCheckAuth()
  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData()

  const navigate = useNavigate()

  if (isUserDataLoading || isUserTeamLoading) {
    return <Loader />
  }

  if (!user) {
    return <Button onClick={() => navigate(ROUTES.login)}>Login</Button>
  }

  return (
    <Information>
      {isEditing ? <ProfileForm user={user } team={team}/> : <ProfileDetails user={user} team={team}/>}
    </Information>
  )
}

export default Index
