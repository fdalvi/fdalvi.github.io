document.addEventListener('DOMContentLoaded', function () {
  /************************ Carousel ************************/
  var slides = document.querySelectorAll('.carousel-slide');
  var descSlides = document.querySelectorAll('.carousel-desc-slide');
  var leftArrow = document.querySelector('.carousel-arrow-left');
  var rightArrow = document.querySelector('.carousel-arrow-right');
  if (slides.length) {
    var index = slides.length - 1;
    slides[index].classList.add('active');
    descSlides[index].classList.add('active');

    function updateArrows() {
      leftArrow.classList.toggle('disabled', index === 0);
      rightArrow.classList.toggle('disabled', index === slides.length - 1);
    }

    function showSlide(n) {
      slides[index].classList.remove('active');
      descSlides[index].classList.remove('active');
      index = (n + slides.length) % slides.length;
      slides[index].classList.add('active');
      descSlides[index].classList.add('active');
      updateArrows();
    }

    leftArrow.addEventListener('click', function () {
      if (index > 0) showSlide(index - 1);
    });

    rightArrow.addEventListener('click', function () {
      if (index < slides.length - 1) showSlide(index + 1);
    });

    updateArrows();
  }

});
