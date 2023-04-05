import React, { useMemo, useRef, useState } from 'react'
import countryList from 'react-select-country-list'
import { Field, Form, Formik } from 'formik'

import { useUpdateTeam } from '../../../../api/hooks/team/userUpdateTeam'
import { B2fs, B2fw, B2lh } from '../../../../assets/fonts'
import typeOptions from '../../../../constants/types'
import { PlaceholderText } from '../../../../screens/UsersList/components/SelectField/SelectField.styles'
import CustomSelect from '../../../../shared/components/CustomSelect/CustomSelect'
import Loader from '../../../../shared/components/Loader/Loader'
import {
  Statistic,
  StatisticsFlex,
  TeamCardBody,
  TeamCardBodyPoint,
  TeamCardDesc,
  TeamCardFigure,
  TeamCardMembers,
  TeamCardPerson,
  TeamCardPicture,
  TeamCardTop,
  TeamCardTopIcon,
  TeamCardTopInfo,
} from '../TeamForm.styles'

import {
  EditTeam,
  FormContainer,
  LabelFieldContainer,
  LabelTextFieldContainer,
  LeaderActionsBox,
  LeaveTeam,
} from './About.styles'

const About = ({ team, isEditing, setIsEditing, handleOpenDelete }) => {
  const countriesOptions = useMemo(() => countryList().getData(), [])

  const [backgroundColor, setBackgroundColor] = useState([
    'transparent',
    'transparent',
    'transparent',
    'transparent',
  ])

  const { mutate: updateTeam, isLoading: isUpdating } = useUpdateTeam()

  const [loading, setLoading] = useState(false)

  const changeBackgroundColor = (number) => {
    setBackgroundColor((prevState) => {
      prevState[number] = prevState[number] === 'transparent' ? '#2F3239' : 'transparent'

      return [...prevState]
    })
  }

  const countrySelect = (
    <CustomSelect
      multiple={false}
      label="Country"
      name="countries"
      options={countriesOptions}
      line={false}
      hideLabelOnSelect={true}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <PlaceholderText style={{ marginRight: '1rem', textAlign: 'start', fontWeight: '400' }}>
              {team.country}
            </PlaceholderText>
          )
        }

        return selected
      }}
      styles={{
        height: '38px',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
        borderBottom: '1px solid #86878B',
        backgroundColor: `${backgroundColor[2]}`,
        width: '100%',
        fontSize: B2fs,
        fontWeight: B2fw,
        lineHeight: B2lh,
      }}
    />
  )

  const typeSelect = (
    <CustomSelect
      multiple={false}
      label="type"
      name="type"
      options={typeOptions}
      line={false}
      hideLabelOnSelect={true}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <PlaceholderText style={{ marginRight: '1rem', textAlign: 'start', fontWeight: '400' }}>
              {team.type}
            </PlaceholderText>
          )
        }

        return selected
      }}
      styles={{
        height: '38px',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
        borderBottom: '1px solid #86878B',
        width: '100%',
        backgroundColor: `${backgroundColor[3]}`,
      }}
    />
  )

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
        onSubmit={(values, actions) => {
          console.log(values)

          updateTeam({
            teamid: team._id,
            name: values.name,
            description: values.desc,
            country: values.countries,
            type: values.type.toLowerCase(),
            tag: values.tag,
          })

          setIsEditing(false)
        }}
      >
        {({ values, dirty, resetForm }) => {
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
                    // onChange={(e) => {
                    //   // setTag(e.value)
                    // }}
                    onFocus={changeBackgroundColor.bind(null, 1)}
                    onBlur={changeBackgroundColor.bind(null, 1)}
                  />
                </LabelFieldContainer>
                <LabelFieldContainer>
                  <label htmlFor="country">Country</label>
                  {countrySelect}
                </LabelFieldContainer>
                <LabelFieldContainer>
                  <label htmlFor="type">type</label>
                  {typeSelect}
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
                  {loading ? Loader : <></>}
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

  return (
    <TeamCardFigure>
      <TeamCardTop>
        <TeamCardTopInfo>
          <h3>Name</h3>
          <p>{team.name.length > 10 ? team.name.slice(0, 10) + '...' : team.name}</p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Tag</h3>
          <p>{team.tag.toUpperCase()}</p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Type</h3>
          <p>
            {[team.type.slice(0, 1).toUpperCase(), team.type.slice(1, team.type.length)].join('')}
          </p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Country</h3>
          <p>{team.country}</p>
        </TeamCardTopInfo>
      </TeamCardTop>
      <TeamCardBody>
        <TeamCardBodyPoint>
          <h3>Description</h3>
          <TeamCardDesc>{team.description}</TeamCardDesc>
        </TeamCardBodyPoint>
        <TeamCardBodyPoint>
          <h3>Statistics</h3>
          <StatisticsFlex>
            <Statistic>
              <p>
                Tournaments: <span>5</span>
              </p>
            </Statistic>
            <Statistic>
              <p>
                Wins: <span>{team.wins}</span>
              </p>
            </Statistic>
            <Statistic>
              <p>
                Points: <span>{team.points}</span>
              </p>
            </Statistic>
          </StatisticsFlex>
        </TeamCardBodyPoint>
      </TeamCardBody>
    </TeamCardFigure>
  )
}

export default About
