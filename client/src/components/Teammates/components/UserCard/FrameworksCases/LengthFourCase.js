// * Styles
// * Colors
import {
  frameworkColors,
  frameworkTextColors,
} from '../../../../../shared/constants/frameworkColors'
import { Framework } from '../UserCard.styles'

const LengthFourCase = ({ userFrameworks }) => {
  return (
    <>
      {userFrameworks.map((element, index) => (
        <Framework
          key={element}
          background={frameworkColors[element]}
          color={frameworkTextColors[element]}
        >
          <h3>{element}</h3>
        </Framework>
      ))}
    </>
  )
}

export default LengthFourCase
