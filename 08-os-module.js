const os = require('os')

const user = os.userInfo()
console.log(user)

const sysUptime = os.uptime()
console.log(`The system uptime is ${sysUptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS)
