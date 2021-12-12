function highlight(table) {
  const rows = table.tBodies[0].rows;
  for (let i = 0; i < rows.length; i++) {
      // Добавляем класс
      if (rows[i].cells[3].getAttribute('data-available') == "true") {
        rows[i].classList.add('available')
      } else if (rows[i].cells[3].getAttribute('data-available') == "false") {
        rows[i].classList.add('unavailable')
      } else {
        rows[i].setAttribute('hidden', true);
      }

      // gender
      if (rows[i].cells[2].textContent == "m") {
        rows[i].classList.add('male')
      } else {
        rows[i].classList.add('female')
      }

      // style
      if (Number(rows[i].cells[1].textContent) < 18) {
        rows[i].style="text-decoration: line-through"
      }
  }
}