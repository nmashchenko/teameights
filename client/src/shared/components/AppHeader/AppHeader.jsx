// * Modules

// * Assets
import PlatformLogo from '../../../assets/Platform/TeameightsLogo'
// * Components
import SearchPanel from '../../../components/SearchPanel/SearchPanel'

import { FiltersWrapper, LogoContainer, NavBar } from './AppHeader.styles'

const AppHeader = ({ sliceName, filterValueAction }) => {
  return (
    <FiltersWrapper>
      <NavBar>
        <LogoContainer>
          <PlatformLogo />
        </LogoContainer>
        <SearchPanel sliceName={sliceName} setFilterValueAction={filterValueAction} />
      </NavBar>
    </FiltersWrapper>
  )
}

export default AppHeader
