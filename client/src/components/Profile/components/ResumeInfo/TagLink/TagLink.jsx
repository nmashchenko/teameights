import { useNavigate } from 'react-router-dom'

import { StyledTagButton, StyledTagLink, TagText } from './TagLink.styles'

const TagLink = ({ icon, to, children, type = 'button' }) => {
  const navigate = useNavigate()

  return (
    <>
      {type === 'button' && (
        <StyledTagButton onClick={() => navigate(to)}>
          {icon}
          <TagText>{children}</TagText>
        </StyledTagButton>
      )}

      {type === 'link' && (
        <StyledTagLink href={to} target="_blank">
          {icon}
          <TagText>{children}</TagText>
        </StyledTagLink>
      )}
    </>
  )
}

export default TagLink
