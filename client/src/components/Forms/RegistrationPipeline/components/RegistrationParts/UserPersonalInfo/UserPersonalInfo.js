// * Modules
import React, { useState, useEffect } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import { includes } from 'lodash'

// * Redux
import { useSelector } from 'react-redux'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import SnackBar from '../../../../../SnackBar/SnackBar'
import Stepper from '../../Stepper/Stepper'

// * Components
import NameUsernameArea from './Components/NameUsernameArea'
import AgeArea from './Components/AgeArea'
import CountryArea from './Components/CountryArea'
import AboutMeArea from './Components/AboutMeArea'

// * Hooks
import useInfoSubmit from './Hooks/useInfoSubmit'
import personalInfoHooks from './Hooks/personalInfoHooks'

// * Styles
import {
  Container,
  RegistrationContainer,
  ContentContainer,
  GroupContainer,
  SectionContainer,
  ResetButton,
  ButtonContainer,
  Button,
  ButtonDisabled,
} from './UserPersonalInfo.styles'
import {useValidateUsername} from "../../../../../../api/hooks/useValidateUsername";
import {useCheckAuth} from "../../../../../../api/hooks/useCheckAuth";
import yupValidation from "../../../../../../schemas";
import {Formik, Form} from "formik";
import CustomInput from "../../../../../../shared/components/CustomInput/CustomInput";
import CustomSelect from "../../../../../../shared/components/CustomSelect/CustomSelect";
import countryList from "react-select-country-list";
import CustomTextArea from "../../../../../../shared/components/CustomTextArea/CustomTextArea";
import {Item} from "../../../../../../shared/components/CustomSelect/CustomSelect.styles";

function NamePart() {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(userData.userRealName)
  const [username, setUsername] = useState("")
  const [age, setAge] = useState(userData.userAge)
  const [country, setCountry] = useState(userData.userCountry)
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])
  const {data } = useCheckAuth()
  const user = data?.data
  const {refetch}  = useValidateUsername(username, user?.email)
  // * useEffect
  useEffect(() => {
    setUsername(userData.userUsername)
  }, [])

  // * Error messages
  const errorMessage = `You need to fix ${errors.length} error(s) before continuing`
  const alternativeErrorMessage = 'Username is already taken!'

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  // const handleReset = () => {
  //   userData.userUsername !== '' ? setName('') : setUsername('')
  //   setAge('')
  //   setCountry('')
  //   setDescription('')
  //   setErrors([])
  // }

  // * useInfoSubmit hook
  const handleSubmit = useInfoSubmit(
    userData,
    username,
    name,
    age,
    country,
    description,
    setOpen,
    setErrors,
  )

  const handleSubmitUserPersonalInfo = async (values, actions) => {

    await setUsername(values.username)
    await refetch()

    await actions.resetForm();
  }

  // * Other hooks to handle age, name, username, country, description
  const handleAge = personalInfoHooks.useHandleAge(setErrors, setAge)
  const handleName = personalInfoHooks.useHandleName(setErrors, setName)
  const handleUsername = personalInfoHooks.useHandleUsername(setErrors, setUsername, errors)
  const handleCountry = personalInfoHooks.useHandleCountry(setErrors, setCountry)
  const handleDescription = personalInfoHooks.useHandleDescription(setErrors, setDescription)

  return (
      <Formik
          initialValues={{ fullName: "",  country: "", age: "", description: "" }}
          validationSchema={yupValidation.userPersonalInfoSchema}
          onSubmit={handleSubmitUserPersonalInfo}
          >
        {({ errors, handleReset, isSubmitting }) => {

          return (
            <Form>
              {open && errors.length > 0 && (
                <SnackBar
                  handleClose={handleClose}
                  open={open}
                  error={
                    includes(errors, 'Username is already taken!')
                      ? alternativeErrorMessage
                      : errorMessage
                  }
                  vertical="bot"
                />
              )}
              <Container>
                <Stepper step={step} />
                <RegistrationContainer>
                  <NavLogo sectionName={'User Profile'} />
                  <ContentContainer>
                    {/*<SectionContainer>*/}
                      <GroupContainer>
                        <CustomInput
                          label="Full Name"
                          name="fullName"
                          type="text"
                        />
                      </GroupContainer>
                      <GroupContainer>
                        <CustomSelect
                            label="Сountry"
                            name="country"
                        >
                          {countryList().getData().map(({ label }) => (
                              <Item key={label} value={label}>
                                {label}
                              </Item>
                          ))}
                        </CustomSelect>
                      </GroupContainer>
                    {/*</SectionContainer>*/}

                    {/*<SectionContainer margin="80px 0 0 40px">*/}
                      <GroupContainer>
                        <CustomInput
                          label="Age"
                          name="age"
                          type="text"
                        />
                      </GroupContainer>
                    {/*</SectionContainer>*/}

                    <CustomTextArea
                        label="About me"
                        name="description"
                        placeholder="Start typing here..."
                        maxLength={200}
                    />
                    <ButtonContainer>
                      <ResetButton type="button" onClick={handleReset}>
                        Reset all
                      </ResetButton>
                      {Object.keys(errors).length ? (
                        <ButtonDisabled>
                          <WarningIcon />
                        </ButtonDisabled>
                      ) : (
                        <Button disabled={isSubmitting} type="submit">Next</Button>
                      )}
                    </ButtonContainer>
                  </ContentContainer>
                </RegistrationContainer>
              </Container>
            </Form>
          )}
        }
      </Formik>
  )
}

export default NamePart
