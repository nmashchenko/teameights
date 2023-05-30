import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'

import { useUpdateTeam } from '../../../api/hooks/team/useUpdateTeam'
import { editTeamValidation } from '../../../schemas'
import CustomInput from '../../../shared/components/Formik/CustomInput/CustomInput'
import CustomTextArea from '../../../shared/components/Formik/CustomTextArea/CustomTextArea'
import Loader from '../../../shared/components/Loader/Loader'

import CountrySelect from './Selects/CountrySelect'
import TypeSelect from './Selects/TypeSelect'
import {
  EditTeam,
  FormContainer,
  LabelFieldContainer,
  LabelTextFieldContainer,
  LeaderActionsBox,
  LeaveTeam,
} from './About.styles'
import RegularAbout from './RegularAbout'

const About = ({ team, isEditing, setIsEditing, handleOpenDelete }) => {
  const { mutate: updateTeam, isLoading: isUpdatingTeam } = useUpdateTeam()

  if (isUpdatingTeam) {
    return <Loader />
  }

  if (isEditing) {
    return (
      <Formik
        initialValues={{
          name: team.name,
          tag: team.tag,
          countries: team.country,
          type: [team.type.slice(0, 1).toUpperCase(), team.type.slice(1, team.type.length)].join(
            '',
          ),
          description: team.description,
        }}
        validationSchema={editTeamValidation}
        onSubmit={(values) => {
          updateTeam({
            teamid: team._id,
            name: values.name,
            description: values.description,
            country: values.countries,
            type: values.type.toLowerCase(),
            tag: values.tag,
          })

          setIsEditing(false)
        }}
      >
        {() => {
          return (
            <Form id="saveForm">
              <FormContainer>
                <LabelFieldContainer>
                  <label htmlFor="name">Name</label>
                  <CustomInput id="name" name="name" height="34px" />
                </LabelFieldContainer>
                <LabelFieldContainer>
                  <label htmlFor="tag">Tag</label>
                  <CustomInput id="tag" name="tag" height="34px" />
                </LabelFieldContainer>
                <LabelFieldContainer>
                  <label htmlFor="country">Country</label>
                  <CountrySelect team={team} />
                </LabelFieldContainer>
                <LabelFieldContainer>
                  <label htmlFor="type">type</label>
                  <TypeSelect team={team} />
                </LabelFieldContainer>

                <LabelTextFieldContainer
                  style={{
                    marginTop: '8px',
                  }}
                >
                  <label htmlFor="desc">Description</label>
                  <CustomTextArea
                    style={{
                      background: `transparent`,
                      width: `100%`,
                      borderRadius: `5px`,
                      maxHeight: '113px',
                      resize: 'none',
                      color: '#FFFFFF',
                      marginTop: '0px',
                    }}
                    name="description"
                    placeholder="Describe your team..."
                    maxLength={200}
                  />
                </LabelTextFieldContainer>

                <LeaderActionsBox opacity={isEditing}>
                  <EditTeam type={`submit`}>{isEditing ? 'Save' : 'Edit'}</EditTeam>
                  <LeaveTeam
                    height="40px"
                    onClick={() => {
                      if (isEditing) {
                        setIsEditing((prevState) => !prevState)
                      } else {
                        handleOpenDelete()
                      }
                    }}
                    marginTop="0"
                  >
                    {isEditing ? 'Cancel' : 'Delete'}
                  </LeaveTeam>
                </LeaderActionsBox>
              </FormContainer>
            </Form>
          )
        }}
      </Formik>
    )
  }

  return <RegularAbout team={team} />
}

export default About
