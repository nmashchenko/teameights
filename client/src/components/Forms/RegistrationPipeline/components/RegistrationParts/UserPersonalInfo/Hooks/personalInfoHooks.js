import { includes } from 'lodash'
/**
 * This handler resets error if it exists in errors array after user starts typing.
 * And then sets his age
 * @param {Function} setErrors
 * @param {Function} setAge
 * @returns
 */
const useHandleAge = (setErrors, setAge) => {
  const handleAge = (event) => {
    setErrors((errors) => errors.filter((word) => word !== 'age'))
    setAge(event.target.value)
  }

  return handleAge
}

/**
 * This handler resets error if it exists in errors array after user starts typing.
 * And then sets his username
 * @param {Function} setErrors
 * @param {Function} setUsername
 * @returns
 */
const useHandleUsername = (setErrors, setUsername, errors) => {
  const handleUsername = (event) => {
    if (includes(errors, 'Username is already taken!')) {
      setErrors([])
      setUsername(event.target.value)
    } else {
      setErrors((errors) => errors.filter((word) => word !== 'username'))
      setUsername(event.target.value)
    }
  }

  return handleUsername
}

/**
 * This handler resets error if it exists in errors array after user starts typing.
 * And then sets his name
 * @param {Function} setErrors
 * @param {Function} setName
 * @returns
 */
const useHandleName = (setErrors, setName) => {
  const handleName = (event) => {
    setErrors((errors) => errors.filter((word) => word !== 'name'))
    setName(event.target.value)
  }

  return handleName
}

/**
 * This handler resets error if it exists in errors array after user starts typing.
 * And then sets his country
 * @param {Function} setErrors
 * @param {Function} setCountry
 * @returns
 */
const useHandleCountry = (setErrors, setName) => {
  const handleCountry = (event) => {
    setErrors((errors) => errors.filter((word) => word !== 'country'))
    setName(event.target.value)
  }

  return handleCountry
}

/**
 * This handler resets error if it exists in errors array after user starts typing.
 * And then sets his description
 * @param {Function} setErrors
 * @param {Function} setDescription
 * @returns
 */
const useHandleDescription = (setErrors, setDescription) => {
  const handleDescription = (event) => {
    setErrors((errors) => errors.filter((word) => word !== 'description'))
    setDescription(event.target.value)
  }

  return handleDescription
}

const personalInfoHooks = Object.freeze({
  useHandleAge,
  useHandleName,
  useHandleUsername,
  useHandleCountry,
  useHandleDescription,
})
export default personalInfoHooks
