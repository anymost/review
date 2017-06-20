/**
 * Created by lenovo on 2017/5/8.
 */

let array = [];
for(let i=0;i<1000000;i++){
    array.push(i*2);
}

addEventListener('message', (data)=>{
    postMessage(array);
});
