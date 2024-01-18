//calclibrary.test.js name comes from calclibrary.js file
"use strict";

const { sum } = require("../calclibrary");

describe("Testing sum with integers", () => {
  test("Test sum(1,1) returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  test("Test sum(2,3) returns 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
  const testValues = [
    [-2, -4, -6],
    [-2, 4, 2],
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
    [123, 200, 323],
  ];
  //.each returns a function
  test.each(testValues)("sum(%s, %s) = %s", (a, b, result) => {
    expect(sum(a, b)).toBe(result);
  });
});
describe("Testing sum with floats", () => {
  const testValues = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.4, 0.6],
    [-2.5, -2.5, -5.0],
    [-2.5, 2.5, 0],
    [2.4, -2.5, -0.1],
  ];
  //jest placeholder '%s'
  test.each(testValues)("sum(%s, %s) = %s", (a, b, result) => {
    expect(sum(a, b)).toBeCloseTo(result); // this is not working right! - toBe(result)
  });
});

describe("Testing parameter missing", () => {
  test("sum() throws an exception", () => {
    //because of toThrow sum() should be called from a function - expect(() => sum()).toThrow
    expect(() => sum()).toThrow("parameter missing");
  });
  test("sum(1) throws an exception", () => {
    expect(() => sum(1)).toThrow("parameter missing");
  });
});

describe("Testing with test.each", () => {
  const testValues = [[""], ["1"]];
  test.each(testValues)("sum('%s') throws 'parameter missing'", (a) => {
    expect(() => sum(a)).toThrow("parameter missing");
  });
});

describe("Testing parameters are not numbers", () => {
  const testValues = [
    ["1", "2"],
    ["a", 1],
    [1, "a"],
    ["a", "b"],
    ["", ""], //but in result empty space won't print anything
  ];
  test.each(testValues)("sum (%s,%s) throws an exception", (a, b) => {
    expect(() => sum(a, b)).toThrow("only numbers allowed");
  });
});

describe("Testing parameters are not numbers version 2", () => {
  const testValues = [
    //label,
    ["sum('1','2')", "1", "2"],
    ["sum('a',1)", "a", 1],
    ["sum(1,'a')", 1, "a"],
    ["sum('a','b')", "a", "b"],
    ["sum('','')", "", ""],
  ];
  test.each(testValues)("%s throws an exception", (label, a, b) => {
    expect(() => sum(a, b)).toThrow("only numbers allowed");
  });
});
