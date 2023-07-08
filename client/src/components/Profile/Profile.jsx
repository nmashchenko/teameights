import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Formik } from 'formik'

import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../api/hooks/shared/useUpdateAvatar'
import { useEditUserDetails } from '../../api/hooks/user/useEditUserDetails'
import { useGetUserById } from '../../api/hooks/user/useGetUserById'
import PlatformLogo from '../../assets/Platform/TeameightsLogo'
import { useGetScreenWidth } from '../../hooks/useGetScreenWidth'
import { usePrompt } from '../../hooks/usePrompt'
import { editProfileValidation } from '../../schemas'
import Loader from '../../shared/components/Loader/Loader'
import ModalComponent from '../../shared/components/Modal/Modal'
import { formatDateString } from '../../utils/convertStringToDate'
import Page404Form from '../Forms/Page404Form/Page404Form'

import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import ResumeInfo from './components/ResumeInfo/ResumeInfo'
import { LogoWrapper, ProfileContainer, ProfileForm, ProfileWrapper } from './Profile.styles'

const Profile = () => {
  const { id } = useParams()
  const { mutate: editUserDetails, isLoading } = useEditUserDetails(() => setIsEditing(''))
  const { mutate: updateAvatar, isLoading: isUpdatingAvatar } = useUpdateAvatar('users', () =>
    setIsEditing(''),
  )
  const { data, isLoading: isUserLoading, error } = useGetUserById(id)
  const { data: currentUser, isFetching } = useCheckAuth()
  const [isEditing, setIsEditing] = useState('')
  const [showingUser, setShowingUser] = useState(null)
  const width = useGetScreenWidth()

  useEffect(() => {
    setShowingUser(data?.data)
  }, [data])

  // const showingUser = data?.data

  const handleSubmit = (values, { setFieldValue }) => {
    const {
      fullName,
      description,
      concentration,
      country,
      experience,
      github,
      telegram,
      linkedIn,
      behance,
      programmingLanguages,
      frameworks,
      dateOfBirth,
      projectData,
      jobData,
      universityData,
      file,
    } = values

    const formattedDOB = formatDateString(dateOfBirth)

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
        behance,
      },
      programmingLanguages,
      frameworks,
      dateOfBirth: formattedDOB,
      projectData,
      jobData,
      universityData,
    }

    if (file) {
      updateAvatar({ email: showingUser?.email, image: file.split(',')[1] })
      setFieldValue('file', null)
    } else {
      editUserDetails(modifiedUserData)
    }
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
        behance: showingUser?.links?.behance,
        description: showingUser?.description,
        concentration: showingUser?.concentration,
        country: showingUser?.country,
        experience: showingUser?.experience,
        programmingLanguages: showingUser?.programmingLanguages,
        frameworks: showingUser?.frameworks,
        dateOfBirth: showingUser?.dateOfBirth,
        projectData: showingUser?.projectData,
        jobData: showingUser?.jobData,
        universityData: showingUser?.universityData,
        file: null,
      }}
      validationSchema={editProfileValidation}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ values, errors, dirty }) => {
        usePrompt('You have unsaved changes. Do you want to discard them?', dirty)

        return (
          <>
            <ProfileForm>
              <LogoWrapper>
                <PlatformLogo />
              </LogoWrapper>
              <ProfileWrapper>
                {!showingUser && <Loader paddingLeft={width > 768 ? '88px' : '0'} />}
                <ProfileContainer>
                  <ProfileInfo
                    showingUser={showingUser}
                    id={id}
                    currentUser={currentUser}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    isUpdatingUser={isLoading}
                  />
                  <ResumeInfo
                    showingUser={showingUser}
                    id={id}
                    currentUser={currentUser}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    isUpdatingUser={isLoading}
                    isUpdatingAvatar={isUpdatingAvatar}
                  />
                </ProfileContainer>
              </ProfileWrapper>
            </ProfileForm>
          </>
        )
      }}
    </Formik>
  )
}

export default Profile
