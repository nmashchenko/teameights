export const calculateAge = (birthDate: string | Date): number => {
  const birthDateObj = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const birthYear = birthDateObj.getFullYear();

  let age = currentYear - birthYear;

  const isBirthdayPassed =
    currentDate.getMonth() > birthDateObj.getMonth() ||
    (currentDate.getMonth() === birthDateObj.getMonth() &&
      currentDate.getDate() >= birthDateObj.getDate());

  if (!isBirthdayPassed) {
    age--;
  }

  return age;
};
