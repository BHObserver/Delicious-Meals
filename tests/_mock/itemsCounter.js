// Updated itemsCounter function
const itemsCounter = (container) => {
  const displayNumber = container ? container.childElementCount : 0;
  return displayNumber;
};

module.exports = itemsCounter;
