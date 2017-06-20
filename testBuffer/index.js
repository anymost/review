/**
 * Created by lenovo on 2017/5/23.
 */
/*let buffer = new Buffer('hello world', 'utf8');
console.log(buffer);
buffer[2]=11;
console.log(buffer.toString('utf8'));*/
//let buffer = new Buffer('hello world');
/*
buffer.write('world hello','gb2312');
console.log(buffer.toString('utf8'));*/
//console.log(Buffer.isEncoding('ascii'));
/*
let fs = require('fs'), data = '';
let stream = fs.createReadStream('./index.txt', {highWaterMark : 11});
stream.setEncoding('utf8');
stream.on('data', (chunk)=>{
   data+=chunk;
});
stream.on('end', ()=>{
   console.log(data);
});*/
let fs = require('fs'), array = [], length = 0;
let stream = fs.createReadStream('./index.txt', {highWaterMark : 11});
stream.on('data', (chunk) => {
   array.push(chunk);
   length += chunk.length;
});
stream.on('end', () => {
   let buf = Buffer.concat(array, length);
   console.log(buf.toString('utf8'))
});
