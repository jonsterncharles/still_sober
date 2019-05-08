// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

var socket = io();


function ShareWithUs(){
socket.emit('sendMessage' , {message: $('input').val()} )
  
console.log("i am here")
}
socket.on('NewMessage', function(data){
  $('body').append("<p>"  +data.message+ " </p>")
})


ShareWithUs()
