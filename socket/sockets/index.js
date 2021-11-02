const chat = require('./chat')
const ping = require('./ping')
const rooms = require('./rooms')

module.exports = (io) => {
  chat(io),
  ping(io),
  rooms(io)
};


// const testFolder = __dirname;
// const fs = require('fs');

// const dinamicSocket = [];

// fs.readdirSync(testFolder).forEach(file => {
//   if(file !== 'index.js') {
//   dinamicSocket.push(require('./' + file))
//   }});


// module.exports = async (io) => {

//   dinamicSocket.forEach(socketFunc => socketFunc(io))
// }