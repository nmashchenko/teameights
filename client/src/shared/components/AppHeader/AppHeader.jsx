import { useState } from 'react'

import PlatformLogo from '../../../assets/Platform/TeameightsLogo'
import SearchIcon from '../../../assets/Shared/SearchIcon'
import ModalSearch from '../../../components/ModalSearch/ModalSearch'
import SearchPanel from '../SearchPanel/SearchPanel'

import { FiltersWrapper, LogoContainer, NavBar, SearchIconWrapper } from './AppHeader.styles'

const AppHeader = ({ sliceName, filterValueAction, hideLogoForMobile = false }) => {
  const [currFilterIndex, setCurrFilterIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <SearchIconWrapper onClick={() => setOpenModal(true)}>
        <SearchIcon />
      </SearchIconWrapper>
      <FiltersWrapper>
        <NavBar>
          <LogoContainer hideLogoForMobile={hideLogoForMobile}>
            <PlatformLogo />
          </LogoContainer>
          <SearchPanel
            sliceName={sliceName}
            currFilterIndex={currFilterIndex}
            setCurrFilterIndex={setCurrFilterIndex}
            setFilterValueAction={filterValueAction}
          />

          <ModalSearch
            openModal={openModal}
            setOpenModal={setOpenModal}
            sliceName={sliceName}
            currFilterIndex={currFilterIndex}
            setCurrFilterIndex={setCurrFilterIndex}
            setFilterValueAction={filterValueAction}
          />
        </NavBar>
      </FiltersWrapper>
    </>
  )
}

export default AppHeader
