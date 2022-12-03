// * Modules
import React, { useEffect, useState } from 'react'
import isEqual from 'lodash/isEqual'
import { useNavigate } from 'react-router-dom'

// * Assets
import Frontend from './Frontend/Frontend'
import Backend from './Backend/Backend'
import CodeEvaluation from './Frontend/CodeEvaluation'

// * Styles
import { Text } from './CodingForm.styles'

// * Redux
import { useSelector } from 'react-redux'

// * API
import teamsAPI from '../../../api/endpoints/team'
import tournamentAPI from '../../../api/endpoints/tournament'

function CodingForm() {
  const [code, setCode] = useState(``)
  const [value, setValue] = useState(code || '')
  const [output, setOutput] = useState('Your output here...')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('N/A')
  const [memory, setMemory] = useState('N/A')
  const [time, setTime] = useState('N/A')

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

  const onSubmit = () => {
    const points = CodeEvaluation(code)
    points < 70
      ? setOutput(`You received ${points} points, probably missing something!`)
      : setOutput(`You received ${points} points, good job! Waiting for your teameight to finish!`)
    setStatus('Accepted')
    setMemory('40')
    setTime('0.002')
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
      onSubmit={onSubmit}
      status={status}
      memory={memory}
      time={time}
    />
  ) : (
    <Backend
      renderer={renderer}
      value={value}
      output={output}
      handleEditorChange={handleEditorChange}
    />
  )
}

export default CodingForm
