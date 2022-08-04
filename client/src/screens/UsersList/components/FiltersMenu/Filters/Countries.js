// * Modules
import { FilterSection, TitleText, Line } from './Fielters.styles'

// * Assets
import FilterField from '../FilterField/FilterField'

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
    <FilterSection>
      <TitleText>Countries</TitleText>
      <FilterField options={options} data={data} handleChange={handleCountries} />
      <Line />
    </FilterSection>
  )
}

export default Countries
