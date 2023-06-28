// * Styles
// * Colors
import { frameworkColors, frameworkTextColors } from '../../../../../constants/frameworkColors'
import { Framework } from '../UserCard.styles'

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
