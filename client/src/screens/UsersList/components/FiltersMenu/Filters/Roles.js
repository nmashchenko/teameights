// * Modules
import { FilterSection, TitleText, Line } from './Fielters.styles'

// * Assets
import FilterField from '../FilterField/FilterField'

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

  return (
    <FilterSection>
      <TitleText>Roles</TitleText>
      <FilterField options={options} data={data} handleChange={handleRoles} />
      <Line />
    </FilterSection>
  )
}

export default Roles
