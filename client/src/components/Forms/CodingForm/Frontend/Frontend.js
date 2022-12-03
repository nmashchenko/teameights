// * Modules
import Countdown from 'react-countdown'
import Editor from '@monaco-editor/react'
import Typewriter from 'react-ts-typewriter'

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

function CodingForm({
  renderer,
  value,
  output,
  handleEditorChange,
  onSubmit,
  status,
  memory,
  time,
}) {
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

        <SubmitButton onClick={onSubmit}>SUBMIT</SubmitButton>
      </RightContainer>
    </Container>
  )
}

export default CodingForm
