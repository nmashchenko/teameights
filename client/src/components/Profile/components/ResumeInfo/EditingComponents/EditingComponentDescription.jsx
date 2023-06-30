import { useFormikContext } from 'formik'

import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomTextArea from '../../../../../shared/components/Formik/CustomTextArea/CustomTextArea'
import { ActionButton, Text, TextArea } from '../ResumeInfo.styles'

function EditingComponentDescription({ handleCancel }) {
  const { values } = useFormikContext()

  return (
    <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
      <Text fontSize="20px" color="#5BD424" fontWeight="500">
        About me
      </Text>
      <CustomTextArea
        style={{ height: '139px' }}
        name="description"
        placeholder="Write something about yourself..."
        maxLength={230}
        margin="0"
        value={values.description}
      />
      <FlexWrapper width="100%" justify="space-between">
        <ActionButton type="button" onClick={handleCancel}>
          Cancel
        </ActionButton>
        <ActionButton type="submit" border="none" background="#46A11B">
          Save
        </ActionButton>
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default EditingComponentDescription
