//calclibrary.js
"use strict";

/* module.exports.sum = function (a, b) {
  return a + b;
}; */
//if (a && b) - this won't work for 0 as it is intepreted as null

function sum(a, b) {
  if (arguments.length < 2) {
    throw new Error("parameter missing");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("only numbers allowed");
  }
  return a + b;
}
module.exports = { sum };
