const moveForward = require("../functions/moveForward").moveForward;

describe("moveForward", () => {
  it("moves forward when facing North", () => {
    direction = "N";
    position = [0, 0, 0];
    moveForward(position, direction);
    expect(position).toStrictEqual([0, 1, 0]);
  });
  it("moves forward when facing South", () => {
    direction = "S";
    position = [0, 0, 0];
    moveForward(position, direction);
    expect(position).toStrictEqual([0, -1, 0]);
  });
  it("moves forward when facing East", () => {
    direction = "E";
    position = [0, 0, 0];
    moveForward(position, direction);
    expect(position).toStrictEqual([1, 0, 0]);
  });
  it("moves forward when facing West", () => {
    direction = "W";
    position = [0, 0, 0];
    moveForward(position, direction);
    expect(position).toStrictEqual([-1, 0, 0]);
  });
  it("moves forward when facing Up", () => {
    direction = "UP";
    position = [0, 0, 0];
    moveForward(position, direction);
    expect(position).toStrictEqual([0, 0, 1]);
  });
  it("moves forward when facing Down", () => {
    direction = "DOWN";
    position = [0, 0, 0];
    moveForward(position, direction);
    expect(position).toStrictEqual([0, 0, -1]);
  });
});
