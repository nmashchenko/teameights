// * Styles
// * Colors
import { frameworkColors, frameworkTextColors } from '../../../../../constants/frameworkColors'
import { Framework } from '../UserCard.styles'

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
