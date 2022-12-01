import { Container } from './CodingForm.styles'
import Editor from '@monaco-editor/react'

function CodingForm() {
  return (
    <Container>
      <Editor
        height="85vh"
        width={`50%`}
        language={'css'}
        // value={value}
        theme={'vs-dark'}
        defaultValue="// some comment"
        // onChange={handleEditorChange}
      />
    </Container>
  )
}

export default CodingForm
