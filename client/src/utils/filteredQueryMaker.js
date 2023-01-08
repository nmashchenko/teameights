
const filteredQueryMaker = (countries, roles, programmingLanguages, frameworks) => {
  const querySearch = {
    isRegistered: true,
    userCountry: countries?.length ?  { $in: countries  } : null,
    userConcentration: roles?.length ?  { $in: roles  } : null,
    userProgrammingLanguages: programmingLanguages?.length ?  { $in: programmingLanguages  } : null,
    userFrameworks: frameworks?.length ?  { $in: frameworks  } : null,
  }
  const querySearchWithOutBlankFields = Object.fromEntries(Object.entries(querySearch).filter(([_, v]) => v != null));
  return querySearchWithOutBlankFields
}

export default filteredQueryMaker
