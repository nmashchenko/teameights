const CodeEvaluation = (code) => {
  let points = 0
  const answers = [
    '.teameightsDiv1',
    'display:',
    'flex; ',
    'justify-content:',
    'center; ',
    'align-items:',
    'center; }',
  ]
  const words = code.split(' ')

  const result = words.filter((word) => word !== '')

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].replace('/[.,/#!$%^&*;:{}=-_`~()]/g', '').replace(/\s{2,}/g, ' ')
  }

  console.log(result)

  for (let i = 0; i < result.length; i++) {
    if (answers.includes(result[i])) {
      points = points + 10
    }
  }

  return points
}

export default CodeEvaluation
