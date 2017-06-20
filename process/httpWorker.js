/**
 * Created by lenovo on 2017/5/28.
 */
let http = require('http');

let server = http.createServer((req, res)=>{
   res.writeHead(200,{'Content-Type' : 'text/plain'});
   res.end(1`handle by child ${process.pid}`);
});

process.on('message', (message, tcp)=>{
    tcp.on('connection', (socket)=>{
       server.emit(socket);
    });
});