const os = require('os')

// info about current user....
const user = os.userInfo()
console.log(user)

// method return the  systme uptime in seconds....

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMEm: os.freemem(),
}

console.log(currentOs)
