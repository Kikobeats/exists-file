var existsFile = require('.')

// async with a callback
existsFile('./README.md', console.log) // => null, true

// async with a promise
existsFile('./README.md').then(console.log).catch(console.error) // => true

// sync
var exists = existsFile.sync('./README.md')
console.log(exists) // => true