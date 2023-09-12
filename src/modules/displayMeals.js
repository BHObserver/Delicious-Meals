const productsDOM = document.querySelector('.products-center');

// display function
const displayMeals = (list) => {
  const productList = list.meals
    .map((item) => {
      // console.log(idMeal);
      const { strMeal: title } = item;
      const { strMealThumb: img } = item;

      return ` <a class="single-product" href="#">
      <img
        src="${img}"
        alt="${title}"
        class="single-product-img img"
      />
      <footer>
        <h5 class="name">${title}</h5>
        <div class="btn-container">
        <button class="btn-like" type="button" >&#10084 <span class="btn-span">0 likes</span></button>
        <button class="btn-comment">COMMENTS</button>
        </div>
      </footer>
    </a>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">
  ${productList}
  </div>`;
  const likeBtns = [...document.querySelectorAll('.btn-like')];
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const span = btn.querySelector('.btn-span');
      let count = 0;
      count += span.textContent;
      const newCount = parseInt(count, 10) + 1;
      span.textContent = `${newCount} likes`;
      localStorage.setItem('likes', JSON.stringify(newCount));
    });
  });
};

export default displayMeals;
