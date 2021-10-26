const express = require('express')
const app = express()
const http = require('http').createServer(app)
const PORT = 3000

const corsOptions = {
  origin: `http://localhost:${PORT}`,
  methods: ['GET', 'POST']
}

const io = require('socket.io')(http, corsOptions)

io.on('connection', (socket) => {
  socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo! :)')
  
  socket.on('ping', () => {
    console.log(`${socket.id} emitiu um ping`);
    io.emit('pong', `${socket.id} enviou um ping!`)
    
  })
})

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))