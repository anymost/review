/**
 * Created by lenovo on 2017/5/24.
 */
let http = require('http');
let connectCount = 0;
let server = http.createServer((req, res)=>{
    res.setHeader('name', 'jack');
    res.writeHead(200, {'Content-Type' : 'text/html'})
    console.log(req.headers);
    console.log(req.url);
    console.log(req.query);
    console.log(req.method);
    res.end('<h1>hello world</h1>')
}).listen(3000, 'localhost');
server.on('connection', ()=>{
   console.log(`the connect count is ${connectCount}`)
});