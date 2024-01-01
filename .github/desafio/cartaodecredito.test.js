
const fileToExecute = process.env.KMP_FILE_EXECUTE;

const {
  assert, 
  mdmsg
} = require('./help')

const execute = require(fileToExecute);
const provider = require(`./${execute.name}.provider`);

let output = []
let hasError = false;

try {
  provider.forEach(testCase => {

    const { params, expected, comments } = testCase;

    output.push(mdmsg.running(execute, params) + (comments ?? ""))

    let result = execute(...params)

    assert(result, expected);

    output.push(mdmsg.success(result))
  })
} catch (error) {
  output.push(mdmsg.warning())
  output.push(error.message)
  hasError = true
}

console.log(output.join("\n"))

if (hasError) {
  process.exit(1)
}

mdmsg.challengeWithSuccess()