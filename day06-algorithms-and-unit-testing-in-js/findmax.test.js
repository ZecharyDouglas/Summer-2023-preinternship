const findMax = require("./findMax");

describe("findmax should take an array and return the largest number", () => {
  test("findmax([]) => null ", () => {
    expect(findMax([])).toBeNull();
  });
  test("findmax([1]) => 1 ", () => {
    expect(findMax([1])).toBe(1);
  });
  test("findmax([1 , 3 , 5 , 5 ,3  ,6]) => 1 ", () => {
    expect(findMax([1, 3, 5, 5, 3, 6])).toBe(6);
  });
});
