import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

import LongArrowLeft from '../../../../../assets/Arrows/LongArrowLeft'
import AddUserIcon from '../../../../../assets/Shared/AddUserIcon'
import MessageIcon from '../../../../../assets/UserProfile/MessageIcon'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import { infoToaster } from '../../../../../shared/components/Toasters/Info.toaster'
import { GenericButton } from '../ProfileInfo.styles'

const UserStatusButtons = ({
  currentUser,
  id,
  isEditing,
  handleEdit,
  navigate,
  handleInvite,
  isInviting,
  userStatus,
  isUpdatingUser,
}) => {
  const renderSameUserButtons = () => {
    if (isEditing && isEditing === 'profile') {
      return (
        <FlexWrapper gap="8px" width="100%" direction="column">
          <GenericButton type="submit" background="#46A11B">
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
              'Save changes'
            )}
          </GenericButton>
          <GenericButton
            type="button"
            background="transparent"
            border="2px solid #A5211F"
            onClick={() => handleEdit('')}
          >
            Cancel
          </GenericButton>
        </FlexWrapper>
      )
    }

    return (
      <GenericButton type="button" background="#46A11B" onClick={() => handleEdit('profile')}>
        Edit section
      </GenericButton>
    )
  }

  const renderTeamMemberButtons = () => (
    <FlexWrapper gap="8px" width="100%">
      <GenericButton type="button" onClick={() => navigate(-1)}>
        <LongArrowLeft />
        Back
      </GenericButton>
      <GenericButton
        type="button"
        onClick={() => infoToaster('Coming in the next update!')}
        background="#46A11B"
      >
        Message
        <MessageIcon />
      </GenericButton>
    </FlexWrapper>
  )

  const renderOtherUserButtons = () => (
    <FlexWrapper gap="8px" width="100%">
      {currentUser?.team && (
        <GenericButton type="button" background="#46A11B" border="none" onClick={handleInvite}>
          {isInviting ? (
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
            <>
              Invite
              <AddUserIcon />
            </>
          )}
        </GenericButton>
      )}
      <GenericButton type="button" onClick={() => infoToaster('Coming in the next update!')}>
        Message
        <MessageIcon />
      </GenericButton>
    </FlexWrapper>
  )

  return (
    <>
      {userStatus === 'same' && currentUser && renderSameUserButtons()}

      {userStatus === 'teammember' && currentUser && renderTeamMemberButtons()}

      {userStatus === 'other' && currentUser && renderOtherUserButtons()}
    </>
  )
}

export default UserStatusButtons
