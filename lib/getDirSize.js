const fs = require('fs')

function getDirSize(getFile, max) {
  const files = []
  getFile.forEach(file => {
    const stats = fs.statSync(file)
    if((stats.size/1024).toFixed(2) > max) {
        const fileInfo = {
          size: `${(stats.size/1024).toFixed(2)}/kb`,//文件大小，以字节为单位
          path : file
        }
        files.push(fileInfo)
      }
  });
  return files
}

module.exports = getDirSize