//chat function
var io
var socket = io();
function ShareWithUs(){
socket.emit('sendMessage' , {message: $('textarea').val()} )
console.log("i am here")
}
socket.on('NewMessage', function(data){
$('.chat').append("<p>"  +data.message+ "</p>")
})
ShareWithUs()

//scroll to bottom on chat submit

$(".bottom").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});

//scroll to top on button click

$(".top").click(function() {
  $("html, body").animate({ scrollTop: $(document).height(0) }, "slow");
  return false;
});

//screenshot function
// DOESNT WORK YET
var c = document.getElementById('the_canvas_element_id');
var t = c.getContext('2d');
/* then use the canvas 2D drawing functions to add text, etc. for the result */
window.open('', document.getElementById('the_canvas_element_id').toDataURL());

$(function() { 
    $("#btnSave").click(function() { 
        html2canvas($("#widget"), {
            onrendered: function(canvas) {
                theCanvas = canvas;


                canvas.toBlob(function(blob) {
                    saveAs(blob, "Dashboard.png"); 
                });
            }
        });
    });
});