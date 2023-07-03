import { countryFlags } from '../../constants/countryFlags'

export const getCountryFlag = (countryName) => {
  // Loop through the countryFlags object
  for (const countryCode in countryFlags) {
    const country = countryFlags[countryCode]

    // Check if the name matches the desired country
    if (country.name === countryName) {
      const imageURL = country.image

      return imageURL // Exit the loop since we found the desired country
    }
  }
}
