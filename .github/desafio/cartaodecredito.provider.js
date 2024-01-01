
const error = "Argumento inválido!";

module.exports = [
  {
    params: ["5290 2289 9764 4815"],
    expected: true,
    comments: "// Master"
  },
  {
    params: ["4556703880681589"],
    expected: true,
    comments: "// Visa"
  },
  {
    params: ["3472 370337 08298"],
    expected: true,
    comments: "// American Express"
  },
  {
    params: ["30085527525732"],
    expected: true,
    comments: "// Diners Club"
  },
  {
    params: ["6011 8705 4351 2354"], // discover
    expected: true,
    comments: "// Discover"
  },
  {
    params: ["214967033866536"], // en route
    expected: true,
    comments: "// En Route"
  },
  {
    params: ["3525 5859 7761 4122"], // jcb
    expected: true,
    comments: "// JCB"
  },
  {
    params: ["869998036194806"], // voyager
    expected: true,
    comments: "// Voyager"
  },
  {
    params: ["6062 8272 7934 1794"], // hipercard
    expected: true,
    comments: "// HiperCard"
  },
  {
    params: ["5082554807601790"], // aura
    expected: true,
    comments: "// Aura"
  },
  {
    params: ["01092024"],
    expected: false,
    comments: "// Cartão inválido"
  },
  {
    params: [1234567891234567],
    expected: error
  },
  {
    params: [],
    expected: error
  }
];