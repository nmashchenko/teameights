import React, { useState } from 'react'
import { Form } from 'formik'

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
  if (isEditing) {
    return (
      <Form>
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
        </FormContainer>
      </Form>
    )
  }

  return <RegularAbout team={team} />
}

export default About
