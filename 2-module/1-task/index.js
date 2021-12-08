function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    if (typeof salaries[key] === 'number' &&
      !isNaN(salaries[key]) &&
      isFinite(salaries[key])
    ) {
      sum = sum + salaries[key];
    }
  }
  return sum;
}
