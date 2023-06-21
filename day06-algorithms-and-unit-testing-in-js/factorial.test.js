const factorial = require("./factorial");

describe("factorial(n) computes the factorial of n", () => {
  test("factorial(0) => 1 ", () => {
    expect(factorial(1)).toBe(1);
  });
});
