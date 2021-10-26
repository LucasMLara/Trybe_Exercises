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
  console.log(`Usuário conectado. ID: ${socket.id}`)
  
  socket.on('ping', () => {
    console.log(`${socket.id} emitiu um ping`);
    
  })
})

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))