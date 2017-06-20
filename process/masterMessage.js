/**
 * Created by lenovo on 2017/5/28.
 */

var child1 = require('child_process').fork('./workerMessage.js');
var child2 = require('child_process').fork('./workerMessage.js');
var server = require('net').createServer();

server.on('connection', (socket)=>{
    socket.end('handle by parent');
});

server.listen(1337,()=>{
    child1.send('server',server);
    child2.send('server',server);
});