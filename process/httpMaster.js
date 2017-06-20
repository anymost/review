/**
 * Created by lenovo on 2017/5/28.
 */
let childProcess = require('child_process'),
    child1 = childProcess.fork('./httpWorker.js'),
    child2 = childProcess.fork('./httpWorker.js'),
    server = require('net').createServer();

server.listen(1337, function (){
   child1.send('server', server);
   child2.send('server', server);
   //server.close();
});