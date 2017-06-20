/**
 * Created by lenovo on 2017/5/28.
 */
let childProcess = require('child_process');

let worker = childProcess.fork('./oneWorker');
worker.send({
    name : 'worker'
});
worker.on('message', (data)=>{
   console.log(data);
});