// * Styles
// * Colors
import { frameworkColors, frameworkTextColors } from '../../../../../constants/frameworkColors'
import { Framework } from '../UserCard.styles'

const LengthThreeCase = ({ userFrameworks }) => {
  return (
    <>
      {userFrameworks.map((element, index) =>
        index === 0 || index === 1 ? (
          <Framework
            key={element}
            // marginRight="12px"
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
            width="100%"
          >
            <h3>{element}</h3>
          </Framework>
        ),
      )}
    </>
  )
}

export default LengthThreeCase
