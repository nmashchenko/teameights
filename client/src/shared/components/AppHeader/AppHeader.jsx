import { useState } from 'react'

import PlatformLogo from '../../../assets/Platform/TeameightsLogo'
import SearchIcon from '../../../assets/Shared/SearchIcon'
import ModalSearch from '../../../components/ModalSearch/ModalSearch'
import SearchPanel from '../SearchPanel/SearchPanel'

import { FiltersWrapper, LogoContainer, NavBar, SearchIconWrapper } from './AppHeader.styles'

const AppHeader = ({ sliceName, filterValueAction }) => {
  const [currFilterIndex, setCurrFilterIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  return (
    <FiltersWrapper>
      <NavBar>
        <LogoContainer>
          <PlatformLogo />
          <SearchIconWrapper onClick={() => setOpenModal(true)}>
            <SearchIcon />
          </SearchIconWrapper>
        </LogoContainer>
        <SearchPanel
          sliceName={sliceName}
          currFilterIndex={currFilterIndex}
          setCurrFilterIndex={setCurrFilterIndex}
          setFilterValueAction={filterValueAction}
        />
        {openModal ? (
          <ModalSearch
            setOpenModal={setOpenModal}
            sliceName={'usersFilters'}
            currFilterIndex={currFilterIndex}
            setCurrFilterIndex={setCurrFilterIndex}
            setFilterValueAction={filterValueAction}
          />
        ) : null}
      </NavBar>
    </FiltersWrapper>
  )
}

export default AppHeader
