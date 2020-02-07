const express = require('express')
const socket = require('socket.io')
//App Setup

const app = express();
const server = app.listen(4000, function(){
  console.log('listening to request of port 4000')
})

// Static files

app.use(express.static('public'))

//Socket set up

let io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection', socket.id)
})
