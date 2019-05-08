var socket = io();


function ShareWithUs(){
socket.emit('sendMessage' , {message: $('textarea').val()} )
  
console.log("i am here")
}
socket.on('NewMessage', function(data){
  $('body').append("<p>"  +data.message+ " </p>")
})


ShareWithUs()
