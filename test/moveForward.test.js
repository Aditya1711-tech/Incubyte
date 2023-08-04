const moveForward = require("../functions/moveForward").moveForward;

test("moves forward when facing North", () => {
  let direction = "N";
  let position = [0, 0, 0];
  position = moveForward(position, direction);
  expect(position).toStrictEqual([0, 1, 0]);
});

test("moves forward when facing South", () => {
  let direction = "S";
  let position = [0, 0, 0];
  position = moveForward(position, direction);
  expect(position).toStrictEqual([0, -1, 0]);
});

test("moves forward when facing East", () => {
  let direction = "E";
  let position = [0, 0, 0];
  position = moveForward(position, direction);
  expect(position).toStrictEqual([1, 0, 0]);
});

test("moves forward when facing West", () => {
  let direction = "W";
  let position = [0, 0, 0];
  position = moveForward(position, direction);
  expect(position).toStrictEqual([-1, 0, 0]);
});

test("moves forward when facing Up", () => {
  let direction = "UP";
  let position = [0, 0, 0];
  position = moveForward(position, direction);
  expect(position).toStrictEqual([0, 0, 1]);
});

test("moves forward when facing Down", () => {
  let direction = "DOWN";
  let position = [0, 0, 0];
  position = moveForward(position, direction);
  expect(position).toStrictEqual([0, 0, -1]);
});
