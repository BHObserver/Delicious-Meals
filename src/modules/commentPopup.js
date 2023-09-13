const allProducts = document.querySelectorAll('.btn-comment');
const popUp = document.querySelector('.blur-bg');
const popUpImg = popUp.querySelector('.img-pop-up');
const popUpHeading = popUp.querySelector('.pop-up-heading');

export default function show() {
  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.className === 'btn-comment') {
      const parentElement = clickedElement.closest('section');
      const img = parentElement.children[0].getAttribute('src');
      const title = parentElement.children[1].getElementsByTagName('h5')[0].innerText;
      popUpImg.setAttribute('src', img);
      popUpHeading.innerHTML = `<h2>${title}</h2>`;
      popUp.style.display = 'block';
    }
  });
}

export function cancel() {
  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.className === 'close-pop-up') {
      popUp.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      popUp.style.display = 'none';
    }
  });
}