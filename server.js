// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})


// listen for requests :)
const server = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${server.address().port}`)
  
  
})


var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

//This function will be called whenever a new web browser visits the page. It runs as soon as a connection is set up with the server.
function newConnection(socket){
	console.log('new connection: ' + socket.id)
	//we put all the rest of our code inside that connection, because we only want it to run once we're connected
  	//this section will have one or more event listeners that line up with various things that can happen on the client side (like 		sending a message in a chat app)


  
  socket.on('sendMessage', function(data){
  console.log(data);
  io.emit('NewMessage', data)
  })
  
}



  
