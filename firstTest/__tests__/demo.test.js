"use strict";

beforeAll(() => {
  console.log("beforeAll", "int before all test".toUpperCase());
});

//afterAll can do some cleaning
afterAll(() => {
  console.log("afterAll", "do cleanig".toUpperCase());
});

//"test" ("writen message", arrow function = actual test)
test("This is the 1st test", () => {
  console.log("test one");
  expect("1" + "2").toBe("12");
});

//Test and it are synonym
it("This is the 2nd test", () => {
  console.log("test 2");
});

//to group test you can use descrbe(), in a report they will be under title "This is the 1st froup A"
describe("This is the 1st froup A", () => {
  beforeEach(() => {
    console.log("beforeEach in group A");
  });

  afterEach(() => {
    console.log("afterEach in group A");
  });
  test("test 1 in A", () => {
    console.log("test 1 in A");
  });
  test("test 2 in A", () => {
    console.log("test 2 in A");
  });
});

describe("Group b", () => {
  describe("group b.a", () => {
    test("test 1 in b.a", () => {
      console.log("test 1 in b.a");
    });
  });
  describe("group b.b", () => {
    test("test 2 in b.b", () => {
      console.log("test 2 in b.b");
    });
  });
});
