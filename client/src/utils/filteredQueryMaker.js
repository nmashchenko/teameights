const users = (countries, roles, programmingLanguages, frameworks) => {
  const querySearch = {
    isRegistered: true,
    country: countries.length ? { $in: countries } : null,
    concentration: roles?.length ? { $in: roles } : null,
    programmingLanguages: programmingLanguages?.length ? { $in: programmingLanguages } : null,
    frameworks: frameworks?.length ? { $in: frameworks } : null,
  }
  const querySearchWithOutBlankFields = Object.fromEntries(
    Object.entries(querySearch).filter(([_, v]) => v != null),
  )

  return querySearchWithOutBlankFields
}

const teams = (countries, members, teamname, tag) => {
  const querySearch = {
    country: countries.length ? { $in: countries } : null,
    name: teamname ? { $regex: teamname, $options: 'i' } : null,
    tag: tag ? { $regex: tag, $options: 'i' } : null,
    members: members ? members : null,
  }

  const querySearchWithOutBlankFields = Object.fromEntries(
    Object.entries(querySearch).filter(([_, v]) => v != null),
  )

  return querySearchWithOutBlankFields
}

const filteredQueryMaker = Object.freeze({
  users,
  teams,
})

export default filteredQueryMaker
