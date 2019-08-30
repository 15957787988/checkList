const fs = require('fs')
const path = require('path')

// 遍历目录获取文件

function getFilesPath(dir) {
  let getFiles = []
  // console.log('path.join：', path.join(dir))
  // console.log('__dirname：', __dirname, '..')
  // console.log('__dirname2：', [__dirname])
  // console.log('__filename：', __filename)
  // console.log('process.cwd()：', process.cwd())
  // console.log('./：', path.resolve(__dirname, '../'))
  function InitFiles(dir){
    const files = fs.readdirSync(dir, 'utf-8')
    files.forEach(file => {
      file = path.resolve(dir, file) // 这里是获取相对路劲地址
      var stats = fs.statSync(file)
      if(stats.isDirectory()){ // 判断是不是文件夹，如果是就递归遍历
        InitFiles(file)
      } else {
        getFiles.push(file)
      }
    })
    return getFiles
  }
  var stats = fs.statSync(dir)
  if(stats.isDirectory()){
    return InitFiles(dir)
  }
  getFiles.push(dir)
  return getFiles
}

module.exports = getFilesPath
