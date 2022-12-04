const CodeEvaluation = (code) => {
  let points = 0
  const answers = [
    'teameightsDiv1',
    'display',
    'flex',
    'justifycontent',
    'center',
    'alignitems',
    'center',
  ]
  const words = code.split(' ')

  const result = words.filter((word) => word !== '')

  const finalResult = result.map((word) => word.replace(/[^a-zA-Z0-9]/g, ''))

  console.log(finalResult)

  for (let i = 0; i < finalResult.length; i++) {
    if (answers.includes(finalResult[i])) {
      points = points + 10
    }
  }

  return points
}

export default CodeEvaluation
