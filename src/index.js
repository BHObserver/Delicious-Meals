import "./style.css";
import fetchMeals from "./modules/fetchMeals.js";
import displayMeals from "./modules/displayMeals.js";
import getLikes from "./modules/getLikes.js";
import itemsCounter from "./modules/itemCount.js";

const start = async () => {
  const data = await fetchMeals();
  displayMeals(data);
};

window.addEventListener("DOMContentLoaded", async () => {
  getLikes();
  await start();
  itemsCounter();
});
