// Slide
const images = [
  "img/slide1.jpg",
  "img/slide2.jpg",
  "img/slide3.jpg",
  "img/slide4.jpg",
  "img/slide5.jpg",
  "img/slide6.jpg",
];

let current = 0;
const slideImg = document.getElementById("slide-img");

function showImage(index) {
  slideImg.style.opacity = 0;
  setTimeout(() => {
    slideImg.src = images[index];
    slideImg.style.opacity = 1;
  }, 300);
}

function showNext() {
  current = (current + 1) % images.length;
  showImage(current);
}

function showPrev() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

// end slide
