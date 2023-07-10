import ChooseAvatar from '../../../shared/components/ChooseAvatar/ChooseAvatar'
import About from '../About/About'
import LargeCardSwitch from '../LargeCardSwitch/LargeCardSwitch'
import Members from '../Members/Members'

export const TeamProfileLargeCard = ({
  isMembers,
  editImage,
  chosenLeader,
  changeChosenLeader,
  handleRemoveMembers,
  isEditing,
  team,
  setIsEditing,
  handleOpenDelete,
  switchIsMembers,
  handleOpenInvite,
  role,
  handleOpenTransferLeader,
}) => {
  /**
   * Based on isMembers value which defines if we should display Members or About
   * we render specific component
   */
  const input = isMembers ? (
    <Members
      chosenLeader={chosenLeader}
      changeChosenLeader={changeChosenLeader}
      handleRemoveMembers={handleRemoveMembers}
      isEditing={isEditing}
      team={team}
      isMembers={isMembers}
      role={role}
      handleOpenInvite={handleOpenInvite}
      handleOpenTransferLeader={handleOpenTransferLeader}
    />
  ) : (
    <About
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      handleOpenDelete={handleOpenDelete}
      team={team}
    />
  )

  return (
    /**
     * Here, based on editImage variable, which becomes active when user clicks on Pencil icon near the team avatar,
     * we render specific components, e.g. we render TopBar and Members/About or EditImage component
     */
    <>
      {!editImage && (
        <>
          <LargeCardSwitch
            isMembers={isMembers}
            about={
              <About
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                handleOpenDelete={handleOpenDelete}
                team={team}
              />
            }
            switchIsMembers={switchIsMembers}
            handleOpenInvite={handleOpenInvite}
            role={role}
            isEditing={isEditing}
            handleOpenTransferLeader={handleOpenTransferLeader}
          />
          {input}
        </>
      )}

      {editImage && <ChooseAvatar type="team" />}
    </>
  )
}
