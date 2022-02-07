//modules.......
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-name')
const sayHi = require('./5-utilis')
const data = require('./6-alternative-flavor')
require('./7-mind-gernade')

sayHi(names.Dar)

sayHi(names.khan)
sayHi('Sheharyar Khan')

console.log(data)
