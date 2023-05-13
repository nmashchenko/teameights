import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import countryList from 'react-select-country-list'
import { Form, Formik } from 'formik'

import { useCheckAuth } from '../../../../api/hooks/auth/useCheckAuth'
import { useEditUserDetails } from '../../../../api/hooks/auth/useEditUserDetails'
import { useGetTeamData } from '../../../../api/hooks/team/useGetTeamData'
import EditIcon from '../../../../assets/EditIcon'
import Email from '../../../../assets/UserProfile/Email'
import Github from '../../../../assets/UserProfile/Github'
import Linkedin from '../../../../assets/UserProfile/Linkedin'
import Location from '../../../../assets/UserProfile/Location'
import Star from '../../../../assets/UserProfile/Star'
import { Framework } from '../../../../components/Teammates/components/UserCard/UserCard.styles'
import concentrationOptions from '../../../../constants/concentrations'
import { userExperienceOptions } from '../../../../constants/finishRegistrationData'
import { frameworkColors, frameworkTextColors } from '../../../../constants/frameworkColors'
import frameworkOptions from '../../../../constants/frameworks'
import {
  languageOptions,
  programmingLanguageOptions,
} from '../../../../constants/programmingLanguages'
import ROUTES from '../../../../constants/routes'
import { usePrompt } from '../../../../hooks/usePrompt'
import { LOCAL_PATH } from '../../../../http'
import { editProfileValidation } from '../../../../schemas'
import CustomButton from '../../../../shared/components/CustomButton/CustomButton'
import CustomInput from '../../../../shared/components/CustomInput/CustomInput'
import CustomSelect from '../../../../shared/components/CustomSelect/CustomSelect'
import CustomTextArea from '../../../../shared/components/CustomTextArea/CustomTextArea'
import Loader from '../../../../shared/components/Loader/Loader'
import { Button } from '../../../../shared/styles/Button.styles'
import { ErrorMessage } from '../../../../shared/styles/Tpography.styles'
import Photo from '../../Photo.jpg'
import {
  BannerLine,
  DetailsWrapper,
  IconTextContainer,
  Img,
  ImgContainer,
  Information,
  InformationRow,
  InformationWrapper,
  LeftCard,
  ProfileLine,
  ProgrammingLanguage,
  RightCard,
  RightCardData,
  RightContainer,
  SocialRow,
  SocialWrapper,
  TelegramIcon,
  Text,
  TextContainer,
} from '../../Profile.styles'

import Edit from './components/Edit/Edit'
import { ConcentrationWrapper, EditUserDetails } from './ProfileForm.styles'

const inputStyles = {
  border: '1px solid #5E5E5E',
  borderRadius: '0.5rem',
  padding: '0.5rem',
  width: 'auto',
}

const ProfileForm = () => {
  const navigate = useNavigate()
  const { mutate: editUserDetails, isLoading } = useEditUserDetails(onSuccess)
  const { data: user, isFetching: isUserDataLoading } = useCheckAuth()
  const teamId = user?.team?._id

  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData(teamId)
  const countriesOptions = useMemo(() => countryList().getData(), [])

  const stopEditing = () => navigate('/profile')

  function onSuccess() {
    stopEditing()
  }

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

  if (isLoading || isUserDataLoading || isUserTeamLoading) {
    return <Loader />
  }

  if (!user) {
    return <Button onClick={() => navigate(ROUTES.login)}>Login</Button>
  }

  return (
    <Formik
      initialValues={{
        fullName: user.fullName,
        github: user.links.github,
        linkedIn: user.links.linkedIn,
        telegram: user.links.telegram,
        description: user.description,
        concentration: user.concentration,
        country: user.country,
        experience: user.experience,
        programmingLanguages: user.programmingLanguages,
        frameworks: user.frameworks,
      }}
      validationSchema={editProfileValidation}
      onSubmit={handleSubmit}
    >
      {({ values, errors, dirty }) => {
        usePrompt('You have unsaved changes. Do you want to discard them?', dirty)

        return (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <Information>
              <LeftCard>
                <ImgContainer>
                  <Img src={user.image ? LOCAL_PATH + '/' + user.image : Photo} />
                  <EditUserDetails onClick={stopEditing}>
                    <EditIcon />
                  </EditUserDetails>
                </ImgContainer>
                <TextContainer>
                  <CustomInput name="fullName" style={{ ...inputStyles, marginTop: '1rem' }} />
                  <Text margin="5px 0 0 0" color="rgba(255, 255, 255, 0.5)" fontSize="16px">
                    {user.userUsername}
                  </Text>
                  <ConcentrationWrapper>
                    <Text margin="5px 0 0 0">{values.concentration}</Text>
                    <CustomSelect
                      style={{ height: 'auto' }}
                      renderValue={() => <></>}
                      width="auto"
                      margin="0"
                      name="concentration"
                      options={concentrationOptions}
                      line={false}
                      IconComponent={Edit}
                    />
                  </ConcentrationWrapper>
                </TextContainer>
                <ProfileLine />
                <DetailsWrapper>
                  <InformationWrapper>
                    <InformationRow>
                      <IconTextContainer>
                        <Location />
                        <Text fontSize="15px">{values.country}</Text>
                      </IconTextContainer>
                      <CustomSelect
                        style={{ height: 'auto' }}
                        renderValue={() => <></>}
                        width="auto"
                        margin="0 0 0 1rem"
                        name="country"
                        options={countriesOptions}
                        line={false}
                        IconComponent={Edit}
                      />
                    </InformationRow>
                    <InformationRow>
                      <IconTextContainer>
                        <Star />
                        <Text fontSize="15px">
                          {values.experience} {!values.experience.includes('years') ? ' years' : ''}{' '}
                          of experiences
                        </Text>
                      </IconTextContainer>
                      <CustomSelect
                        style={{ height: 'auto' }}
                        renderValue={() => <></>}
                        width="auto"
                        margin="0 0 0 1rem"
                        name="experience"
                        options={userExperienceOptions}
                        line={false}
                        IconComponent={Edit}
                      />
                    </InformationRow>
                    <InformationRow>
                      <IconTextContainer>
                        <Email />
                        <Text fontSize="15px">{user.email}</Text>
                      </IconTextContainer>
                    </InformationRow>
                  </InformationWrapper>
                  <SocialWrapper>
                    <SocialRow>
                      <IconTextContainer>
                        <Github />
                        <CustomInput name="github" style={inputStyles} />
                      </IconTextContainer>
                    </SocialRow>
                    <SocialRow marginTop="10px">
                      <IconTextContainer>
                        <Linkedin />
                        <CustomInput name="linkedIn" style={inputStyles} />
                      </IconTextContainer>
                    </SocialRow>
                    <SocialRow marginTop="10px">
                      <IconTextContainer>
                        <TelegramIcon />
                        <CustomInput name="telegram" style={inputStyles} />
                      </IconTextContainer>
                    </SocialRow>
                  </SocialWrapper>
                </DetailsWrapper>
              </LeftCard>
              <RightContainer>
                <RightCard id="Languages">
                  <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                    Languages
                  </Text>
                  <BannerLine />
                  <RightCardData>
                    {values.programmingLanguages.map((language) => (
                      <ProgrammingLanguage key={language}>
                        {languageOptions[language]}
                      </ProgrammingLanguage>
                    ))}
                    <CustomSelect
                      displayError={false}
                      renderValue={() => <></>}
                      width="auto"
                      name="programmingLanguages"
                      margin="0"
                      multiple={true}
                      options={programmingLanguageOptions}
                      line={false}
                      IconComponent={Edit}
                    />
                    {errors.programmingLanguages && (
                      <ErrorMessage style={{ margin: 0 }}>
                        {errors.programmingLanguages}
                      </ErrorMessage>
                    )}
                  </RightCardData>
                </RightCard>
                <RightCard id="Tools">
                  <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                    Tools
                  </Text>
                  <BannerLine />
                  <RightCardData>
                    {values.frameworks.slice(0, 5).map((framework, index) => (
                      <Framework
                        key={framework}
                        background={frameworkColors[framework]}
                        color={frameworkTextColors[framework]}
                        flexGrow="0"
                        marginBottom="0"
                      >
                        <h3>{index < 4 ? framework : `+${values.frameworks.length - 4}`}</h3>
                      </Framework>
                    ))}
                    <CustomSelect
                      displayError={false}
                      renderValue={() => <></>}
                      width="auto"
                      name="frameworks"
                      margin="0"
                      multiple={true}
                      options={frameworkOptions}
                      line={false}
                      IconComponent={Edit}
                    />
                    {errors.frameworks && (
                      <ErrorMessage style={{ margin: 0 }}>{errors.frameworks}</ErrorMessage>
                    )}
                  </RightCardData>
                </RightCard>

                <RightCard id="Team">
                  <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                    Team
                  </Text>
                  <BannerLine />
                  <RightCardData justify="center">
                    {team ? (
                      <Text
                        margin="0"
                        fontSize="16px"
                        fontWeight="600"
                        color="rgba(255, 255, 255, 0.7)"
                      >
                        {team.name}
                      </Text>
                    ) : (
                      <CustomButton type="button" onClick={teamSearchHandler}>
                        Search team
                      </CustomButton>
                    )}
                  </RightCardData>
                </RightCard>

                <RightCard id="AboutMe">
                  <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                    About me
                  </Text>
                  <BannerLine />
                  <RightCardData justify={user.userDescription ? 'start' : 'center'}>
                    <CustomTextArea
                      name="description"
                      maxLength={200}
                      style={{ ...inputStyles, width: '100%' }}
                    />
                  </RightCardData>
                </RightCard>
              </RightContainer>
            </Information>
            <CustomButton type="submit" style={{ alignSelf: 'flex-end', marginTop: '1.2rem' }}>
              Save
            </CustomButton>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ProfileForm
