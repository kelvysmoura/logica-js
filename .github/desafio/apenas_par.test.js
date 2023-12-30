
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

    let { params, expected } = testCase;

    output.push(mdmsg.running(execute, params))

    let result = execute(...params)
    result = JSON.stringify(result)
    expected = JSON.stringify(expected);

    assert(result, expected);

    output.push(mdmsg.success(result));
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