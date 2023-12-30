
const error = "Função aceita apenas números inteiros.";

module.exports = [
  {
    params: [10],
    expected: [0, 2, 4, 6, 8, 10]
  },
  {
    params: [0],
    expected: [0]
  },
  {
    params: [1],
    expected: [0]
  },
  {
    params: [3],
    expected: [0,2]
  },
  {
    params: [4],
    expected: [0, 2, 4]
  },
  {
    params: [-6],
    expected: [0, -2, -4, -6]
  },
  {
    params: ["8"],
    expected: error
  },
  {
    params: ["texto"],
    expected: error
  },
  {
    params: [],
    expected: error
  }
];