export default function checkEntriesForValue(data) {
  for (const entry of data) {
    if (
      (typeof entry.value === 'string' && entry.value !== '') ||
      (Array.isArray(entry.value) && entry.value.length > 0)
    ) {
      return true
    }
  }

  return false
}
