/**
 * Created by lenovo on 2017/5/8.
 */

let worker = new Worker('./worker.js');
worker.postMessage('hello world');
worker.addEventListener('message', (event)=>{
    console.log(JSON.stringify(event.data));
});