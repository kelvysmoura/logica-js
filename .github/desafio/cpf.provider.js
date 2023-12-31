
const error = 'CPF inválido!';

module.exports = [
  {
    params: ["11144477712"],
    expected: false
  },
  {
    params: ["549.191.100-30"],
    expected: true
  },
  {
    params: ["191.100.30-17"],
    expected: error
  },
  {
    params: [19110030917],
    expected: error
  },
  {
    params: [],
    expected: error
  }
];