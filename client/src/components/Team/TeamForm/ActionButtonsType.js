import { useFormikContext } from 'formik'

import { EditTeam, GenericButton, LeaderActionsBox } from './TeamForm.styles'

const ActionButtonsType = ({
  team,
  isEditing,
  setIsEditing,
  editImage,
  handleOpenDelete,
  handleOpenLeave,
  updateTeamsAvatar,
  servedProfilePic,
  picture,
  selectedImage,
  role,
  handleJoin,
  updateTeam,
}) => {
  let action = null
  const { values } = useFormikContext()

  switch (role) {
    case 'leader':
      action = (
        <LeaderActionsBox>
          <EditTeam
            onClick={() => {
              if (isEditing) {
                const updateTeamObj = {
                  teamid: team._id,
                  country: values?.country,
                  name: values?.name,
                  description: values?.description,
                  type: values?.type.toLowerCase(),
                  tag: values?.tag,
                }

                updateTeam(updateTeamObj)

                if (editImage && (picture || selectedImage !== '')) {
                  updateTeamsAvatar({ teamID: team._id, image: servedProfilePic.split(',')[1] })
                }
              }
              setIsEditing((prevState) => !prevState)
            }}
            type={isEditing ? 'submit' : 'text'}
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
            type="text"
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

export default ActionButtonsType
