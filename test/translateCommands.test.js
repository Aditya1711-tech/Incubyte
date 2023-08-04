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

// test("Base test case", () => {
//   const commands = ["f", "r", "u", "b", "l"];
//   const initial = {
//     position: [0, 0, 0],
//     direction: "N",
//   };
//   const expected = {
//     position: [0, 1, -1],
//     direction: "W",
//   };
//   const actual = translateCommands(commands, initial);
//   expect(actual).toStrictEqual(expected);
// });
