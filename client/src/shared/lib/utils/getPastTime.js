export const getPastTime = (time) => {
  const datePast = new Date(time)
  const dateNow = new Date()
  const timeDiff = new Date() - new Date(time)
  const seconds = Math.floor(timeDiff / 1000)
  const minutes = Math.floor(timeDiff / (1000 * 60))
  const hours = Math.floor(timeDiff / (1000 * 60 * 60))
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  const months =
    datePast.getFullYear() - dateNow.getFullYear() - (datePast.getMonth() - dateNow.getMonth())
  const years = Math.floor(months / 12)

  if (years > 0) {
    return years + 'y ago'
  }
  if (months > 0) {
    return months + 'mo ago'
  }
  if (days > 0) {
    return days + 'd ago'
  }
  if (hours > 0) {
    return hours + 'h ago'
  }
  if (minutes > 0) {
    return minutes + 'm ago'
  }

  return seconds + 's ago'
}
