import isEmpty from 'lodash/isEmpty'

const filteredQueryMaker = (countries, roles, programmingLanguages) => {
  if (!isEmpty(countries) && isEmpty(roles) && isEmpty(programmingLanguages)) {
    const querySearch = {
      isRegistered: true,
      userCountry: { $in: countries },
    }

    return querySearch
  } else if (!isEmpty(roles) && isEmpty(countries) && isEmpty(programmingLanguages)) {
    const querySearch = {
      isRegistered: true,
      userConcentration: { $in: roles },
    }

    return querySearch
  } else if (!isEmpty(programmingLanguages) && isEmpty(countries) && isEmpty(roles)) {
    const querySearch = {
      isRegistered: true,
      userProgrammingLanguages: { $in: programmingLanguages },
    }

    return querySearch
  } else if (!isEmpty(countries) && !isEmpty(roles) && isEmpty(programmingLanguages)) {
    const querySearch = {
      isRegistered: true,
      userCountry: { $in: countries },
      userConcentration: { $in: roles },
    }

    return querySearch
  } else if (!isEmpty(countries) && !isEmpty(programmingLanguages) && isEmpty(roles)) {
    const querySearch = {
      isRegistered: true,
      userCountry: { $in: countries },
      userProgrammingLanguages: { $in: programmingLanguages },
    }

    return querySearch
  } else if (!isEmpty(roles) && !isEmpty(programmingLanguages) && isEmpty(countries)) {
    const querySearch = {
      isRegistered: true,
      userConcentration: { $in: roles },
      userProgrammingLanguages: { $in: programmingLanguages },
    }

    return querySearch
  } else if (!isEmpty(roles) && !isEmpty(programmingLanguages) && !isEmpty(countries)) {
    const querySearch = {
      isRegistered: true,
      userCountry: { $in: countries },
      userConcentration: { $in: roles },
      userProgrammingLanguages: { $in: programmingLanguages },
    }

    return querySearch
  } else {
    const querySearch = {
      isRegistered: true,
    }

    return querySearch
  }
}

export default filteredQueryMaker
