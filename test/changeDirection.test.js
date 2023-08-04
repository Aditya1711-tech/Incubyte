const changeDirection = require("../functions/changeDirection").changeDirection;

// Test caes added for rotation in the left direction
test("changes direction when facing North", () => {
  const initialDirection = "N";
  const rotateTo = "L";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("W");
});

test("changes direction when facing South", () => {
  const initialDirection = "S";
  const rotateTo = "L";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("E");
});

test("changes direction when facing East", () => {
  const initialDirection = "E";
  const rotateTo = "L";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("N");
});

test("changes direction when facing West", () => {
  const initialDirection = "W";
  const rotateTo = "L";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("S");
});

test("changes direction when facing Up", () => {
  const initialDirection = "UP";
  const rotateTo = "L";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("W");
});

test("changes direction when facing Down", () => {
  const initialDirection = "DOWN";
  const rotateTo = "L";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("E");
});

// Test cases for rotation in the right direction
test("changes direction when facing North", () => {
  const initialDirection = "N";
  const rotateTo = "R";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("E");
});

test("changes direction when facing South", () => {
  const initialDirection = "S";
  const rotateTo = "R";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("W");
});

test("changes direction when facing East", () => {
  const initialDirection = "E";
  const rotateTo = "R";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("S");
});

test("changes direction when facing West", () => {
  const initialDirection = "W";
  const rotateTo = "R";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("N");
});

test("changes direction when facing Up", () => {
  const initialDirection = "UP";
  const rotateTo = "R";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("E");
});

test("changes direction when facing Down", () => {
  const initialDirection = "DOWN";
  const rotateTo = "R";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("W");
});

test("changes direction when direction is given as input", () => {
  const initialDirection = "DOWN";
  let rotateTo = "Up";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("Up");
  rotateTo = "DOWN";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("Down");
  rotateTo = "E";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("E");
  rotateTo = "W";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("W");
  rotateTo = "N";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("N");
  rotateTo = "S";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("S");
});
