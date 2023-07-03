export const convertYearToDate = (dateOne, dateTwo) => {
  let dateOneISODate = null
  let dateTwoISODate = null

  if (dateOne && dateOne != 0) {
    dateOneISODate = new Date(dateOne, 0).toISOString()
  }

  if (dateTwo && dateTwo != 0) {
    dateTwoISODate = new Date(dateTwo, 0).toISOString()
  }

  return {
    dateOne: dateOneISODate,
    dateTwo: dateTwoISODate,
  }
}
