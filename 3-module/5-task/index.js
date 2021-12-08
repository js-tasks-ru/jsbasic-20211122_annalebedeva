function getMinMax(str) {
  let arr = str
    .split(' ')
    .map(num => Number(num))
    .filter(item => !isNaN(item))
    .sort((a, b) => a - b);

  return {
    min: arr[0],
    max: arr[arr.length - 1]
  };
}