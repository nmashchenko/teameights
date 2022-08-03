// * Styles
import { Framework } from '../UserCard.styles'

// * Colors
import { frameworkColors, frameworkTextColors } from '../FrameworkColors'

const LengthOneCase = ({ userFrameworks }) => {
  return (
    <>
      {userFrameworks.map((element) => (
        <Framework
          key={element}
          justifyContent="center"
          marginBottom="0"
          background={frameworkColors[element]}
          color={frameworkTextColors[element]}
        >
          <h3>{element}</h3>
        </Framework>
      ))}
    </>
  )
}

export default LengthOneCase
