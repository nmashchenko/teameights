export const determineUserRoleInTeam = (team, user) => {
  switch (true) {
    case team?.leader._id === user?._id:
      return 'leader'
    case team?.members.some((member) => member?._id === user?._id):
      return 'member'
    default:
      return 'regular'
  }
}
