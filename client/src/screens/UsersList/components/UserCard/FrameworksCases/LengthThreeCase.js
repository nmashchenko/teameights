// * Styles
// * Colors
import { frameworkColors, frameworkTextColors } from '../FrameworkColors'
import { Framework } from '../UserCard.styles'

const LengthThreeCase = ({ userFrameworks }) => {
  return (
    <>
      {userFrameworks.map((element, index) =>
        index === 0 ? (
          <Framework
            key={element}
            marginRight="12px"
            background={frameworkColors[element]}
            color={frameworkTextColors[element]}
          >
            <h3>{element}</h3>
          </Framework>
        ) : (
          <Framework
            key={element}
            background={frameworkColors[element]}
            color={frameworkTextColors[element]}
          >
            <h3>{element}</h3>
          </Framework>
        ),
      )}
    </>
  )
}

export default LengthThreeCase
