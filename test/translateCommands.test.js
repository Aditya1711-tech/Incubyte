const translateCommands =
  require("../functions/translateCommands").translateCommands;

test("should return the correct position and direction when given a single command", () => {
  const commands = ["f"];
  const initial = {
    position: [0, 0, 0],
    direction: "N",
  };
  const expected = {
    position: [0, 1, 0],
    direction: "N",
  };
  const actual = translateCommands(commands, initial);
  expect(actual).toStrictEqual(expected);
});
