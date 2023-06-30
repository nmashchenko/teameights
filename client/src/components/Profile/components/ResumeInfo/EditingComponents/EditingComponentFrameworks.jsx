import { useFormikContext } from 'formik'

import frameworkOptions from '../../../../../constants/frameworks'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomSelectAutocomplete from '../../../../../shared/components/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import { ActionButton, Text } from '../ResumeInfo.styles'

function EditingComponentFrameworks({ handleCancel }) {
  const { values } = useFormikContext()

  return (
    <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
      <Text fontSize="20px" color="#5BD424" fontWeight="500">
        Frameworks
      </Text>
      <CustomSelectAutocomplete
        name="frameworks"
        options={frameworkOptions}
        placeholder="Select frameworks"
        value={values.frameworks}
        multiple
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

export default EditingComponentFrameworks
