describe("Fizzbuzz", function() {
  it("prints fizz instead of three", function() {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  it("prints buzz instead of five", function() {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it("prints the number when not divisible by 3 or 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("prints fizzbuzz if number is multiple of 3 and 5", function() {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });

});
