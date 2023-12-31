
const error = "Argumento inválido. Função espera receber um array como argumento.";

module.exports = [
  {
    params: [[0,1,2,3,4,5]],
    expected: [5,4,3,2,1,0]
  },
  {
    params: [[20,50,170,890]],
    expected: [890,170,50,20]
  },
  {
    params: [['laranja', 'banana', 'maçã']],
    expected: ['maçã', 'banana', 'laranja']
  },
  {
    params: [[]],
    expected: []
  },
  {
    params: ['text'],
    expected: error
  },
  {
    params: [12,9,8],
    expected: error
  },
  {
    params: [],
    expected: error
  }
];