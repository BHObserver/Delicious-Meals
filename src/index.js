import "./style.css";
import fetchMeals from "./modules/fetchMeals.js";
import displayMeals from "./modules/displayMeals.js";
import itemsCounter from "./modules/itemCount.js";
import getLikes from "./modules/getLikes.js";

const start = async () => {
  const data = await fetchMeals();
  displayMeals(data);
  itemsCounter();
};

window.addEventListener("DOMContentLoaded", async () => {
  getLikes();
  await start();
});
