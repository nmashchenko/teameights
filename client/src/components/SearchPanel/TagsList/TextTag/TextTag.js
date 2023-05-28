import Close from '../../../../assets/Close'
import { CrossWrapper, TagItem, TagSubItem } from '../TagsList.styles'

const TextTag = ({ value, filterIndex, setFilterValue }) => {
  return (
    <TagItem>
      <TagSubItem onClick={() => setFilterValue(filterIndex, '')}>
        <p>{value.length <= 20 ? value : `${value.slice(0, 20)}...`}</p>
        <CrossWrapper>
          <Close />
        </CrossWrapper>
      </TagSubItem>
    </TagItem>
  )
}

export default TextTag
