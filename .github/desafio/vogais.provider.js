
const error = "Função aceita apenas string como argumento.";

module.exports = [
  {
    params: ["Eae Collegers!!"],
    expected: 6
  },
  {
    params: ["hippopotomonstrosesquippedaliophobia"],
    expected: 16
  },
  {
    params: ["pneumoultramicroscopicsilicovulcanoconiótico"],
    expected: 20
  },
  {
    params: ["nghiêng"],
    expected: 2
  },
  {
    params: ["Vogais e suas variações: uiaáâàãçéêèíìóôòõúûùeo"],
    expected: 34
  },
  {
    params: [""],
    expected: 0
  },
  {
    params: [123],
    expected: error
  },
  {
    params: [],
    expected: error
  }
];