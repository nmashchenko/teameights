import { EditTeam, LeaderActionsBox, LeaveTeam } from './TeamForm.styles'

export const getLeaderOrMemberAction = (
  team,
  user,
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
) => {
  let action = null

  switch (true) {
    case team?.leader._id === user?._id:
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

    case team?.members.some((member) => member._id === user?._id):
      action = <LeaveTeam onClick={handleOpenLeave}>Leave Team</LeaveTeam>
      break

    default:
      action = <LeaveTeam onClick={() => console.log('hi')}>Join Team</LeaveTeam>
      break
  }

  return action
}
