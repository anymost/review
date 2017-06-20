/**
 * Created by lenovo on 2017/5/24.
 */
let dgram = require('dgram');
let buffer = new Buffer('hello world');
let client = dgram.createSocket('udp4');
client.send(buffer, 0, buffer.length, 5555, 'localhost', ()=>{
    console.log('send success');
});