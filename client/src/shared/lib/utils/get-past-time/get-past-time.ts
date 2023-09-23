export const getPastTime = (time: string | number | Date) => {
  const datePast = new Date(time);
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
