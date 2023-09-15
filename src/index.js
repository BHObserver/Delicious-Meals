import './style.css';
import cancelIcon from './assets/cancel-icon.png';
import fetchMeals from './modules/fetchMeals.js';
import displayMeals from './modules/displayMeals.js';
import show, { cancel } from './modules/commentPopup.js';
import { submitComment } from './modules/comment.js';

const cancelIconContainer = document.querySelector('.close-pop-up');
cancelIconContainer.setAttribute('src', cancelIcon);
const start = async () => {
  const data = await fetchMeals();
  displayMeals(data);
  /* const itemId = [];
  const { meals } = data;
  meals.forEach((element) => {
    itemId.push(parseInt(element.idMeal, 10));
  });

  itemId.forEach((element) => {
    console.log(fetchCommentsCount(element));
  }); */
  /* const commentCounterElement = document.querySelectorAll('.comment-counter');
  commentCounterElement.forEach((element) => {
    itemId.forEach((item) => {
      element.textContent =
    })
  }) */
};

document.addEventListener('DOMContentLoaded', () => {
  start();
  show();
  submitComment();
  JSON.parse(localStorage.getItem('likes'));
});

document.addEventListener('click', () => {
  show();
  cancel();
});
