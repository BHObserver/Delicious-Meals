import { fetchComments, submitComment } from './comment.js';

const popUp = document.querySelector('.blur-bg');
const popUpImg = popUp.querySelector('.img-pop-up');
const popUpHeading = popUp.querySelector('.pop-up-heading');

export default function show() {
  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.className === 'btn-comment') {
      const parentElement = clickedElement.closest('section');
      const img = parentElement.children[0];
      const imgSrc = img.getAttribute('src');
      const title = parentElement.children[1].getElementsByTagName('h5')[0].innerText;
      const itemId = img.dataset.id;
      popUpImg.setAttribute('src', imgSrc);
      popUpImg.setAttribute('data-id', itemId);
      popUpHeading.innerHTML = `<h2>${title}</h2>`;
      popUp.style.display = 'block';
      // Fetch and display comments when the page loads
      fetchComments(itemId);
    }
    /* if (clickedElement.id === 'submitButton') {
      const itemId = clickedElement.
      parentElement.
      parentElement.
      parentElement.
      querySelector('.img-container').children[0].dataset.id;
      submitComment(itemId);
    } */
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