var fs = require('fs');
const chalk = require('chalk')
const getFilesPath = require('./getFilesPath')
const checkVueScoped = require('./checkVueScoped')
const getDirSize = require('./getDirSize')
const checkCode = require('./checkCode')

function checkRule(rule){
  const {
    type = '',
    describe = '',
    paths = [],
    regex = /^!@#$/,
    min = 0,
    max = Infinity,
    index = 0,
  } = rule || {}
  // let getFile = []
  // if(paths.length) {
  //   getFile = getFilesPath(paths.toString())
  // }

  const consoleSuccess = ({sizeText = ''} = {}) => console.log(chalk.green(`${index}.${describe}:`), chalk.blue(`success! ${sizeText}`))

  const consoleFail = (num = 1) => console.log(chalk.red(`${index}.${describe}:`), chalk.red(`${num} failed!`))

  const hanlder = {
    title() {
      console.log(chalk.green('Check List Rules:'))
      return true
    },
    vueScoped(){
      const getVueFile = getFile.filter(file => /\.vue/.test(file))
      const failedPaths = getVueFile.filter(file => checkVueScoped(file))
      if (failedPaths.length) {
        consoleFail(failedPaths.length)
        console.log(chalk.red('failedPaths:\n'), failedPaths)
      } else {
        consoleSuccess()
      }
      return failedPaths.length === 0
    },
    limit(){
      const getFile = getFilesPath(paths.toString())
      const filesSize = getDirSize(getFile, max)
      if (filesSize.length) {
        consoleFail(filesSize.length)
        console.log(chalk.red('failedPaths:\n'), filesSize)
      } else {
        consoleSuccess()
      }
      return filesSize.length === 0
    },
    regex(){
      const fileRegex = checkCode(getFile, regex )
      if(fileRegex.length){
        consoleFail(fileRegex.length)
        console.log(chalk.green('regex:'), regex)
        console.log(chalk.red('failedPaths:\n'), fileRegex)
      } else {
        consoleSuccess()
      }
      return fileRegex.length === 0
    }
  }
  if(type == 'limit') {
    return hanlder.limit()
  }
  // if(hanlder[type]) {
  //   return hanlder[type]()
  // }
}
module.exports = checkRule