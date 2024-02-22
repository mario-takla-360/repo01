// Modules

const names = require('./04-names');
const sayHi = require('./05-utils');

sayHi("susan")
sayHi(names.john)
sayHi(names.rio)

const page06 = require('./06-alt-flavors');
console.log(page06.items)

require('./07-mind-grenade')