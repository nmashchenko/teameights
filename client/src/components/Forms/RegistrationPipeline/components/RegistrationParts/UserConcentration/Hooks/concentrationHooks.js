/**
 * This handler resets error if it exists in errors array after user starts typing.
 * And then sets selected programming languages
 * @param {Function} setErrors
 * @param {Function} setProgrammingLanguages
 * @returns
 */
const useHandleProgrammingLanguages = (setErrors, setProgrammingLanguages) => {
  const handleProgrammingLanguages = (event) => {
    setErrors((errors) => errors.filter((word) => word !== 'programmingLanguages'))
    const {
      target: { value },
    } = event

    setProgrammingLanguages(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return handleProgrammingLanguages
}

/**
 * This handler resets error if it exists in errors array after user starts typing.
 * And then sets selected frameworks
 * @param {Function} setErrors
 * @param {Function} setFrameworks
 * @returns
 */
const useHandleFrameworks = (setErrors, setFrameworks) => {
  const handleFrameworks = (event) => {
    setErrors((errors) => errors.filter((word) => word !== 'frameworks'))
    const {
      target: { value },
    } = event

    setFrameworks(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return handleFrameworks
}

/**
 * This handler resets error if it exists in errors array after user starts typing.
 * And then sets his concentration
 * @param {Function} setErrors
 * @param {Function} setConcentration
 * @returns
 */
const useHandleConcentration = (setErrors, setConcentration) => {
  const handleConcentration = (event) => {
    setErrors((errors) => errors.filter((word) => word !== 'concentration'))
    setConcentration(event.target.value)
  }

  return handleConcentration
}

const concentrationHooks = Object.freeze({
  useHandleProgrammingLanguages,
  useHandleFrameworks,
  useHandleConcentration,
})

export default concentrationHooks
