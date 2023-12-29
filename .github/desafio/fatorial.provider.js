
const error = "Função deve receber um argumento do tipo inteiro positivo.";

module.exports = [
  {
    params: [5],
    expected: 120
  },
  {
    params: [10],
    expected: 3628800
  },
  {
    params: ["3"],
    expected: 6
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