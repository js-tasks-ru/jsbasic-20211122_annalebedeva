function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const div = document.querySelector('#text');
  btn.addEventListener('click', () => {
    if (div.hasAttribute('hidden')) {
      div.removeAttribute('hidden');
    } else {
      div.setAttribute('hidden', true);
    }
  });
}
