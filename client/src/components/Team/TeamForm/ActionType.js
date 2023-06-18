import { EditTeam, GenericButton, LeaderActionsBox } from './TeamForm.styles'

const ActionType = ({
  team,
  isEditing,
  setIsEditing,
  isMembers,
  editImage,
  handleOpenDelete,
  handleOpenLeave,
  updateTeamsAvatar,
  servedProfilePic,
  picture,
  selectedImage,
  role,
  handleJoin,
}) => {
  let action = null

  switch (role) {
    case 'leader':
      action = (
        <LeaderActionsBox opacity={!isEditing || isMembers || editImage}>
          <EditTeam
            onClick={() => {
              if (editImage && (picture || selectedImage !== '')) {
                updateTeamsAvatar({ teamID: team._id, image: servedProfilePic.split(',')[1] })
              }
              setIsEditing((prevState) => !prevState)
            }}
          >
            {isEditing ? 'Save' : 'Edit'}
          </EditTeam>
          <GenericButton
            height="40px"
            onClick={() => {
              if (isEditing) {
                setIsEditing((prevState) => !prevState)
              } else {
                handleOpenDelete()
              }
            }}
            marginTop="0"
          >
            {isEditing ? 'Cancel' : 'Delete'}
          </GenericButton>
        </LeaderActionsBox>
      )
      break

    case 'member':
      action = <GenericButton onClick={handleOpenLeave}>Leave Team</GenericButton>
      break

    default:
      action = (
        <GenericButton onClick={handleJoin} border="none" boxShadow="none" background="#46A11B">
          Join Team
        </GenericButton>
      )
      break
  }

  return action
}

export default ActionType
