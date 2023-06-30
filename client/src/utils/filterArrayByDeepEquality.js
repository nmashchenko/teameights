const _ = require('lodash')

export const filterArrayByDeepEquality = (array, comparisonObject) => {
  return array.filter((obj) => !_.isEqual(obj, comparisonObject))
}
