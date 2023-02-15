const filteredQueryMaker = (countries, roles, programmingLanguages, frameworks) => {
  const querySearch = {
    isRegistered: true,
    country: countries?.length ? { $in: countries } : null,
    concentration: roles?.length ? { $in: roles } : null,
    programmingLanguages: programmingLanguages?.length ? { $in: programmingLanguages } : null,
    frameworks: frameworks?.length ? { $in: frameworks } : null,
  }
  const querySearchWithOutBlankFields = Object.fromEntries(
    Object.entries(querySearch).filter(([_, v]) => v != null),
  )

  return querySearchWithOutBlankFields
}

export default filteredQueryMaker
