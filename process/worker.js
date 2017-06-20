/**
 * Created by lenovo on 2017/5/27.
 */


let http = require('http');
http.createServer((req,res)=>{
    res.end('worker process');
}).listen(Math.round(Math.random()*1000)+1);