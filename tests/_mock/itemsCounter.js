const itemsCounter = () => {
  const lists = document.querySelectorAll('.single-product');
  const displayNumber = lists.length;
  const NumberOfCounts = document.querySelector('#count');
  NumberOfCounts.textContent = displayNumber;
};

module.exports = itemsCounter;
