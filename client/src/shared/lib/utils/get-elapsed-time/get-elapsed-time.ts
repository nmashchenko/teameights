/**
 * Calculates and formats the time elapsed from a specified time to the current time.
 *
 * @param {string | number | Date} time - The past time from which the elapsed time is calculated. This can be a string representing a date, a number representing the milliseconds since January 1, 1970, 00:00:00 UTC, or a Date object.
 * @returns {string} A string representing the elapsed time in a human-readable format. The string contains the largest non-zero time unit followed by an abbreviation for that unit and " ago". For example, "1h ago" for one hour ago or "2d ago" for two days ago.
 *
 * @example
 * // Assuming the current date and time is "2023-09-25T12:00:00.000Z"
 * // returns "1d ago"
 * getElapsedTime(new Date("2023-09-24T12:00:00.000Z"));
 */
export const getElapsedTime = (time: string | number | Date) => {
  const datePast = new Date(time);
  if (isNaN(datePast.getTime())) {
    throw new Error('Invalid date input');
  }
  const dateNow = new Date();
  const timeDiff = dateNow.getTime() - datePast.getTime();

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months =
    (dateNow.getFullYear() - datePast.getFullYear()) * 12 +
    dateNow.getMonth() -
    datePast.getMonth();
  const years = Math.floor(months / 12);

  if (years > 0) return `${years}y ago`;
  if (months > 0) return `${months}mo ago`;
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;

  return `${seconds}s ago`;
};
