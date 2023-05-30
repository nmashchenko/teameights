export const formatDateString = (inputValue) => {
  const [day, month, year] = inputValue.split('/')

  // Create a new Date object in JavaScript (months start from 0)
  const birthday = new Date(year, month - 1, day, 0, 0, 0).toISOString()

  return birthday
}
