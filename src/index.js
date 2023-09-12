import './style.css';
import fetchMeals from './modules/fetchMeals.js';
import displayMeals from './modules/displayMeals.js';

const start = async () => {
  const data = await fetchMeals();
  displayMeals(data);
};

document.addEventListener('DOMContentLoaded', () => {
  start();
  JSON.parse(localStorage.getItem('likes'));
});
