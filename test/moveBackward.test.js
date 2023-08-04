const moveBackward = require("../functions/moveBackWard").moveBackward;

test("moves backward when facing North", () => {
  const direction = "N";
  let position = [0, 0, 0];
  position = moveBackward(position, direction);
  expect(position).toStrictEqual([0, -1, 0]);
});

test("moves backward when facing South", () => {
  const direction = "S";
  let position = [0, 0, 0];
  position = moveBackward(position, direction);
  expect(position).toStrictEqual([0, 1, 0]);
});

test("moves backward when facing East", () => {
  const direction = "E";
  let position = [0, 0, 0];
  position = moveBackward(position, direction);
  expect(position).toStrictEqual([-1, 0, 0]);
});

test("moves backward when facing West", () => {
  const direction = "W";
  let position = [0, 0, 0];
  position = moveBackward(position, direction);
  expect(position).toStrictEqual([1, 0, 0]);
});

test("moves backward when facing Up", () => {
  const direction = "UP";
  let position = [0, 0, 0];
  position = moveBackward(position, direction);
  expect(position).toStrictEqual([0, 0, -1]);
});

test("moves backward when facing Down", () => {
  const direction = "DOWN";
  let position = [0, 0, 0];
  position = moveBackward(position, direction);
  expect(position).toStrictEqual([0, 0, 1]);
});
