const chat = require('./chat')
const ping = require('./ping')
const rooms = require('./rooms')

module.exports = (io) => {
  chat(io),
  ping(io),
  rooms(io)
};