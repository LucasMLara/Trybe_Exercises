const express = require('express')
const app = express()
const http = require('http').createServer(app)
const PORT = 3000

const corsOptions = {
  origin: `http://localhost:${PORT}`,
  methods: ['GET', 'POST']
}

const io = require('socket.io')(http, corsOptions)

app.use(express.static(__dirname + '/public'));

require('./sockets/ping')(io)
require('./sockets/chat')(io)
require('./sockets/rooms')(io);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))