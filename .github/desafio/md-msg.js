
const runningIcon = ':arrow_forward:'
const successIcon = ':white_check_mark:'
const warningIcon = ':monocle_face:'
const errorIcon = ':heavy_exclamation_mark:'

module.exports = {
  
  error(msg, exit = true) {
    msg = `${errorIcon}Erro\n${msg}`;
    
    if(exit) {
      this.exit(msg)
    }

    return msg;
  },

  warning(msg) {
    return `${warningIcon} ${msg}`
  },

  success(msg) {
    return `${successIcon} ${msg}`
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