/**
 * Created by lenovo on 2017/5/23.
 */
let net = require('net');
let server = net.createServer();
server.on('connection', (socket)=>{
    console.log('connection');
    socket.on('data', (data)=>{
        console.log(data);
        socket.write('welcome');
    });
});
server.on('close', ()=>{
    console.log('close');
});
server.listen(4000);