const express = require('express')
const app = express()
const http = require('http').createServer(app)
const { PORT = 3000 } = process.env; 



const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'));

require('./sockets')(io)

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))