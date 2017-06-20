/**
 * Created by lenovo on 2017/4/24.
 */
/*
var fs = require('fs');

//fs.writeFileSync('./dest.txt', fs.readFileSync('./src.txt'));
fs.readFile('./src.txt', function (err, data){
   if(!err){
       console.log(data.toString('utf-8'));
   }
});
fs.stat('./src',)*/
/*
var path = require('path');

console.log(path.join(__dirname, 'hello.txt'));*/
/*

var fs= require('fs');
var path = require('path');

function travel (dir, callback){
    fs.readdirSync(dir).forEach(function (file){
        var pathname = path.join(dir, file);
        if(fs.statSync(pathname).isDirectory()){
            travel(pathname, callback);
        }else{
            callback(pathname);
        }
    })
}
travel('d:', function(pathname){
    console.log(pathname);
});*/
/*
var fs = require('fs');
console.log(fs.readFileSync('./client.js').toString('utf8'));*/
/*
let toString = Object.prototype.toString;

function isType (type){
    return function (obj){
        return toString.call(obj) == `[object ${type}]`
    }
}
let isString = isType('String');*/

/*
setImmediate(()=>{
   console.log('immediate');
});
process.nextTick(()=>{
   console.log('process nextTick');
});*/
/*setImmediate(()=>{
    console.log(A);
});*/
