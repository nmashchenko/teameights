export const calculateAge = (birthDate) => {
  // Parse the birth date string
  const birthYear = new Date(birthDate).getFullYear()

  // Get the current year
  const currentYear = new Date().getFullYear()

  // Calculate the age
  let age = currentYear - birthYear

  // Check if the birth date has passed in the current year
  const currentDate = new Date()
  const birthDateObj = new Date(birthDate)

  if (
    currentDate.getMonth() < birthDateObj.getMonth() ||
    (currentDate.getMonth() === birthDateObj.getMonth() &&
      currentDate.getDate() < birthDateObj.getDate())
  ) {
    // Subtract 1 from the age if the birth date has not yet occurred in the current year
    age--
  }

  return age
}
