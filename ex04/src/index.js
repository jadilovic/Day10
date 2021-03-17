// Only change code below this line
var players = {
  7: "Muhamed Besic",
  10: "Miralem Pjanic",
  11: "Edin Dzeko",
};

function myFunction(myObj) {
  var playerNumber = 10;
  var player = myObj[playerNumber];
  return player;
}
// Only change code above this line

console.log(myFunction(players)); // Change this line

module.exports = { players, myFunction };
