// * Styles
// * Colors
import { frameworkColors, frameworkTextColors } from '../FrameworkColors'
import { AndMore, Framework } from '../UserCard.styles'

const LengthFourSlicedCase = ({ userFrameworks }) => {
  const ufLength = userFrameworks.length - 2

  return (
    <>
      {userFrameworks.slice(0, 4).map((element, index) =>
        index % 2 === 0 ? (
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
            {index === 3 ? <AndMore makeWhite={element === 'IOS'}>{ufLength - 2}+</AndMore> : <></>}
            <h3>{element}</h3>
          </Framework>
        ),
      )}
    </>
  )
}

export default LengthFourSlicedCase
