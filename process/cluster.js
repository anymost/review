/**
 * Created by lenovo on 2017/5/28.
 */
let cluster = require('cluster'),
    http = require('http');
if(cluster.isMaster){
    for(let i of [1, 2, 3, 4]){
        cluster.fork();
    }
    cluster.on('exit',(worker)=>{
       console.log(`the worker ${worker.process.pid} is exit`);
    });
}else{
    http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type' : 'text/plain'});
    }).listen(8000);
}