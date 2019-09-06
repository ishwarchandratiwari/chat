var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('join chat', function(data){
    // console.log('join chat===================',data,socket.id)
    socket.join(data.chatid);
  });
  socket.on('chat message', function(data){
    // console.log('---------',data)
    if(data.chatid!=''){
      io.to(data.chatid).emit('chat message', {message:data.message,from:data.from,to:data.chatid});
    }else{
      io.emit('chat message', {message:data.message,from:data.from,to:'public'});
    }
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
