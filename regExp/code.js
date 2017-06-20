/**
 * Created by lenovo on 2017/5/13.
 */
function print (value){
    console.log(value);
}
/*
console.log('abc 123 '.replace(/\d/g, 'h'));


console.log('123abc'.search(/\S/));
console.log('1012345678'.match(/1[34578]\d{9}|0\d{10,11}/));
console.log('creatuture@gmail.com'.search(/\w+@\w+\.\w+/));*/

/*
console.log('123456'.match(/\d/g));*/
//console.log('18844548962'.match(/^1[34578]\d{9}$/));
/*
let reg = new RegExp('^1[34578]\\d{9}$|^0\\d{10,11}$');
console.log(reg.exec('01018844541'))
console.log(reg.source);*/

/*
let reg = new RegExp('^\\w+\\s+\\w+@\\w+\\.\\w+$');
console.log(reg.exec('creatu  ture@gmail.com'));*/
/*
let string = '<img src="https://www.google.com/index.jpg">';
let reg = new RegExp('<img\\s+src=".+">');
console.log(reg.test(string));*/
/*let reg = new RegExp('\\d','g');
console.log(reg.exec('h1l2o'));*/
/*
console.log('h1a2g3b4'.match(/\d+/g));*/

/*let reg = /"\w+"/;
console.log(reg.exec('"hello"'));*/


/*let reg = /a{1}b/;
console.log(reg.exec('aaab'));*/

/*
let reg = /java(script)?/;
console.log(reg.exec('javascript'));*/
/*
let reg = new RegExp('^java(script)?$');
console.log(reg.exec('javascript'));*/
/*let reg = /java(\d\.\d)/;
console.log(reg.exec('java1.2'));*/
/*let reg = /java(\d+\.\d+)\spython(\d+\.\d+)\sruby(\d+\.\d+)/;
console.log(reg.exec('java11.2 python2.7 ruby1.9'));*/

/*let reg = /(['"])[^'"]+\1/;
console.log(reg.exec("'hello world'"));*/
/*
let reg = /<img\ssrc="(.+)".*>/;
console.log(reg.exec('<img src="hello.jpg">')[1]);*/

/*
let reg = /\d/g;
let string = '1a2b3c4d5e6f7g';
console.log(reg.exec(string));
console.log(reg.exec(string));
console.log(reg.exec(string));
console.log(reg.exec(string));*/
/*
let reg = /^\w+@(\w+)\.\w+#\1/;
console.log(reg.exec('creatuture@gmail.com#gmail'));*/
/*let http = require('http');
let content = http.get({
    url : 'http://movie.douban.com',
    'User-Agent' : ''
});
content.on('data', function (data){
   console.log(data);
});*/
/*
let reg = /<img\ssrc="(\S+)"\s.+/;
let string = '<img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2453433569.webp" alt="亚瑟王：斗兽争霸" rel="nofollow" class="">'

console.log(reg.exec(string)[1]);*/
/*let userAgentOne = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36'
let userAgentTwo = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
let userAgentThree = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Mobile Safari/537.36'
let userAgentFour = 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13'
let userAgentFive = 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+'
let userAgentSix = 'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true'
let reg = /.+\((.+)\).+\((.+)\).+/
console.log(reg.exec(userAgentOne));*/
//let reg = /.+\/\d\.\d\s+\((.+)\)\s+Apple.+/
/*console.log(reg.exec(userAgentOne)[1]);
console.log(reg.exec(userAgentTwo)[1]);
console.log(reg.exec(userAgentThree)[1]);
console.log(reg.exec(userAgentFour)[1]);
console.log(reg.exec(userAgentFive)[1])
console.log(reg.exec(userAgentSix)[1])*/

/*let reg = /java(script)+/g
let string = 'javascriptscriptscript';
console.log(reg.exec(string));
console.log(reg.exec(string));
console.log(reg.exec(string));*/
/*
let reg = /((script)+)java\2/

let string = 'scriptscriptjavascript';
console.log(reg.exec(string));*/
/*
/^https?:\/\/(([0-9A-Za-z])+(\.)?)+(:\d+)?(\/\w+)*(\?((\w+=\w+)&?)*)?(#\w+)?$/*/

/*let reg = /<(\S+)\s*.*>.*<\/\1>/;
console.log(reg.exec('<img src="hello">hello</img>'))*/
// let string = 'hello world';
//console.log(string.search(/\s/));
// print(string.replace(/\w{3}/g, 'SOS'));

// let reg = /\d{2}/gim;
// let string = '22hh33dd44uu55kk'
// print(reg.exec(string));
// print(reg.test(string));
// print(reg.source);
// print(reg.global);
// print(reg.multiline);
// print(reg.ignoreCase);
// print(reg.lastIndex);

// let string = `dddddddd 

// hello`;
// let reg = /\b/g;
// print(reg.exec(string));
// print(reg.exec(string));

// let string = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36';

// let regTwo = /\s\((.*?)\)\s/g
// print(regTwo.exec(string));
// print(regTwo.exec(string));


// let string = 'BAIDUID=D70CFA7F0F00EE3BF65C1563D1C2419D:FG=1; BIDUPSID=D70CFA7F0F00EE3BF65C1563D1C2419D; PSTM=1494748304; BDUSS=XNoU2RDRVU5TEExVlFNfllZYVV3VFB1bVBpUWRmTEl4MlpMZkZIbC1-emNpRUJaSVFBQUFBJCQAAAAAAAAAAAEAAACqC24veWVhcs7wzfxf0MSwsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANz7GFnc-xhZc; ispeed_lsm=0; BD_HOME=1; BD_UPN=12314753; H_PS_645EC=ea799bhNa6k%2FkrjrrLyVJWdKAWofyZDXCL6x02lsxpLOWD%2Bip2pTRcOOVK3F5OFFSAgO; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; BD_CK_SAM=1; PSINO=1; BDSVRTM=19; H_PS_PSSID=1447_21120_20719'
// string = `${string}; `;
// let reg = /(.*?)=(.*?);\s+?/g
// print(reg.exec(string));
// print(reg.exec(string));
// print(reg.exec(string));
// print(reg.exec(string));
// print(reg.exec(string));
// print(reg.exec(string));