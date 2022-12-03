// * Modules
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

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
} from './CodingForm.styles'
import Editor from '@monaco-editor/react'

import Typewriter from 'react-ts-typewriter'

function CodingForm() {
  const [code, setCode] = useState(`// some comment`)
  const [value, setValue] = useState(code || '')
  const [output, setOutput] = useState('Your output here...')

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
    onChange('code', value)
  }

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
                N/A
              </Text>
            </ResultStatus>
          </ResultContainer>

          <ResultContainer>
            <Text fontSize="18px" fontWeight="400">
              Memory:
            </Text>
            <ResultStatus>
              <Text fontSize="16px" color="#5D9D0B">
                N/A
              </Text>
            </ResultStatus>
          </ResultContainer>

          <ResultContainer>
            <Text fontSize="18px" fontWeight="500">
              Time:
            </Text>
            <ResultStatus>
              <Text fontSize="16px" color="#5D9D0B">
                N/A
              </Text>
            </ResultStatus>
          </ResultContainer>
        </div>
      </LeftContainer>

      <RightContainer>
        <Editor
          height="85vh"
          width={`90%`}
          language={'js'}
          value={value}
          theme={'vs-dark'}
          defaultValue="/* Welcome to teameights! */"
          onChange={handleEditorChange}
        />

        <SubmitButton>SUBMIT</SubmitButton>
      </RightContainer>
    </Container>
  )
}

export default CodingForm
