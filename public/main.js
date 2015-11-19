$(function(){

	var socket = io();

	$('#send-msg').on('submit', function(event){
		event.preventDefault();
		var newMsg = $('#new-msg').val();
		socket.emit('chat-message', newMsg);
	});

	socket.on('chat-message', function(msg) {
		console.log(msg);
		$('#messages').append($('<li>' + msg + '</li>'));
	});

});