const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT);

app.get('/', (req, res) => { res.sendFile('index.html', { root: './client' }); });

io.on('connect', (socket) => {
  // Update player location on move
  socket.on('addSquare', (data) => {
    io.emit('addSquare', data);
  });
});
