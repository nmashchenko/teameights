import { ThreeDots } from 'react-loader-spinner'
import { useFormikContext } from 'formik'

import frameworkOptions from '../../../../../shared/constants/frameworks'
import FlexWrapper from '../../../../../shared/ui/FlexWrapper/FlexWrapper'
import CustomSelectAutocomplete from '../../../../../shared/ui/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import { ActionButton, Text } from '../ResumeInfo.styles'

function EditingComponentFrameworks({ handleCancel, isUpdatingUser }) {
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
      <FlexWrapper width="100%" justify="space-between" margin="24px 0 0 0">
        <ActionButton type="button" onClick={handleCancel}>
          Cancel
        </ActionButton>
        <ActionButton type="submit" border="none" background="#46A11B">
          {isUpdatingUser ? (
            <ThreeDots
              height="24"
              width="24"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            'Save'
          )}
        </ActionButton>
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default EditingComponentFrameworks
