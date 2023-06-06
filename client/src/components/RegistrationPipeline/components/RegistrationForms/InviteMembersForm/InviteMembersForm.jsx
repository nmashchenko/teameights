import { useState } from 'react'
import { useFormikContext } from 'formik'

import AddUserIcon from '../../../../../assets/Shared/AddUserIcon'
import DeleteIcon from '../../../../../assets/Shared/DeleteIcon'
import { LOCAL_PATH } from '../../../../../http'
import AutocompleteInput from '../../../../../shared/components/AutocompleteInput/AutocompleteInput'
import { errorToaster } from '../../../../../shared/components/Toasters/Error.toaster'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import {
  CustomButton,
  InviteArea,
  InvitedUser,
  InvitedUsersContainer,
  InviteFormText,
  UserAvatar,
  UsernameAvatarContainer,
  UserText,
} from './InviteMembersForm.styles'

const InviteMembersForm = () => {
  const [value, setValue] = useState(null)

  const { setFieldValue, setTouched, values } = useFormikContext()

  const addUsersToInviteQueue = () => {
    let members = values.members

    const exists = members.some((item) => item.id === value.id)

    if (!exists && members.length < 8) {
      members.push(value)

      setFieldValue('members', members)

      setTouched({ members: true })
    }

    if (members.length === 8) {
      errorToaster('Only 8 members per team!')
    }
  }

  const removeUserFromInviteQueue = (member) => {
    let members = values.members

    const filteredArray = members.filter((obj) => {
      return obj.id !== member.id
    })

    setFieldValue('members', filteredArray)
  }

  return (
    <ContentContainer gap="0">
      <InviteFormText>
        You can invite up to 7 members to join your team. Send invites now or later. <br />
        Team members can be removed as needed.
      </InviteFormText>
      <InviteArea>
        <AutocompleteInput value={value} setValue={setValue} name="members" />
        <CustomButton type="button" onClick={addUsersToInviteQueue}>
          <AddUserIcon />
          Send invite
        </CustomButton>
      </InviteArea>
      <InvitedUsersContainer>
        {values.members.map((member, index) => {
          return (
            <InvitedUser key={member?.id}>
              <UsernameAvatarContainer>
                <UserAvatar src={member?.image} />
                <UserText>{member?.username}</UserText>
              </UsernameAvatarContainer>
              {index === 0 ? (
                // Render without delete icon for the first user
                <div>
                  <UserText color="#86878B" fontSize="16px">
                    <em>this is you</em>.
                  </UserText>
                </div>
              ) : (
                // Render with delete icon for other users
                <div onClick={() => removeUserFromInviteQueue(member)}>
                  <DeleteIcon />
                </div>
              )}
            </InvitedUser>
          )
        })}
      </InvitedUsersContainer>
    </ContentContainer>
  )
}

export default InviteMembersForm
