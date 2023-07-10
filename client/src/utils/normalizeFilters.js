export const normalizeFilters = (filters) => {
  const result = {}

  filters.forEach((entry) => {
    if (Array.isArray(entry.value)) {
      result[entry.name] = entry.value.map((item) => item.label)
    } else {
      result[entry.name] = entry.value
    }
  })

  return result
}
