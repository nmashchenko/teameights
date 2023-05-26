import { EditTeam, LeaderActionsBox, LeaveTeam } from './TeamForm.styles'

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
          <LeaveTeam
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
          </LeaveTeam>
        </LeaderActionsBox>
      )
      break

    case 'member':
      action = <LeaveTeam onClick={handleOpenLeave}>Leave Team</LeaveTeam>
      break

    default:
      action = (
        <LeaveTeam
          onClick={handleJoin}
          border="2px solid #46A11B"
          boxShadow="0px 2px 25px #46A11B60"
        >
          Join Team
        </LeaveTeam>
      )
      break
  }

  return action
}

export default ActionType
