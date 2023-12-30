
module.exports = [
  {
    params: ["Arara"],
    expected: true
  },
  {
    params: ["Radar"],
    expected: true
  },
  {
    params: ["A base do teto desaba"],
    expected: true
  },
  {
    params: ["A grama é amarga"],
    expected: true
  },
  {
    params: ["A mãe te ama"],
    expected: true
  },
  {
    params: ["Colleger"],
    expected: false
  },
  {
    params: ["Digital"],
    expected: false
  },
  {
    params: ["121"],
    expected: true
  },
  {
    params: ["123"],
    expected: false
  },
  {
    params: [],
    expected: "Função aceita apenas string como argumento."
  }
];