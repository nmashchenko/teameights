import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import countryList from 'react-select-country-list'

import Cross from '../../assets/Sidebar/Cross'
import FlexWrapper from '../../shared/components/FlexWrapper/FlexWrapper'
import IconWrapper from '../../shared/components/IconWrapper/IconWrapper'
import Search from '../Search/Search'
import TagsList from '../TagsList/TagsList'

import {
  ModalSearchContainer,
  ModalSearchItem,
  ModalSearchList,
  ModalSearchTitle,
  StyledModalSearch,
} from './ModalSearch.style'

const ModalSearch = ({
  setOpenModal,
  sliceName,
  currFilterIndex,
  setCurrFilterIndex,
  setFilterValueAction,
}) => {
  const [filterOpened, setFilterOpened] = useState(false)

  const dispatch = useDispatch()
  const filtersArr = useSelector((state) => state[sliceName])
  const setFilterValue = (index, value) => dispatch(setFilterValueAction({ index, value }))

  const currFilter = filtersArr[currFilterIndex]

  const countries = countryList().getData()

  const onOpenFilterSettings = (index) => {
    setCurrFilterIndex(index)
    setFilterOpened(true)
  }

  return (
    <StyledModalSearch>
      <ModalSearchContainer direction="column" gap="24px">
        {!filterOpened ? (
          <>
            <FlexWrapper justify="space-between">
              <ModalSearchTitle>Filters</ModalSearchTitle>
              <IconWrapper
                onClick={() => setOpenModal(false)}
                width="24px"
                height="24px"
                cursor="pointer"
              >
                <Cross />
              </IconWrapper>
            </FlexWrapper>
            <ModalSearchList>
              {filtersArr.map((filter, index) => (
                <ModalSearchItem key={filter.name} onClick={() => onOpenFilterSettings(index)}>
                  {filter.text}
                </ModalSearchItem>
              ))}
            </ModalSearchList>
          </>
        ) : (
          <>
            <FlexWrapper justify="space-between">
              <ModalSearchTitle>{currFilter.text}</ModalSearchTitle>
              <IconWrapper
                onClick={() => setOpenModal(false)}
                width="24px"
                height="24px"
                cursor="pointer"
              >
                <Cross />
              </IconWrapper>
            </FlexWrapper>
            <Search
              sliceName={sliceName}
              currFilterIndex={currFilterIndex}
              setFilterValueAction={setFilterValueAction}
            />
            <TagsList sliceName={sliceName} setFilterValueAction={setFilterValueAction} />
          </>
        )}
      </ModalSearchContainer>
    </StyledModalSearch>
  )
}

export default ModalSearch
