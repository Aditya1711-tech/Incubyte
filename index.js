console.log("This is Aditya crafting for incubyte");

// let position = [0, 0, 0];
// let direction = "N";

let directionForNorth = {
  L: "W",
  R: "E",
};
let directionForSouth = {
  L: "E",
  R: "W",
};
let directionForEast = {
  L: "N",
  R: "S",
};
let directionForWest = {
  L: "S",
  R: "N",
};
let directionForUp = {
  L: "W",
  R: "E",
};
let directionForDown = {
  L: "E",
  R: "W",
};

function moveForward(position, direction) {
  let tempPos = position;
  switch (direction) {
    case "N":
      tempPos[1] += 1;
      return tempPos;
    case "S":
      tempPos[1] -= 1;
      return tempPos;
    case "E":
      tempPos[0] += 1;
      return tempPos;
    case "W":
      tempPos[0] -= 1;
      return tempPos;
    case "UP":
      tempPos[2] += 1;
      return tempPos;
    case "DOWN":
      tempPos[2] -= 1;
      return tempPos;
  }
}

module.exports = {
  moveForward,
  directionForNorth,
  directionForSouth,
  directionForEast,
  directionForWest,
  directionForUp,
  directionForDown,
};
