/*
 @jest-environment jsdom
 */

const itemsCounter = require('./_mock/itemsCounter.js');

describe('itemsCounter', () => {
  test('Count and update the meals', () => {
    document.body.innerHTML = `
      <div class="single-product"></div>
      <div class="single-product"></div>
      <div class="single-product"></div>
      <div id="count"></div>
    `;

    itemsCounter();

    const countElement = document.querySelector('#count');
    const displayNumber = countElement.textContent;
    expect(displayNumber).toBe('3');
  });

  test('Count element with the correct count', () => {
    itemsCounter();
    const countElement = document.querySelector('#count');
    const displayNumber = countElement.textContent;

    expect(typeof displayNumber).toBe('string');
  });

  test('the case when there is no value', () => {
    document.body.innerHTML = `
      <div id="count"></div>
    `;

    itemsCounter();

    const countElement = document.querySelector('#count');
    const displayNumber = countElement.textContent;

    expect(displayNumber).toBe('0');
  });
});
