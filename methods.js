var methods = (module.exports = {});
var output;

/* a = {prop1: true};
b = a;
b.prop1 = false;
console.lof(a.prop1) //false */

/* or you can exports like this
module.exports = {
  sumNumbers:function(){
  ////////
  }
} */

methods.updateServer = function () {
  console.log("Important function");
};
methods.eatCookies = function () {
  console.log("Chocolate cookies");
};

methods.node = function () {
  console.log("NODEJS, is AWESOME");
};

methods.sumNumbers = function (a, b) {
  output = a + b;
  return output;
};

methods.circleCircumference = function (radius) {
  output = 2 * Math.PI * radius;
  return output;
};

methods.areaOfRectangle = function (a, b) {
  output = a * b;
  return output;
};

// another way is to exports at the end: module.exports.data = methods;
