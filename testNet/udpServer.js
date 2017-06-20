/**
 * Created by lenovo on 2017/5/24.
 */
let dgram = require('dgram');
let server = dgram.createSocket('udp4');
server.on('message', (message, info)=>{
    console.log(`the message is ${message},
    address is ${info.address} port is ${info.port}`);
});
server.on('listening', ()=>{
    console.log('listening');
});
server.bind(5555);