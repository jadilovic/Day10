// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
}
// End of lion object

function myFunction(property, value){  // Change this line
    // Only change code below this line
    lion[property] = value;
    return lion;
    // Only change code above this line
}

console.log(lion);
myFunction("roar", "roar-roar"); // Change this line
console.log(lion);

module.exports = myFunction;