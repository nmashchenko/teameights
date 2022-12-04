// * Modules
import Countdown from 'react-countdown'
import Editor from '@monaco-editor/react'
import Typewriter from 'react-ts-typewriter'
import { useState } from 'react'
import axios from 'axios'
import isEqual from 'lodash/isEqual'
import { useNavigate } from 'react-router-dom'

// * Styles
import {
  Container,
  Text,
  LeftContainer,
  RightContainer,
  TaskContainer,
  OutputContainer,
  ResultContainer,
  ResultStatus,
  SubmitButton,
} from '../CodingForm.styles'

// * API
import submissionAPI from '../../../../api/endpoints/submission'

function Backend({ renderer, value, output, handleEditorChange, code, setOutput, user, team }) {
  const [processing, setProcessing] = useState(false)
  const [results, setResults] = useState(null)
  const [status, setStatus] = useState('N/A')
  const [memory, setMemory] = useState('N/A')
  const [time, setTime] = useState('N/A')
  const [points, setPoints] = useState(0)
  const navigate = useNavigate()

  const handleCompile = () => {
    setProcessing(true)
    const formData = {
      language_id: 63,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa('12345'),
    }
    const options = {
      method: 'POST',
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    }

    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data)
        const token = response.data.token
        checkStatus(token)
      })
      .catch((err) => {
        console.log(err)
        let error = err.response ? err.response.data : err
        setProcessing(false)
        console.log(error)
      })
  }

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: process.env.REACT_APP_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
    }
    try {
      let response = await axios.request(options)
      let statusId = response.data.status?.id

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        setProcessing(false)
        setResults(response.data)
        // setOutput(atob(response.data.stdout))
        let statusId = response.data?.status?.id
        if (statusId === 3) {
          atob(response.data.stdout) !== null
            ? setOutput(atob(response.data.stdout))
            : setOutput('')

          const check = atob(response.data.stdout).split(' ')
          console.log(check)
          if (check.includes("'juice',") && check.includes("'cs484'")) {
            setPoints(70)
            const s_parts = {
              backend: {
                submission_time: new Date().getTime(),
                points: 70,
              },
            }
            console.log(s_parts)
            const submission = await submissionAPI.makeSubmission(s_parts, user.userTeam)

            setTimeout(function () {
              setOutput('Redirecting you to the leaderboards...')
            }, 2000)

            setTimeout(function () {
              navigate('/leaderboard')
            }, 4000)
          } else {
            setPoints(0)
          }
        } else if (statusId === 5) {
          setOutput('Time Limit Exceeded')
        } else if (statusId === 6) {
          setOutput(atob(response.data?.compile_output))
        } else {
          setOutput(atob(response.data?.stderr))
        }
        setStatus(response.data.status.description)
        setTime(response.data.time)
        setMemory(response.data.memory)
        console.log('response.data', response.data)
        return
      }
    } catch (err) {
      console.log('err', err)
      setProcessing(false)
    }
  }

  return (
    <Container>
      <LeftContainer>
        <Text alignment="center" fontSize="22px" fontWeight="700">
          Teameights cup #1
        </Text>
        <Text alignment="center" fontWeight="200">
          Back-End
        </Text>
        <Countdown date={Date.now() + 1800000} renderer={renderer} />

        <TaskContainer>
          <Text fontSize="24px" color="#5D9D0B" fontWeight="300">
            <Typewriter text="teameights@ubuntu: ~$ You are given an array ['juice', 'apple',  'cs484'], your task is to get rid of apple, so only ['juice',  'cs484'] is returned" />
          </Text>
        </TaskContainer>

        <div style={{ width: '512px', justifyContent: 'flex-start' }}>
          <Text fontWeight="600">Output:</Text>
        </div>
        <OutputContainer alignItems="start">
          <Text color="#5D9D0B" fontSize="24px">
            {output}
          </Text>
        </OutputContainer>

        <div style={{ width: '512px', justifyContent: 'flex-start' }}>
          <ResultContainer>
            <Text fontSize="18px" fontWeight="400">
              Status:
            </Text>
            <ResultStatus>
              <Text fontSize="16px" color="#5D9D0B">
                {status}
              </Text>
            </ResultStatus>
          </ResultContainer>

          <ResultContainer>
            <Text fontSize="18px" fontWeight="400">
              Points:
            </Text>
            <ResultStatus>
              <Text fontSize="16px" color="#5D9D0B">
                {points}
              </Text>
            </ResultStatus>
          </ResultContainer>

          <ResultContainer>
            <Text fontSize="18px" fontWeight="500">
              Time:
            </Text>
            <ResultStatus>
              <Text fontSize="16px" color="#5D9D0B">
                {time}
              </Text>
            </ResultStatus>
          </ResultContainer>
        </div>
      </LeftContainer>

      <RightContainer>
        <Editor
          height="85vh"
          width={`90%`}
          language={'javascript'}
          value={value}
          theme={'vs-dark'}
          defaultValue="/* Welcome to teameights! */

          const removeElements = (array) => {
              /*
                  implement your solution here
              */
          }
          
          // Don't change these lines!
          const array = ['juice', 'apple',  'cs484']
          console.log(removeElements(array))"
          onChange={handleEditorChange}
        />

        <SubmitButton onClick={handleCompile}>SUBMIT</SubmitButton>
      </RightContainer>
    </Container>
  )
}

export default Backend
