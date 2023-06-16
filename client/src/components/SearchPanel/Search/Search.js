import countryList from 'react-select-country-list'

import SearchByChecks from './SearchByChecks/SearchByChecks'
import SearchByRange from './SearchByRange/SearchByRange'
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
      // Since the countries are not taken from the state, we put a condition here
      if (currFilter.name === 'countries') {
        return (
          <SearchByChecks
            currFilter={currFilter}
            currFilterIndex={currFilterIndex}
            setFilterValue={setFilterValue}
            items={countries}
          />
        )
      } else {
        return (
          <SearchByChecks
            currFilter={currFilter}
            currFilterIndex={currFilterIndex}
            setFilterValue={setFilterValue}
            items={currFilter.value}
          />
        )
      }
    case 'range':
      return (
        <SearchByRange
          currFilter={currFilter}
          currFilterIndex={currFilterIndex}
          setFilterValue={setFilterValue}
        />
      )
    default:
      return <p>Filter is not defined</p>
  }
}

export default Search
