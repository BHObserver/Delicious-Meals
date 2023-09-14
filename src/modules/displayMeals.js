import postLikes from './postLikes.js';
import getLikes from './getLikes.js';
import displayLikes from './displayLikes.js';

const productsDOM = document.querySelector('.products-center');

// display function
const displayMeals = (list) => {
  const productList = list.meals
    .map((item) => {
      // console.log(idMeal);
      const { strMeal: title } = item;
      const { strMealThumb: img } = item;
      const { idMeal: id } = item;

      return ` <div class="single-product">
      <img
        src="${img}"
        alt="${title}"
        class="single-product-img img"
      />
      <div class="product-footer">
        <h5 class="name">${title}<span class="span" ></span></h5>
        <h3></h3>
        <div class="btn-container">
        <button class="btn-like" type="button" data-id="${id}">&#10084 <span class="btn-span">0 likes</span></button>
        <button class="btn-comment">COMMENTS</button>
        </div>
      </div>
    </div>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">
  ${productList}
  </div>`;

  const likeBtns = [...document.querySelectorAll('.btn-like')];
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const element = e.target;

      const mealId = element.dataset.id;
      await postLikes(mealId);

      const results = await getLikes();

      const btnSpan = element.querySelector('.btn-span');
      let count = 0;
      count += btnSpan.textContent;
      const newCount = parseInt(count, 10) + 1;
      btnSpan.textContent = `${newCount} likes`;
      localStorage.setItem('likes', JSON.stringify(results));
    });
  });
};

export default displayMeals;
