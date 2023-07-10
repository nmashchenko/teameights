import { ThreeDots } from 'react-loader-spinner'

import ChooseAvatar from '../../../../../shared/components/ChooseAvatar/ChooseAvatar'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import { ActionButton, Text } from '../ResumeInfo.styles'

function EditingComponentAvatar({ handleCancel, isUpdatingAvatar }) {
  return (
    <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
      <Text fontSize="20px" color="#5BD424" fontWeight="500">
        Avatar
      </Text>
      <ChooseAvatar />
      <FlexWrapper width="100%" justify="space-between">
        <ActionButton type="button" onClick={handleCancel}>
          Cancel
        </ActionButton>
        <ActionButton type="submit" border="none" background="#46A11B">
          {isUpdatingAvatar ? (
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

export default EditingComponentAvatar
