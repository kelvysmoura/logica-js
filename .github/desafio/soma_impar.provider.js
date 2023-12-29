
const error = 'Função aceita apenas números inteiros positivos.';

module.exports = [
  {
    params: [10],
    expected: 25
  },
  {
    params: [0],
    expected: 0
  },
  {
    params: [1],
    expected: 1
  },
  {
    params: [2],
    expected: 1
  },
  {
    params: [3],
    expected: 4
  },
  {
    params: [-10],
    expected: error
  },
  {
    params: [1.5],
    expected: error
  },
  {
    params: ["10"],
    expected: error
  },
  {
    params: ["texto"],
    expected: error
  },
  {
    params: [undefined],
    expected: error
  },
  {
    params: [null],
    expected: error
  }
  
];