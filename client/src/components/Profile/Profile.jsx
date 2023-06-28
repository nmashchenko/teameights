import { useNavigate, useParams } from 'react-router-dom'
import { Form, Formik } from 'formik'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useEditUserDetails } from '../../api/hooks/user/useEditUserDetails'
import { useGetUserById } from '../../api/hooks/user/useGetUserById'
import PlatformLogo from '../../assets/Platform/TeameightsLogo'
import ROUTES from '../../constants/routes'
import { usePrompt } from '../../hooks/usePrompt'
import { LOCAL_PATH } from '../../http'
import { editProfileValidation } from '../../schemas'
import { LogoContainer } from '../../shared/components/AppHeader/AppHeader.styles'
import CustomButton from '../../shared/components/CustomButton/CustomButton'
import CustomInput from '../../shared/components/Formik/CustomInput/CustomInput'
import CustomSelect from '../../shared/components/Formik/CustomSelect/CustomSelect'
import CustomTextArea from '../../shared/components/Formik/CustomTextArea/CustomTextArea'
import Loader from '../../shared/components/Loader/Loader'
import { Button } from '../../shared/styles/Button.styles'
import { ErrorMessage } from '../../shared/styles/Tpography.styles'
import { calculateAge } from '../../utils/calculateAge'
import Page404Form from '../Forms/Page404Form/Page404Form'

import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import ResumeInfo from './components/ResumeInfo/ResumeInfo'
import { LogoWrapper, ProfileContainer, ProfileWrapper } from './Profile.styles'

const Profile = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { mutate: editUserDetails, isLoading } = useEditUserDetails()
  const { data, isLoading: isUserLoading, error } = useGetUserById(id)
  const { data: currentUser, isFetching } = useCheckAuth()

  const showingUser = data?.data

  const teamSearchHandler = () => {
    navigate('/teams')
  }

  const handleSubmit = (values) => {
    const {
      fullName,
      description,
      concentration,
      country,
      experience,
      github,
      telegram,
      linkedIn,
      programmingLanguages,
      frameworks,
    } = values
    const modifiedUserData = {
      email: showingUser.email,
      fullName,
      description,
      concentration,
      country,
      experience,
      links: {
        github,
        telegram,
        linkedIn,
      },
      programmingLanguages,
      frameworks,
    }

    editUserDetails(modifiedUserData)
  }

  if (isLoading || isUserLoading || isFetching) {
    return <Loader />
  }

  if ((!isUserLoading && !showingUser) || error) {
    return <Page404Form findText="Couldn't find the requested showingUser." paddingLeft="88px" />
  }

  /* If not, check if current showingUser has team and if team members have current id in array */

  return (
    <Formik
      initialValues={{
        fullName: showingUser?.fullName,
        github: showingUser?.links?.github,
        linkedIn: showingUser?.links?.linkedIn,
        telegram: showingUser?.links?.telegram,
        description: showingUser?.description,
        concentration: showingUser?.concentration,
        country: showingUser?.country,
        experience: showingUser?.experience,
        programmingLanguages: showingUser?.programmingLanguages,
        frameworks: showingUser?.frameworks,
      }}
      validationSchema={editProfileValidation}
      onSubmit={handleSubmit}
    >
      {({ values, errors, dirty }) => {
        usePrompt('You have unsaved changes. Do you want to discard them?', dirty)

        return (
          <Form>
            <ProfileWrapper>
              <LogoWrapper>
                <PlatformLogo />
              </LogoWrapper>
              <ProfileContainer>
                <ProfileInfo showingUser={showingUser} id={id} currentUser={currentUser} />
                <ResumeInfo showingUser={showingUser} />
              </ProfileContainer>
            </ProfileWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Profile
