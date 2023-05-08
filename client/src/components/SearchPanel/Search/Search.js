import countryList from 'react-select-country-list'

import SearchByChecks from './SearchByChecks/SearchByChecks'
import SearchByText from './SearchByText/SearchByText'

const Search = ({ currFilter, currFilterIndex, setFilterValue }) => {
  const countries = countryList().getData()

  switch (currFilter.type) {
    case 'text':
      return (
        <SearchByText
          placeholder={`Search by ${currFilter.name}`}
          currFilter={currFilter}
          currFilterIndex={currFilterIndex}
          setFilterValue={setFilterValue}
        />
      )
    case 'checks':
      return (
        <SearchByChecks
          currFilter={currFilter}
          currFilterIndex={currFilterIndex}
          setFilterValue={setFilterValue}
          countries={countries}
        />
      )
    default:
      return <p>Filter is not defined</p>
  }
}

export default Search
