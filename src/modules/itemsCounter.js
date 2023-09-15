const itemsCounter = () => {
  window.addEventListener('load', () => {
    const lists = document.querySelector('.single-product');
    const displayNumber = lists.childElementCount;
    const NumberOfCounts = document.querySelector('#count');
    NumberOfCounts.textContent = displayNumber;
  });
};

export default itemsCounter;
