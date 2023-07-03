export const removeEmptyFields = (obj) => {
  for (let key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      let value = obj[key]

      if (value === null || value === '') {
        delete obj[key]
      }
    }
  }

  if (Object.keys(obj).length === 0) {
    return null
  }

  return obj
}
