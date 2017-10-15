let fs = require('fs')
// fs.writeFileSync('./des.js', fs.readFileSync('./src.js'));
let url = require('url')
console.log(url.parse('http://ww.baidu.com/name?name=jack#hello', true))
