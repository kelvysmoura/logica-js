
const coreAssert = require('assert');

const runningIcon = ':arrow_forward:'
const successIcon = ':white_check_mark:'
const warningIcon = ':monocle_face:'
const errorIcon = ':heavy_exclamation_mark:'
const clapIcon = ':clap:';


const assert = (current, expected, msg) => {
  coreAssert.strictEqual(
    current,
    expected,
    `A função deveria retornar: "${expected}"\nValor retornado: "${current}"`
  );
}

const convertParams = paramItem => {

  switch (typeof paramItem) {
    case 'string':
      paramItem = `"${paramItem}"`;
      break;

    case 'object':
      paramItem = JSON.stringify(paramItem)
      break;

    default:
      paramItem = `${paramItem}`
      break;
  }

  return paramItem;
}

const mdmsg = {
  
  error(msg, exit = true) {
    msg = `${errorIcon}Erro\n${msg}`;
    
    if(exit) {
      this.exit(msg)
    }

    return msg;
  },

  warning(msg = "Algo de errado não está certo") {
    return `${warningIcon} ${msg}`
  },

  success(msg) {
    return `${successIcon} Resultado: ${msg}`
  },

  challengeWithSuccess(msg = "\n### Desafio concluido com sucesso!") {
    this.exit(`${msg} ${clapIcon.repeat(3)}`, 0)
  },

  running(func, params) {
    return `${runningIcon} ${func.name}(${params.map(convertParams).join(', ')}); `
  },

  pure(msg) {
    return msg;
  },

  exit(msg, code = 1) {
    console.log(msg)
    process.exit(code)
  }
};

module.exports = {
  assert, mdmsg, convertParams
}