
module.exports = [
  {
    params: [],
    expected: "Hello, World!"
  },
  {
    params: ["Colleger"],
    expected: "Hello, Colleger!"
  },
  {
    params: [null],
    expected: "Hello, World!"
  },
  {
    params: [undefined],
    expected: "Hello, World!"
  },
  {
    params: [123],
    expected: "Hello, World!"
  },
  {
    params: [["Say Hello World"]],
    expected: "Hello, World!"
  },
  {
    params: [{say: "Hello World"}],
    expected: "Hello, World!"
  },
  {
    params: [true],
    expected: "Hello, World!"
  },
  {
    params: [false],
    expected: "Hello, World!"
  }
];