const moveForward = require("./moveForward").moveForward;
const moveBackward = require("./moveBackward").moveBackward;
const changeDirection = require("./changeDirection").changeDirection;

let initialDirection = "N";
let startingPosition = [0, 0, 0];

function translateCommands(commands, initial) {
  let direction = initial.direction;
  let position = initial.position;
  console.log(position, direction);
  for (let i = 0; i < commands.length; i++) {
    console.log(commands[i]);
    if (commands[i] === "f") {
      position = moveForward(position, direction);
      console.log(position, direction);
    } else if (commands[i] === "b") {
      position = moveBackward(position, direction);
      console.log(position, direction);
    } else if (commands[i] === "r") {
      direction = changeDirection(direction, "R");
      console.log(position, direction);
    } else if (commands[i] === "l") {
      direction = changeDirection(direction, "L");
      console.log(position, direction);
    } else if (commands[i] === "u") {
      direction = changeDirection(direction, "U");
      console.log(position, direction);
    } else if (commands[i] === "d") {
      direction = changeDirection(direction, "D");
      console.log(position, direction);
    } else {
      console.log("Invalid command");
    }
  }
  console.log(position, direction);
  return { position, direction };
}

module.exports = {
  translateCommands,
};
