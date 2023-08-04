const moveBackward = require("../functions/moveBackWard").moveBackward;

describe("moveBackward", () => {
  it("moves backward when facing North", () => {
    direction = "N";
    position = [0, 0, 0];
    moveBackward(position, direction);
    expect(position).toStrictEqual([0, -1, 0]);
  });
  it("moves backward when facing South", () => {
    direction = "S";
    position = [0, 0, 0];
    moveBackward(position, direction);
    expect(position).toStrictEqual([0, 1, 0]);
  });
  it("moves backward when facing East", () => {
    direction = "E";
    position = [0, 0, 0];
    moveBackward(position, direction);
    expect(position).toStrictEqual([-1, 0, 0]);
  });
  it("moves backward when facing West", () => {
    direction = "W";
    position = [0, 0, 0];
    moveBackward(position, direction);
    expect(position).toStrictEqual([1, 0, 0]);
  });
  it("moves backward when facing Up", () => {
    direction = "UP";
    position = [0, 0, 0];
    moveBackward(position, direction);
    expect(position).toStrictEqual([0, 0, -1]);
  });
  it("moves backward when facing Down", () => {
    direction = "DOWN";
    position = [0, 0, 0];
    moveBackward(position, direction);
    expect(position).toStrictEqual([0, 0, 1]);
  });
});
