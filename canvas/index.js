/**
 * Created by lenovo on 2017/5/16.
 */
let fs = require('fs');
/*
let read = false, start = Date.now();
fs.readFile('./history.html', (err, data)=>{
    if(read){
        console.log(Date.now()-start);
    }else{
        read = true;
    }
});
fs.readFile('../css/history.html', (err, data)=>{
    if(read){
        console.log(Date.now()-start);
    }else{
        read = true;
    }
});
*/

let start = Date.now();
fs.readFileSync('./history.html');
fs.readFileSync('../css/history.html');
console.log(Date.now()-start);