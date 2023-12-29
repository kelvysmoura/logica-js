

const md = require('./md-msg');

const currentBranch = process.env.GITHUB_HEAD_REF;
const validBranches = process.env.KMP_BRACHES_MERGE_MASTER.split(',')

if (!validBranches.includes(currentBranch)) {
  md.error(`Branch **${currentBranch}** não é válida.\nBraches válidas: ${validBranches.join(', ')}`)
}

const currentFile = process.env.KMP_FILE_EXECUTE

try {
  
  const func = require(currentFile)

  if (typeof func !== 'function') {
    md.error(`Não foi possível encontrar a função \`${currentBranch}\` no arquivo src/${currentBranch}.js`)
  }

} catch(error) {

  if (error.code === 'MODULE_NOT_FOUND') {
    md.error(`Não foi possível carregar o arquivo src/${currentBranch}.js`)
  }

  md.error(error.message)
}
