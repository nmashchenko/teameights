import { ThreeDots } from 'react-loader-spinner'
import { useFormikContext } from 'formik'

import FlexWrapper from '../../../../../shared/ui/FlexWrapper/FlexWrapper'
import CustomTextArea from '../../../../../shared/ui/Formik/CustomTextArea/CustomTextArea'
import { ActionButton, Text } from '../ResumeInfo.styles'

function EditingComponentDescription({ handleCancel, isUpdatingUser }) {
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

export default EditingComponentDescription
