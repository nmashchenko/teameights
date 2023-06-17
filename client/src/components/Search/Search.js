import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import countryList from 'react-select-country-list'

import SearchByChecks from './SearchByChecks/SearchByChecks'
import SearchByRange from './SearchByRange/SearchByRange'
import SearchByText from './SearchByText/SearchByText'

const Search = ({ sliceName, setFilterValueAction, currFilterIndex }) => {
  const dispatch = useDispatch()
  const filtersArr = useSelector((state) => state[sliceName])
  const setFilterValue = (index, value) => dispatch(setFilterValueAction({ index, value }))

  const currFilter = filtersArr[currFilterIndex]

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
