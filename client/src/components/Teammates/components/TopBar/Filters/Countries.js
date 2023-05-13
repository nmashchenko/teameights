// * Components
import SelectField from '../../SelectField/SelectField'

const Countries = ({ options, data, setCountries }) => {
  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleCountries = (event) => {
    const {
      target: { value },
    } = event

    setCountries(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <SelectField
      inputName={'Country'}
      options={options}
      data={data}
      handleChange={handleCountries}
    />
  )
}

export default Countries
