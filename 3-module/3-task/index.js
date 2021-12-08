function camelize(str) {
  let words = str.split('-');
  let newWords = words.map((item, index) => {
    if (index == 0) {
      return item;
    } else {
      item = item[0].toUpperCase() + item.slice(1);
      return item;
    }
  });
  let str2 = newWords.join('');
  return str2;
}