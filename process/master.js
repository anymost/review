/**
 * Created by lenovo on 2017/5/28.
 */

let childProcess = require('child_process'),
    cpus = require('os').cpus(),
    net = require('net');

let workers = {};
let server = net.createServer();
server.listen(1377);

function createWorker (){
    let worker = childProcess.fork('./child');

    worker.send('server', server);

    worker.on('exit', ()=>{
        delete workers[worker.pid];
        console.log(`the process ${worker.pid} is exited`);
        createWorker();
    });
    workers[worker.pid] = worker;
    console.log(`create process ${worker.pid}`);
}
for(let item of cpus){
    createWorker();
}
/*
process.on('exit', ()=>{
   for(var worker of workers){
       worker.kill();
   }
});*/
