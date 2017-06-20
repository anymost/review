/**
 * Created by lenovo on 2017/5/8.
 */
let worker = new SharedWorker('./SharedWorker.js');
worker.port.addEventListener('message', function (event){
   console.log(JSON.stringify(event));
});

worker.port.postMessage('start');
worker.port.start();