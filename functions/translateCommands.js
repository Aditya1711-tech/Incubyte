const moveForward = require("./moveForward").moveForward;
const moveBackward = require("./moveBackward").moveBackward;
const changeDirection = require("./changeDirection").changeDirection;

let initialDirection = "N";
let startingPosition = [0, 0, 0];

function translateCommands(commands, initial) {
  let direction = initial.direction;
  let position = initial.position;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "f") {
      position = moveForward(position, direction);
    } else if (commands[i] === "b") {
      position = moveBackward(position, direction);
    } else if (commands[i] === "r") {
      direction = changeDirection(direction, "R");
    } else if (commands[i] === "l") {
      direction = changeDirection(direction, "L");
    } else if (commands[i] === "u") {
      direction = changeDirection(direction, "U");
    } else if (commands[i] === "d") {
      direction = changeDirection(direction, "D");
    } else {
      console.log("Invalid command");
      return ["Invalid Command"];
    }
  }
  return { position, direction };
}

module.exports = {
  translateCommands,
};
