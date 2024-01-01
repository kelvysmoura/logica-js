
const error = "Argumento passado deve ser um array só com números.";
const error2 = "Argumento inválido.";

module.exports = [
  {
    params: [[5, 6, 7, 8]],
    expected: [13, 11, 9, 7]
  },
  {
    params: [[1, 2, 3]],
    expected: [7, 5, 3]
  },
  {
    params: [[1, "texto", 3]],
    expected: error
  },
  {
    params: [],
    expected: error2
  }
];