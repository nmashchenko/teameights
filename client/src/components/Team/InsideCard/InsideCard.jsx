import { defaultTeamImages } from '../../../constants/images'
import About from '../About/About'
import EditImage from '../EditImage/EditImage'
import Members from '../Members/Members'
import TopContainerComponent from '../TopContainer/TopContainer'

export const InsideCard = ({
  isMembers,
  editImage,
  chosenLeader,
  changeChosenLeader,
  handleRemoveMembers,
  isEditing,
  team,
  selectLeader,
  openSelectLeader,
  setIsEditing,
  handleOpenDelete,
  switchIsMembers,
  handleOpenInvite,
  selectedImage,
  setImgData,
  setPicture,
  changeSelectedImage,
  imgData,
  picture,
}) => {
  const input = isMembers ? (
    <Members
      chosenLeader={chosenLeader}
      changeChosenLeader={changeChosenLeader}
      handleRemoveMembers={handleRemoveMembers}
      isEditing={isEditing}
      team={team}
      selectLeader={selectLeader}
      openSelectLeader={openSelectLeader}
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
    <>
      {editImage ? (
        <></>
      ) : (
        <TopContainerComponent
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
        />
      )}
      <>
        {editImage ? (
          <EditImage
            selectedImage={selectedImage}
            setImgData={setImgData}
            setPicture={setPicture}
            changeSelectedImage={changeSelectedImage}
            defaultTeamImages={defaultTeamImages}
            imgData={imgData}
            picture={picture}
          />
        ) : (
          input
        )}
      </>
    </>
  )
}
