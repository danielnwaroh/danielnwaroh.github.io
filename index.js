var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var i=0;


var names=[];
var allmsgs=[];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
  var tone = "black";
  i++;
  socket.name = "user"+Math.floor((Math.random()*100)+1);
  if (names.indexOf(socket.name) == -1)
  names.push(socket.name);

  updateNames();
  socket.emit('current user', "Current User: "+socket.name);
  if (allmsgs.length != 0) {
    socket.emit('load history', allmsgs);
    console.log("23: "+allmsgs);
  }

  socket.on('new user', function(data, callback) {
    if (names.indexOf(data) != -1) {
      callback(false);
    }else {

    }

  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
    if(!socket.name) {
      return;
    }
    names.splice(names.indexOf(socket.name), 1);
    // updateNames();
    io.emit('usernames', names);
  });
  function updateNames() {
    io.emit('usernames', names);
    // socket.emit('usernames', socket.name);
    console.log(names);
  }


  socket.on('chat message', function(data){
    var x = data.substring(0,5);
    var d = new Date();
    var t = d.toLocaleTimeString();
    //var tone;
    if (data.includes("/nick ")) {
      console.log("/nick");
      var a = data.slice(5,data.length);
      if (names.includes(a)) {
        socket.emit('bad name');
        console.log("BAD");
      } else {
        var change = names.indexOf(socket.name);
        names[change] = a;
        socket.name = a;
        socket.emit('current user', "Current User: "+socket.name);
      }
    } else if (data.includes("/nickcolor")){
      var a = data.slice(10,data.length);
      console.log("/NICKCOLOR: "+a);
      //socket.broadcast.emit('chat message', {actmsg:data, nameofuser:socket.name, time:t, color: a});
      //socket.emit('chat message', {actmsg:data, nameofuser:"<b>"+socket.name+"</b>", time:t, color: a});
      tone = a;

    } else {
      console.log("TONE: "+tone);
      if (tone == null) {
        tone="black";
        console.log("TONE: "+tone);
      }
      console.log("TONE: "+tone);
      socket.broadcast.emit('chat message', {actmsg:data, nameofuser:socket.name, time:t, color: tone});
      allmsgs.push([t, socket.name, data, tone]);
      console.log("DATA: " +data);
      console.log("All messages: "+allmsgs);
      socket.emit('chat message', {actmsg:data, nameofuser:"<b>"+socket.name+"</b>", time:t, color: tone});
      console.log(socket.name);
      console.log('message: ' + data);
    }
    updateNames();
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


io.emit('some event', { for: 'everyone' });

// io.sockets.on('connection', function(socket) {
//   console.log('a user connected');
//   socket.name = "user"+Math.floor(Math.random() * (+max - +min)) + +min;
//   names.push(socket.name);
//   updateNames();
//   io.sockets.emit('header', socket.name);
//
//   socket.on('send message', function(data) {
//     console.log('message: ' + data);
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     console.log('date: ' + t);
//     socket.ts = t;
//     io.sockets.emit('new message', {msg: data, username: socket.name, timestamp: socket.ts});
//     console.log(socket.name + " is talking right now");
//     //console.log(typeof socket.name);
//   });
//   function updateNames() {
//     io.sockets.emit('usernames', names);
//     console.log(names);
//   }
//   socket.on('disconnect', function(data) {
//     console.log(socket.name + ' disconnected');
//     if(!socket.name) {
//       return;
//     }
//     names.splice(names.indexOf(socket.name), 1);
//     updateNames();
//   });
//   socket.on('add header', function(data) {
//     io.sockets.emit('add header', socket.name);
//     console.log("LOOOOOOK AT ME");
//   })
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
// server.listen(3000, function() {
//   console.log('listening on *:3000');
// });
//
// io.emit('some event', { for: 'everyone' });
