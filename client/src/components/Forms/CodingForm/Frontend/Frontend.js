// * Modules
import { useState } from 'react'
import Countdown from 'react-countdown'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'react-ts-typewriter'
import Editor from '@monaco-editor/react'

// * API
import submissionAPI from '../../../../api/endpoints/submission'

// * Styles
import {
  Container,
  LeftContainer,
  OutputContainer,
  ResultContainer,
  ResultStatus,
  RightContainer,
  SubmitButton,
  TaskContainer,
  Text,
} from '../CodingForm.styles'

// * Assets
import CodeEvaluation from './CodeEvaluation'

function CodingForm({ renderer, value, output, handleEditorChange, team, user, setOutput, code }) {
  const navigate = useNavigate()

  const makeSubmission = async () => {
    const curPoints = CodeEvaluation(code)

    setPoints(points)

    curPoints < 70
      ? setOutput(`You received ${curPoints} points, probably missing something!`)
      : setOutput(
          `You received ${curPoints} points, good job! Waiting for your teameight to finish!`,
        )
    setStatus('Accepted')
    setMemory('40')
    setTime('0.002')
    const s_parts = {
      frontend: {
        submission_time: new Date().getTime(),
        points: curPoints,
      },
    }
    const submission = await submissionAPI.makeSubmission(s_parts, user.userTeam)

    if (curPoints === 70) {
      setTimeout(function () {
        setOutput('Redirecting you to the leaderboards...')
      }, 2000)

      setTimeout(function () {
        navigate('/leaderboard')
      }, 4000)
    }
  }
  const [status, setStatus] = useState('N/A')
  const [memory, setMemory] = useState('N/A')
  const [time, setTime] = useState('N/A')
  const [points, setPoints] = useState(0)

  return (
    <Container>
      <LeftContainer>
        <Text alignment="center" fontSize="22px" fontWeight="700">
          Teameights cup #1
        </Text>
        <Text alignment="center" fontWeight="200">
          Front-End
        </Text>
        <Countdown date={Date.now() + 1800000} renderer={renderer} />

        <TaskContainer>
          <Text fontSize="24px" color="#5D9D0B" fontWeight="300">
            <Typewriter
              text="teameights@ubuntu: ~$ imagine you are styling a div element that is created under
            teameightscup1.html, classname of this element is called teameightsDiv1, how would you
            center this div on the screen assuming you are required to use flexbox?"
            />
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
              Memory:
            </Text>
            <ResultStatus>
              <Text fontSize="16px" color="#5D9D0B">
                {memory}
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
          language={'css'}
          value={value}
          theme={'vs-dark'}
          defaultValue=""
          onChange={handleEditorChange}
        />

        <SubmitButton onClick={makeSubmission}>SUBMIT</SubmitButton>
      </RightContainer>
    </Container>
  )
}

export default CodingForm
