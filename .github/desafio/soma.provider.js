
let error = 'Parâmetros inválidos!';

module.exports = [
  {
    params: [5, 1],
    expected: 6
  },
  {
    params: ["50", "10"],
    expected: 60
  },
  {
    params: ["8", 5],
    expected: 13
  },
  {
    params: [3, "9"],
    expected: 12
  },
  {
    params: [5.3, 1.8],
    expected: 7.1
  },
  {
    params: ["1.4", 9.7],
    expected: 11.1
  },
  {
    params: ["1.4", "9.7"],
    expected: 11.1
  },
  {
    params: [-1, -5],
    expected: -6
  },
  {
    params: [-5, 5],
    expected: 0
  },
  {
    params: [3, -5],
    expected: -2
  },
  {
    params: [3],
    expected: error
  },
  {
    params: [3, null],
    expected: error
  },
  {
    params: ["texto", 5],
    expected: error
  },
  {
    params: [1, "texto"],
    expected: error
  }
];