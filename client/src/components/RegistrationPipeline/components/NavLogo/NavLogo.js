// * Modules
import { useState } from 'react'

import InfoIcon from '../../../../shared/assets/Shared/InfoIcon'
import { useGetScreenWidth } from '../../../../shared/lib/hooks/useGetScreenWidth'
import { Text } from '../../../../shared/styles/Tpography.styles'
import FlexWrapper from '../../../../shared/ui/FlexWrapper/FlexWrapper'

// * Assets
import Hover from './Hover'
import { InfoContainer, SectionName, SectionNameOptionalText } from './NavLogo.styles'

function NavLogo({ sectionName, isOptionalStep, oneOfOptionalFieldsHasValue }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const width = useGetScreenWidth()

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <Hover anchorEl={anchorEl} handlePopoverClose={handlePopoverClose} open={open} />
      <FlexWrapper width="100%" justify="space-between">
        {/* <SiteLogo /> */}
        <SectionName>
          {sectionName}{' '}
          {isOptionalStep && !oneOfOptionalFieldsHasValue && (
            <SectionNameOptionalText>(Optional)</SectionNameOptionalText>
          )}
        </SectionName>
        <InfoContainer onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
          {width > 600 && <Text fontSize="18px">Need Help</Text>}
          <InfoIcon />
        </InfoContainer>
      </FlexWrapper>
    </>
  )
}

export default NavLogo
