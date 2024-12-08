const imagesContainer = document.querySelector('.images-container');
const images = document.querySelector('.images');


const scrollAmount = 300;


function scrollLeft() {
  imagesContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
  });
}

function scrollRight() {
  imagesContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });
}


imagesContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  imagesContainer.scrollBy({
    left: event.deltaY > 0 ? scrollAmount : -scrollAmount,
    behavior: 'smooth',
  });
});
