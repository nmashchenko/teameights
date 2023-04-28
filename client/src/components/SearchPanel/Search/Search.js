import SearchByText from './SearchByText/SearchByText'

const Search = ({ filterName }) => {
  switch (filterName) {
    case 'name':
      return <SearchByText filterName={filterName} placeholder="Search by name" />
    case 'tag':
      return <SearchByText filterName={filterName} placeholder="Search by tag" />
    default:
      return <SearchByText filterName={filterName} placeholder="" />
  }
}

export default Search
