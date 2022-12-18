// * Styles
import { Framework } from '../UserCard.styles'

// * Colors
import { frameworkColors, frameworkTextColors } from '../FrameworkColors'

const LengthTwoCase = ({ userFrameworks }) => {
  return (
    <>
      {userFrameworks.map((element) => (
        <Framework
          key={element}
          width="100%"
          background={frameworkColors[element]}
          color={frameworkTextColors[element]}
        >
          <h3>{element}</h3>
        </Framework>
      ))}
    </>
  )
}

export default LengthTwoCase