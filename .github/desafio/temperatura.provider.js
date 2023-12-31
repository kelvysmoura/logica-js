
const error = "Temperatura inválida!";

module.exports = [
  {
    params: ["20C", "F"],
    expected: "68F"
  },
  {
    params: ["50C", "C"],
    expected: "50C"
  },
  {
    params: ["50F", "C"],
    expected: "10C"
  },
  {
    params: ["50F", "F"],
    expected: "50F"
  },
  {
    params: ["20T", "F"],
    expected: error
  },
  {
    params: ["20C", "T"],
    expected: error
  },
  {
    params: ["20", "F"],
    expected: error
  },
  {
    params: [5, "C"],
    expected: error
  },
  {
    params: [],
    expected: error
  }
];