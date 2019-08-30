const fs = require('fs')

function checkVueScoped(file) {
  const fileContent = String(fs.readFileSync(file))
  try {
    var statIndex = fileContent.indexOf('<style')
    var getStyle = fileContent.substring(statIndex).split(/>/)[0]
    var getScoped = /scoped/.test(getStyle)
    return getScoped ? false : file
  } catch (error) {
    if (process.env.DEBUG === 'true') {
      console.log(error)
    }
  }
}

module.exports = checkVueScoped
