// * Styles
// * Colors
import {
  frameworkColors,
  frameworkTextColors,
} from '../../../../../shared/constants/frameworkColors'
import { AndMore, Framework } from '../UserCard.styles'

const LengthFourSlicedCase = ({ userFrameworks }) => {
  const ufLength = userFrameworks.length - 2

  return (
    <>
      {userFrameworks.slice(0, 4).map((element, index) => (
        <Framework
          key={element}
          background={frameworkColors[element]}
          color={frameworkTextColors[element]}
        >
          {index === 3 ? <AndMore makeWhite={element === 'IOS'}>{ufLength - 2}+</AndMore> : <></>}
          <h3>{element}</h3>
        </Framework>
      ))}
    </>
  )
}

export default LengthFourSlicedCase
