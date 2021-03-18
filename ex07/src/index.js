// Create lion object here
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
  roar: "roar-roar",
};
// End of lion object

function myFunction(property) { // Change this line
  // Only change code below this line
  delete lion[property];
  return lion;
  // Only change code above this line
}

console.log(lion);
myFunction("roar"); // Change this line
console.log(lion);

module.exports = myFunction;
