function moveBackward(position, direction) {
  let tempPos = position;

  switch (direction) {
    case "N":
      tempPos[1] -= 1;
      return tempPos;
    case "S":
      tempPos[1] += 1;
      return tempPos;
    case "E":
      tempPos[0] -= 1;
      return tempPos;
    case "W":
      tempPos[0] += 1;
      return tempPos;
    case "U":
      tempPos[2] -= 1;
      return tempPos;
    case "D":
      tempPos[2] += 1;
      return tempPos;
    // default:
    //   return ["Invalid direction"];
  }
}

module.exports = {
  moveBackward,
};
