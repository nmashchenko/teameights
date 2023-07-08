import { ThreeDots } from 'react-loader-spinner'
import { useFormikContext } from 'formik'
import { isEmpty } from 'lodash'

import { EditTeam, GenericButton, LeaderActionsBox } from './TeamForm.styles'

const ActionButtonsType = ({
  team,
  isEditing,
  setIsEditing,
  handleOpenDelete,
  handleOpenLeave,
  updateTeamsAvatar,
  role,
  handleJoin,
  updateTeam,
  isDataLoading,
}) => {
  let action = null
  const { values, setFieldValue, errors } = useFormikContext()

  console.log(errors)

  switch (role) {
    case 'leader':
      action = (
        <LeaderActionsBox>
          <EditTeam
            disabled={isEditing && !isEmpty(errors) ? true : false}
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

                if (values?.file) {
                  updateTeamsAvatar({ teamID: team._id, image: values?.file?.split(',')[1] })
                }
              } else {
                setIsEditing((prevState) => !prevState)
              }
            }}
            type={isEditing ? 'submit' : 'text'}
          >
            {isEditing ? (
              isDataLoading ? (
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
              )
            ) : (
              'Edit'
            )}
          </EditTeam>
          <GenericButton
            height="40px"
            onClick={() => {
              if (isEditing) {
                setIsEditing((prevState) => !prevState)
                setFieldValue('file', null)
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
          {isDataLoading ? (
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
            'Join Team'
          )}
        </GenericButton>
      )
      break
  }

  return action
}

export default ActionButtonsType
