const directionForNorth = require("../directions").directionForNorth;
const directionForSouth = require("../directions").directionForSouth;
const directionForEast = require("../directions").directionForEast;
const directionForWest = require("../directions").directionForWest;
const directionForUp = require("../directions").directionForUp;
const directionForDown = require("../directions").directionForDown;

function changeDirection(initialDirection, rotateTo) {
  if (initialDirection === "N" && rotateTo === "L") {
    return directionForNorth.L;
  }
  if (initialDirection === "N" && rotateTo === "R") {
    return directionForNorth.R;
  }
  if (initialDirection === "S" && rotateTo === "L") {
    return directionForSouth.L;
  }
  if (initialDirection === "S" && rotateTo === "R") {
    return directionForSouth.R;
  }
  if (initialDirection === "E" && rotateTo === "L") {
    return directionForEast.L;
  }
  if (initialDirection === "E" && rotateTo === "R") {
    return directionForEast.R;
  }
  if (initialDirection === "W" && rotateTo === "L") {
    return directionForWest.L;
  }
  if (initialDirection === "W" && rotateTo === "R") {
    return directionForWest.R;
  }
  if (initialDirection === "U" && rotateTo === "L") {
    return directionForUp.L;
  }
  if (initialDirection === "U" && rotateTo === "R") {
    return directionForUp.R;
  }
  if (initialDirection === "D" && rotateTo === "L") {
    return directionForDown.L;
  }
  if (initialDirection === "D" && rotateTo === "R") {
    return directionForDown.R;
  }
  if (rotateTo === "U") {
    return "U";
  }
  if (rotateTo === "D") {
    return "D";
  }
  if (rotateTo === "E") {
    return "E";
  }
  if (rotateTo === "W") {
    return "W";
  }
  if (rotateTo === "N") {
    return "N";
  }
  if (rotateTo === "S") {
    return "S";
  }
}

module.exports = {
  changeDirection,
};
