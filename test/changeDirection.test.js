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
  const initialDirection = "U";
  const rotateTo = "L";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("W");
});

test("changes direction when facing Down", () => {
  const initialDirection = "D";
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
  const initialDirection = "U";
  const rotateTo = "R";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("E");
});

test("changes direction when facing Down", () => {
  const initialDirection = "D";
  const rotateTo = "R";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("W");
});

/*-------------- what to do when direction in already U/D and rotateTo also gives as U/D -----------*/
// Here for these cases we assum
// test("changes direction when facing Up", () => {
//   const initialDirection = "U";
//   const rotateTo = "U";
//   expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("N");
// });
// test("changes direction when facing Down", () => {
//   const initialDirection = "D";
//   const rotateTo = "D";
//   expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("S");
// });
// test("changes direction when facing Up", () => {
//   const initialDirection = "U";
//   const rotateTo = "D";
//   expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("S");
// });
// test("changes direction when facing Down", () => {
//   const initialDirection = "D";
//   const rotateTo = "D";
//   expect(changeDirection(initialDirection, rotateTo)).toStrictEqual("N");
// });

/*-----------------------------------------------------------------------------------------------*/

test("return invalid direction for any random input", () => {
  const initialDirection = "DOW";
  const rotateTo = "L";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual(
    "Invalid direction"
  );
});

test("return invalid direction for any random input", () => {
  const initialDirection = "D";
  const rotateTo = "LE";
  expect(changeDirection(initialDirection, rotateTo)).toStrictEqual(
    "Invalid direction"
  );
});
