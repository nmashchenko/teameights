export const truncateString = (str, screenWidth) => {
  if (str?.length > 21 && screenWidth > 1024) {
    let halfLength = Math.floor((21 - 3) / 2) // Subtracting 3 for the ellipsis
    let firstHalf = str.substr(0, halfLength)
    let secondHalf = str.substr(str.length - halfLength)

    return firstHalf + '...' + secondHalf
  }

  return str
}
