import SearchByText from './SearchByText/SearchByText'

const Search = ({ currFilter, setCurrFilter, setFilterValue }) => {
  switch (currFilter.type) {
    case 'text':
      return (
        <SearchByText
          placeholder={`Search by ${currFilter.name}`}
          currFilter={currFilter}
          setCurrFilter={setCurrFilter}
          setFilterValue={setFilterValue}
        />
      )
    default:
      return <p>Filter is not defined</p>
  }
}

export default Search
