import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cross from '../../shared/assets/Sidebar/Cross'
import FlexWrapper from '../../shared/ui/FlexWrapper/FlexWrapper'
import IconWrapper from '../../shared/ui/IconWrapper/IconWrapper'
import Tag from '../../shared/ui/Tag/Tag'
import Search from '../Search/Search'
import TagsList from '../TagsList/TagsList'

import {
  ModalButton,
  ModalSearchContainer,
  ModalSearchItem,
  ModalSearchList,
  ModalSearchTitle,
  ModalWrapper,
  StyledModalSearch,
} from './ModalSearch.style'

const ModalSearch = ({
  openModal,
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

  const onOpenFilterSettings = (index) => {
    setCurrFilterIndex(index)
    setFilterOpened(true)
  }

  const leftButtonHandler = () => {
    if (!filterOpened) {
      filtersArr.forEach((filter, index) => {
        if (filter.type === 'text') {
          setFilterValue(index, '')
        }
        if (filter.type === 'checks') {
          setFilterValue(index, [])
        }
        if (filter.type === 'range') {
          setFilterValue(index, null)
        }
      })
    } else {
      if (currFilter.type === 'text') {
        setFilterValue(currFilterIndex, '')
      }
      if (currFilter.type === 'checks') {
        setFilterValue(currFilterIndex, [])
      }
      if (currFilter.type === 'range') {
        setFilterValue(currFilterIndex, null)
      }
    }
  }

  const rightButtonHandler = () => {
    if (!filterOpened) {
      setOpenModal(false)
    } else {
      setFilterOpened(false)
    }
  }

  const renderTag = (filter) => {
    switch (filter.type) {
      case 'text':
        if (filter.value.length) {
          return <Tag>@{filter.value}</Tag>
        }
        break
      case 'checks':
        if (filter.value.length) {
          return (
            <Tag>
              {filter.value.length} {filter.name}
            </Tag>
          )
        }
        break
      case 'range':
        if (filter.value) {
          return (
            <Tag>
              {filter.value[0]} {filter.value[1]}
            </Tag>
          )
        }
        break
    }
  }

  return (
    <ModalWrapper open={openModal} anchor="right" transitionDuration={400}>
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
                    <FlexWrapper align="center" gap="8px">
                      <p>{filter.text}</p>
                      {renderTag(filter)}
                    </FlexWrapper>
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
              <TagsList
                currFilter={currFilter}
                currFilterIndex={currFilterIndex}
                sliceName={sliceName}
                setFilterValueAction={setFilterValueAction}
              />
            </>
          )}
          <FlexWrapper margin="auto 0 0 0" gap="8px">
            <ModalButton outlined onClick={leftButtonHandler}>
              Clear
            </ModalButton>
            <ModalButton onClick={rightButtonHandler}>
              {filterOpened ? 'Save' : 'Search'}
            </ModalButton>
          </FlexWrapper>
        </ModalSearchContainer>
      </StyledModalSearch>
    </ModalWrapper>
  )
}

export default ModalSearch
