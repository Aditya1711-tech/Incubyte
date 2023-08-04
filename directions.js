console.log("This is Aditya crafting with incubyte");

const directionForNorth = {
  L: "W",
  R: "E",
};
const directionForSouth = {
  L: "E",
  R: "W",
};
const directionForEast = {
  L: "N",
  R: "S",
};
const directionForWest = {
  L: "S",
  R: "N",
};
const directionForUp = {
  L: "W",
  R: "E",
  U: "S",
  D: "N",
};
const directionForDown = {
  L: "E",
  R: "W",
  U: "S",
  D: "N",
};

module.exports = {
  directionForNorth,
  directionForSouth,
  directionForEast,
  directionForWest,
  directionForUp,
  directionForDown,
};
