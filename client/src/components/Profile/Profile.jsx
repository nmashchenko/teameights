import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Formik } from 'formik'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../api/hooks/shared/useUpdateAvatar'
import { useEditUserDetails } from '../../api/hooks/user/useEditUserDetails'
import { useGetUserById } from '../../api/hooks/user/useGetUserById'
import PlatformLogo from '../../assets/Platform/TeameightsLogo'
import { usePrompt } from '../../hooks/usePrompt'
import { editProfileValidation } from '../../schemas'
import Loader from '../../shared/components/Loader/Loader'
import Page404Form from '../Forms/Page404Form/Page404Form'

import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import ResumeInfo from './components/ResumeInfo/ResumeInfo'
import { LogoWrapper, ProfileContainer, ProfileForm, ProfileWrapper } from './Profile.styles'

const Profile = () => {
  const { id } = useParams()
  const { mutate: editUserDetails, isLoading } = useEditUserDetails()
  const { mutate: updateAvatar, isLoading: isUpdatingAvatar } = useUpdateAvatar('users')
  const { data, isLoading: isUserLoading, error } = useGetUserById(id)
  const { data: currentUser, isFetching } = useCheckAuth()
  const [isEditing, setIsEditing] = useState('')
  const [showingUser, setShowingUser] = useState(null)

  useEffect(() => {
    setShowingUser(data?.data)
  }, [data])

  // const showingUser = data?.data

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
      file,
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

    if (file) {
      updateAvatar({ email: showingUser?.email, image: file.split(',')[1] })
    }

    setIsEditing('')
  }

  if (isLoading || isUserLoading || isFetching || isUpdatingAvatar || !showingUser) {
    return <Loader />
  }

  if ((!isUserLoading && !data && !isFetching) || error) {
    return <Page404Form findText="Couldn't find the requested user." paddingLeft="88px" />
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
        dateOfBirth: showingUser?.dateOfBirth,
        file: null,
      }}
      validationSchema={editProfileValidation}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ values, errors, dirty }) => {
        usePrompt('You have unsaved changes. Do you want to discard them?', dirty)

        return (
          <ProfileForm>
            <LogoWrapper>
              <PlatformLogo />
            </LogoWrapper>
            <ProfileWrapper>
              <ProfileContainer>
                <ProfileInfo
                  showingUser={showingUser}
                  id={id}
                  currentUser={currentUser}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                />
                <ResumeInfo
                  showingUser={showingUser}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                />
              </ProfileContainer>
            </ProfileWrapper>
          </ProfileForm>
        )
      }}
    </Formik>
  )
}

export default Profile
