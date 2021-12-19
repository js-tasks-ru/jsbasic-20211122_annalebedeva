function initCarousel() {
  const arrRight = document.querySelector('.carousel__arrow_right');
  const arrLeft = document.querySelector('.carousel__arrow_left');
  const carousel = document.querySelector('.carousel__inner');

  let currentShift = 0;
  let width = carousel.offsetWidth;
  const MAX_SLIDES = 3;

  arrLeft.style.display = 'none';

  arrRight.addEventListener('click', () => {
    currentShift += width;
    carousel.style.transform = `translateX(-${currentShift}px)`;

    if (currentShift > 0) {
      arrLeft.style.display = '';
    }

    if (currentShift == width * MAX_SLIDES) {
      arrRight.style.display = 'none';
    }
  });

  arrLeft.addEventListener('click', () => {
    currentShift -= width;
    carousel.style.transform = `translateX(-${currentShift}px)`;

    if (currentShift != width * MAX_SLIDES) {
      arrRight.style.display = '';
    }

    if (currentShift == 0) {
      arrLeft.style.display = 'none';
    }
  });
}
