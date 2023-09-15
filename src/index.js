import "./style.css";
import fetchMeals from "./modules/fetchMeals.js";
import displayMeals from "./modules/displayMeals.js";

import getLikes from "./modules/getLikes.js";

const start = async () => {
  const data = await fetchMeals();
  displayMeals(data);
};

window.addEventListener("DOMContentLoaded", () => {
  getLikes();
  start();
});
