
const runningIcon = ':arrow_forward:'
const successIcon = ':white_check_mark:'
const warningIcon = ':monocle_face:'
const errorIcon = ':heavy_exclamation_mark:'
const clapIcon = ':clap:';

module.exports = {
  
  error(msg, exit = true) {
    msg = `${errorIcon}Erro\n${msg}`;
    
    if(exit) {
      this.exit(msg)
    }

    return msg;
  },

  warning(msg = "Algo de erro não está certo") {
    return `${warningIcon} ${msg}`
  },

  success(msg) {
    return `${successIcon} ${msg}`
  },

  challengeWithSuccess(msg = "\n### Desafio concluido com sucesso!") {
    this.exit(`${msg} ${clapIcon.repeat(3)}`, 0)
  },

  running(msg) {
    return `${runningIcon} ${msg}`
  },

  pure(msg) {
    return msg;
  },

  exit(msg, code = 1) {
    console.log(msg)
    process.exit(code)
  }

};