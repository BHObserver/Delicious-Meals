/*
 @jest-environment jsdom
 */

const itemsCounter = require("./_mock/itemsCounter.js");

describe("itemsCounter", () => {
  test("it should count the number of meals", () => {
    document.body.innerHTML = `
  <section class="products">
    <div class="items">Item 1</div>
    <div class="items">Item 2</div>
    <div class="items">Item 3</div>
  </section>
`;

    expect(itemsCounter()).toBe(3);
  });

  test("it should return 0 when no child elements are present", () => {
    document.body.innerHTML = "";

    expect(itemsCounter()).toBe(0);
  });
});
