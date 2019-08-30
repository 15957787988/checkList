const fs = require('fs')
const path = require('path')

function checkCode(files, regular) { 
  return files.filter(file => {
    const extname = path.extname(file) // 获取文件的后缀，过滤掉图片
    if(extname != ".png" && extname != ".jpg" && extname != ".gif") {
      const content =fs.readFileSync(file,"utf-8")
      const hasConflict = regular.test(content)
      return hasConflict ? file : ''
    }
  });
}


module.exports = checkCode
