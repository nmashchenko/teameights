import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'

import { useUpdateTeam } from '../../../api/hooks/team/useUpdateTeam'

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

  const [backgroundColor, setBackgroundColor] = useState([
    'transparent',
    'transparent',
    'transparent',
    'transparent',
  ])

  const changeBackgroundColor = (number) => {
    setBackgroundColor((prevState) => {
      prevState[number] = prevState[number] === 'transparent' ? '#2F3239' : 'transparent'

      return [...prevState]
    })
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
          desc: team.description,
        }}
        onSubmit={(values) => {
          updateTeam({
            teamid: team._id,
            name: values.name,
            description: values.desc,
            country: values.countries,
            type: values.type.toLowerCase(),
            tag: values.tag,
            wins: team.wins,
            points: team.points,
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
                  <Field
                    style={{
                      color: '#FFF',
                      backgroundColor: `${backgroundColor[0]}`,
                      border: 'none',
                      padding: '8px 4px',
                      borderBottom: '1px solid #86878B',
                      width: `98%`,
                      transition: 'all .2s',
                      height: '34px',
                    }}
                    id="name"
                    name="name"
                    onFocus={changeBackgroundColor.bind(null, 0)}
                    onBlur={changeBackgroundColor.bind(null, 0)}
                  />
                </LabelFieldContainer>
                <LabelFieldContainer>
                  <label htmlFor="tag">Tag</label>
                  <Field
                    style={{
                      color: '#FFF',
                      backgroundColor: `${backgroundColor[1]}`,
                      border: 'none',
                      padding: '8px 4px',
                      borderBottom: '1px solid #86878B',
                      width: `98%`,
                      height: '34px',
                    }}
                    id="tag"
                    name="tag"
                    onFocus={changeBackgroundColor.bind(null, 1)}
                    onBlur={changeBackgroundColor.bind(null, 1)}
                  />
                </LabelFieldContainer>
                <LabelFieldContainer>
                  <label htmlFor="country">Country</label>
                  <CountrySelect team={team} backgroundColor={backgroundColor} />
                </LabelFieldContainer>
                <LabelFieldContainer>
                  <label htmlFor="type">type</label>
                  <TypeSelect team={team} backgroundColor={backgroundColor} />
                </LabelFieldContainer>

                <LabelTextFieldContainer
                  style={{
                    marginTop: '8px',
                  }}
                >
                  <label htmlFor="desc">Description</label>
                  <Field
                    as="textarea"
                    name="desc"
                    style={{
                      background: `transparent`,
                      width: `100%`,
                      borderRadius: `5px`,
                      height: '113px',
                      resize: 'none',
                      color: '#FFFFFF',
                    }}
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
