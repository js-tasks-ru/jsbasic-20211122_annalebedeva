class UserTable {
  constructor(rows) {
    const table = document.createElement('table');

    const content = rows.map(rowsItem => {
      return `<tr>
        <td>${rowsItem.name}</td>
        <td>${rowsItem.age}</td>
        <td>${rowsItem.salary}</td>
        <td>${rowsItem.city}</td>
        <td><button>X</button></td>
        </tr>`;
    });

    table.innerHTML = `<thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
    </thead><tbody>${content.join('')}</tbody>`

    table.addEventListener('click', this.onClick);

    this.elem = table;
  }

  onClick(event) {;
    if (event.target.tagName === 'BUTTON') {
      const td = event.target.parentNode;
      td.parentNode.remove();
    }
  }
}

export default UserTable;