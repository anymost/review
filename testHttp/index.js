/**
 * Created by lenovo on 2017/5/24.
 */
/*
let http = require('http'), url = require('url'), queryString = require('querystring');

http.createServer((req, res)=>{
   console.log(req.method);
   console.log(url.parse(req.url));
   console.log(url.parse(req.url, true).query);
}).listen(3000);*/
/*
let cookie = /((\w+)=(\w+));?/g;
console.log('name=hello;age=11;sex=male;country=china'.match(/(\w+)=(\w+)?/g));*/
/*
let http = require('http'), url = require('url');

http.createServer((req, res)=>{
    console.log(req.cookies);
    res.end('ok');
}).listen(3000);
*/

/*
let query = 'name=jack&age=1';
query = query.split('&').map((item)=>{
    item = item.split('=');
    return {
        [item[0]] : item[1]
    }
});
console.log(query);*/

let http = require('http');

http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
   res.writeHead(200);
   res.write('<form action="http://localhost:4000" method="post" enctype="multipart/form-data"><input type="file" name="file">' +
       '<input type="submit"></form>')
   res.end();
}).listen(3000);
http.createServer((req, res)=>{
    console.log(req.headers);
    console.log(req.files);
   res.end('ok');
}).listen(4000);