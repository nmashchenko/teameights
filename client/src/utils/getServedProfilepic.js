import { defaultTeamImages } from '../constants/images'

export const getServedProfilePic = (selectedImage, picture, imgData) => {
  // if we have a default, choose default
  if (selectedImage !== '') {
    return require(`../assets/Images/team/${defaultTeamImages[selectedImage]}.png`)
  }

  if (picture !== null) {
    return imgData
  }
}
