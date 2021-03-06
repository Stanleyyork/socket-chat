var express = require('express');
	app = express();
	http = require('http').Server(app),
	bodyParser = require('body-parser'),
	io = require('socket.io')(http);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', function(req,res){
	res.render('index');
});

io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('chat-message', function(msg){
		console.log('message: ', msg);
		io.emit('chat-message', msg);
	});

	socket.on('disconnect', function() {
		console.log('user disconnected');
	});
});


http.listen(3000, function() {
	console.log('server started');
});