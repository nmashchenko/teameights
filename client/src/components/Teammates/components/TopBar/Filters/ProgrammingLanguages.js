// * Components
import SelectField from '../../SelectField/SelectField'

const ProgrammingLanguages = ({ options, data, setProgrammingLanguages }) => {
  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleProgrammingLanguages = (event) => {
    const {
      target: { value },
    } = event

    setProgrammingLanguages(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <SelectField
      inputName={'Language'}
      options={options}
      data={data}
      handleChange={handleProgrammingLanguages}
    />
  )
}

export default ProgrammingLanguages
