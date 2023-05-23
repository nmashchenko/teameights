export const formatDateInput = (inputValue) => {
  // Remove any non-digit characters
  const digitsOnly = inputValue.replace(/\D/g, '') // Remove non-digit characters
  let formattedValue = ''

  if (digitsOnly.length > 0) {
    formattedValue = digitsOnly.slice(0, 2) // Extract the first two digits for day

    if (digitsOnly.length > 2) {
      formattedValue += '/' + digitsOnly.slice(2, 4) // Add a slash and extract the next two digits for month

      if (digitsOnly.length > 4) {
        formattedValue += '/' + digitsOnly.slice(4, 8) // Add a slash and extract the next four digits for year
      }
    }
  }

  return formattedValue
}
