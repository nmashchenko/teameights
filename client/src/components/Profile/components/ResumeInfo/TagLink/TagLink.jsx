import { useNavigate } from 'react-router-dom'

import { StyledTagLink, TagText } from './TagLink.styles'

const TagLink = ({ icon, to, children }) => {
  const navigate = useNavigate()

  return (
    <StyledTagLink onClick={() => navigate(to)}>
      {icon}
      <TagText>{children}</TagText>
    </StyledTagLink>
  )
}

export default TagLink
