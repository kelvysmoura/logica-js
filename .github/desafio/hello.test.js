
const fileToExecute = process.env.KMP_FILE_EXECUTE;

const assert = require('assert');
const md = require('./md-msg')
const execute = require(fileToExecute);
const provider = require('./providers/hello')

const convertParams = item => {
  
  switch (typeof item) {
    case 'string':
      item = `"${item}"`;  
      break;

    case 'object':
      item = JSON.stringify(item)
      break;
  
    default:
      item = `${item}`
      break;
  }

  return item;
}

let output = []
let hasError = false;

try {
  provider.forEach(testCase => {

    const { params, expected } = testCase;

    output.push(
      md.running(`Executando ${execute.name}(${params.map(convertParams).join(', ')})`)
    )

    let result = execute(...params)

    assert.strictEqual(
      result,
      expected,
      `A função deveria retornar: "${expected}"\nValor retornado: "${result}"`
    )

    output.push(
      md.success(`Resultado: ${result}`)
    )
  })
} catch (error) {
  
  output.push(md.warning())
  
  output.push(error.message)
  
  hasError = true
}

console.log(output.join("\n"))

if (hasError) {
  process.exit(1)
}

md.challengeWithSuccess()