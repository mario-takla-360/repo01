const {readFileSync, writeFileSync} = require ('fs')

const first = readFileSync('./content/first.txt', 'utf8')
console.log(first)

writeFileSync('./content/write-sync.txt', `Here is the read file sync: ${first}`)

var result = readFileSync('./content/write-sync.txt', 'utf8')
console.log(result)

// append write sync
writeFileSync('./content/write-sync.txt', `Here is the read file sync: ${first}`, {flag: 'a'})
var result = readFileSync('./content/write-sync.txt', 'utf8')
console.log(result)
