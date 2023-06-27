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
import { ProfileContainer, ProfileWrapper } from './Profile.styles'

const Profile = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { mutate: editUserDetails, isLoading } = useEditUserDetails()
  const { data, isLoading: isUserLoading, error } = useGetUserById(id)

  const user = data?.data

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
      email: user.email,
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

  if (isLoading || isUserLoading) {
    return <Loader />
  }

  if ((!isUserLoading && !user) || error) {
    return <Page404Form findText="Couldn't find the requested user." paddingLeft="88px" />
  }

  /* Check if current userId is the same as passed in params */

  /* If not, check if current user has team  */

  return (
    <Formik
      initialValues={{
        fullName: user?.fullName,
        github: user?.links?.github,
        linkedIn: user?.links?.linkedIn,
        telegram: user?.links?.telegram,
        description: user?.description,
        concentration: user?.concentration,
        country: user?.country,
        experience: user?.experience,
        programmingLanguages: user?.programmingLanguages,
        frameworks: user?.frameworks,
      }}
      validationSchema={editProfileValidation}
      onSubmit={handleSubmit}
    >
      {({ values, errors, dirty }) => {
        usePrompt('You have unsaved changes. Do you want to discard them?', dirty)

        return (
          <Form>
            <ProfileWrapper>
              {/* <LogoContainer>
                <PlatformLogo />
              </LogoContainer> */}
              <ProfileContainer>
                <ProfileInfo user={user} />
                <ResumeInfo user={user} />
              </ProfileContainer>
            </ProfileWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Profile
