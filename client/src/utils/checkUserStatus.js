export const checkUserStatus = (user, id) => {
  if (user?._id === id) {
    return 'same'
  }
  if (user?.team?.members.includes(id)) {
    return 'teammember'
  }

  return 'other'
}
