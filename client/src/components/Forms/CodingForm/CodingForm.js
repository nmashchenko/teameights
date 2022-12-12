// * Modules
import React, { useEffect, useState } from 'react'
// * Redux
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

// * API
import teamsAPI from '../../../api/endpoints/team'
import tournamentAPI from '../../../api/endpoints/tournament'

import Backend from './Backend/Backend'
// * Assets
import Frontend from './Frontend/Frontend'
// * Styles
import { Text } from './CodingForm.styles'

function CodingForm() {
  const [code, setCode] = useState(``)
  const [value, setValue] = useState(code || '')
  const [output, setOutput] = useState('Your output here...')
  const [role, setRole] = useState('')

  const [team, setTeam] = useState('')
  const [updating, setUpdating] = useState(true)
  const { user } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      if (isEqual(user, {})) {
        navigate('/auth/login', { replace: true })
      } else {
        const team = await teamsAPI.getTeamById(user.userTeam)
        const checkSignedUp = await tournamentAPI.checkUserSignedUp(user._id)

        setRole(checkSignedUp.data.role)
        setTeam(team.data)

        setUpdating(false)
      }
    }

    getData()
  }, [])

  const onChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCode(data)
        break
      }
      default: {
        console.warn('case not handled!', action, data)
      }
    }
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return (
        <Text alignment="center" color="red" fontWeight="700" fontSize="32px">
          Time is up, you are not allowed to code.
        </Text>
      )
    } else {
      // Render a countdown
      return (
        <Text alignment="center" color="#5D9D0B" fontWeight="700" fontSize="32px">
          {minutes}:{seconds}
        </Text>
      )
    }
  }

  const handleEditorChange = (value) => {
    setValue(value)
    console.log(value)
    onChange('code', value)
  }

  return role === 'frontend' ? (
    <Frontend
      renderer={renderer}
      value={value}
      output={output}
      handleEditorChange={handleEditorChange}
      team={team}
      user={user}
      setOutput={setOutput}
      code={code}
    />
  ) : (
    <Backend
      renderer={renderer}
      value={value}
      output={output}
      handleEditorChange={handleEditorChange}
      setOutput={setOutput}
      code={code}
      user={user}
    />
  )
}

export default CodingForm
