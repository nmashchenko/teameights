import { StyledChecksItem } from './SearchByChecks.styles'

const ChecksItem = ({ currFilter, currFilterIndex, setFilterValue, item }) => {
  const isActive = !!currFilter.value.find((el) => el.value === item.value)

  const onChangeValue = () => {
    if (isActive) {
      const newArr = currFilter.value.filter((el) => el.value !== item.value)

      setFilterValue(currFilterIndex, newArr)
    } else {
      setFilterValue(currFilterIndex, [...currFilter.value, item])
    }
  }

  return (
    <StyledChecksItem onClick={onChangeValue}>
      <input type="checkbox" checked={isActive} onChange={() => {}} />
      <p>{item.label}</p>
    </StyledChecksItem>
  )
}

export default ChecksItem
