// * Components
import SelectField from '../../SelectField/SelectField'

const Roles = ({ options, data, setRoles }) => {
  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleRoles = (event) => {
    const {
      target: { value },
    } = event
    setRoles(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return <SelectField inputName={'Role'} options={options} data={data} handleChange={handleRoles} />
}

export default Roles
