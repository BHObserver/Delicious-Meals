import './style.css';
import cancelIcon from './assets/cancel-icon.png';
import fetchMeals from './modules/fetchMeals.js';
import displayMeals from './modules/displayMeals.js';
import show, { cancel } from './modules/commentPopup';

const cancelIconContainer = document.querySelector('.close-pop-up');
cancelIconContainer.setAttribute('src', cancelIcon);

const start = async () => {
  const data = await fetchMeals();
  displayMeals(data);
};

document.addEventListener('DOMContentLoaded', () => {
  start();
  JSON.parse(localStorage.getItem('likes'));
});

document.addEventListener('click', () => {
  show();
  cancel();
});
