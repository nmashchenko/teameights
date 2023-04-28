import { useState } from 'react'

import SearchIcon from '../../../../../assets/SearchIcon'

import SearchByText from './SearchByText/SearchByText'
import { SearchBox, SearchBtn, SearchInput } from './Search.styles'

const Search = ({ filter }) => {
  const [nameValue, setNameValue] = useState('')
  const [tagValue, setTagValue] = useState('')
  const [countriesValue, setCountriesValue] = useState([])
  const [technologiesValue, setTechnologiesValue] = useState([])

  switch (filter.name) {
    case 'name':
      return <SearchByText value={nameValue} onChange={setNameValue} placeholder="Search by name" />
    case 'tag':
      return <SearchByText value={tagValue} onChange={setTagValue} placeholder="Search by tag" />
    default:
      return <SearchByText value={nameValue} onChange={setNameValue} placeholder="" />
  }
}

export default Search
