function ucFirst(str) {
  if (str == '') {
    return '';
  }
  let str2 = str[0].toUpperCase()
  return str2 + str.slice(1);
}
