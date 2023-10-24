function getExtension(fileNames) {
    return fileNames.map(fileName => fileName.split('.').pop());
  }

module.exports = getExtension

