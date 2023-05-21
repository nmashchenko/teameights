export const transformToCreateTeamDto = (arr) => {
  const members = {
    emails: [],
    ids: [],
  }

  for (let i = 0; i < arr.length; i++) {
    const entry = arr[i]

    members.emails.push(entry.email)
    members.ids.push(entry.id)
  }

  return { members }
}
