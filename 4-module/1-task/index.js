function makeFriendsList(friends) {
  let fullNames = '';

  for (let i = 0; i < friends.length; i++) {
    fullNames += `<li>${friends[i].firstName} ${friends[i].lastName}</li>`;
  }

  let ul = document.createElement('ul');
  ul.innerHTML = fullNames;

  return ul;
}