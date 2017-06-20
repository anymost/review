/**
 * Created by lenovo on 2017/5/23.
 */
let net = require('net');

let client = net.connect({port:4000}, ()=>{
    console.log('connect');
    client.write('connect server');
});

client.on('data', (data)=>{
   console.log(data);
   client.write('connect server');
});
