import React from 'react'

// * Assets
import FilterField from '../FilterField/FilterField'

import { FilterSection, Line, TitleText } from './Fielters.styles'

const ProgrammingLanguages = ({ options, data, setProgrammingLanguages }) => {
  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleProgrammingLanguages = (event) => {
    const {
      target: { value },
    } = event

    setProgrammingLanguages(
      /* On autofill we get a stringified value. */
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <FilterSection>
      <TitleText>Programming Languages</TitleText>
      <FilterField options={options} data={data} handleChange={handleProgrammingLanguages} />
      <Line />
    </FilterSection>
  )
}

export default ProgrammingLanguages
