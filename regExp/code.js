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
// let string = 'http://data.sankuai.com/exec/plans/634214';
// let regExp = /http:\/\/data\.sankuai\.com\/exec\/plans\/(.+)/
// console.log(regExp.exec(string));
// let regExp = /^[a-z0-9_]+$/
// let string = 'ABa'
// console.log(regExp.test(string));

// const check = value=>{
//     if (value || (value === 0)) {
//         console.log('ok');
//     }
// };
// check(0);


// let obj = {name: 'jack'}
// let key = 'name';
// delete obj[key];
// console.log(key in obj);

// function willUploadChunks() {
//     let allChunks = [1, 2, 3, 4, 5, 6];
//     let receivedChunks = [2, 4, 6];
//     let willChunks = [];
//     for(let i = 0; i < allChunks.length; i++){
//         const item = allChunks[i];
//         if (receivedChunks.indexOf(item) === -1) {
//             willChunks.push(item);
//         }
//     }
//     return willChunks;
// }
// console.log(willUploadChunks());


// let sequences = [];
// let chunks = [1, 2, 3];
// for (let i = 0; i < 10; i++) {
//     if (chunks.indexOf(i) === -1) {
//         sequences.push(i);
//     }
// }
// console.log(sequences);

// function sayHello(){
//     console.log('hello world');
// }
// let isOk = true;
// isOk && sayHello();
// let string = "http: // data.sankuai.com /exec / plans / 634214";
// let regExp = /http:\s\/\/\sdata.sankuai.com\s\/exec\s\/\splans\s\/\s(\d+)/;
// console.log(regExp.test(string));

// console.log(isNaN(Number('hel11')));
// let obj = {name: 'jack'};
// console.log({...obj, age: 11});



// for (var i = 0; i < 10; i++) {
//     setTimeout(function (){
//         console.log(i);
//     }, 0);
// }

// // module a
// export default {
//     name: 'jack'
// }


// // module b
// import {name} from 'a'


// new Promise((resolve, reject)=> {
//      reject('a');
// }).then(value=>{
//     console.log(value);
// }).then(value=>{
//     console.log(value);
// });

// new Promise((resolve, reject)=> {
//     resolve('a');
// }).then(value=>{
//    console.log(b);
// }).then(value=>{
//    console.log(value);
// });

// function add (x, y, z) {
//     console.log(x + y + z);
// }
// add.call({}, 1, 2, 3);
// add.apply({}, [1, 2, 3]);


// function outer() {
//     let inner = ()=>{
//         console.log(this);
//     }
//     inner();
// }

// outer();

// let str = ' hello ';
// console.log(String.);

// function saveProperty(target, key, value) {
//     Object.defineProperty(target, key, {
//         get: function () {
//             return
//         }
//     })
// }

// function observer(data) {
//     if (!data || typeof data !== 'object') {
//         return;
//     }
//     Object.keys(data).forEach((key)=>{
//         defineReactive(data, key, data[key]);
//     });
// }
// function defineReactive(target, key, value) {
//     observer(value);
//     Object.defineProperty(target, key,{
//         get(){
//             return  target[key];
//         },
//         set(val){
//             console.log('change value');
//             value = val;
//         }
//     })
//
// }
// let obj = {
//     name: 'jack',
//     age: 11
// };
// observer(obj);
// obj.age = 22;


// const methods = [
//         'pop',
//         'push',
//         'shift',
//         'unshift',
//         'reverse',
//         'splice',
//         'sort'
// ];

// function transformArrayMethod (array, callback) {
//     for (let method of methods) {
//         Array.prototype[method] = function () {
//             Array.prototype[method].apply(this, arguments);
//             callback({
//                 method: method,
//                 array: array,
//                 args: Array.prototype.slice.call(arguments)
//             });
//         }
//     }
// }
// let regExp = /^[a-z0-9_]+$/;
// console.log(regExp.test('0ododod'))
// let searchTable = {
//     "code": 0,
//     "message": "数据更新成功",
//     "data": {
//        "item": [{
//                "tableId": "xxx",
//                "tableName": "xxx",
//                "securityLevel": "0:表示低 1:表示中 2:表示高",
//                "metaTablePk": "hive::dw::dw::dim_deal",
//                "description": "项目deal表",
//                "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//                "tag": [{
//                      "tagRootId": 0,
//                      "tagRoot": "root",
//                      "tags": [{"tagName": "name", "tagId": 0}]
//                    }]
//            },
//            {
//             "tableId": "xxx",
//             "tableName": "xxx",
//             "securityLevel": "0:表示低 1:表示中 2:表示高",
//             "metaTablePk": "hive::dw::dw::dim_deal",
//             "description": "项目deal表",
//             "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//             "tag": [{
//                   "tagRootId": 0,
//                   "tagRoot": "root",
//                   "tags": [{"tagName": "name", "tagId": 0}]
//                 }]
//         },
//         {
//             "tableId": "xxx",
//             "tableName": "xxx",
//             "securityLevel": "0:表示低 1:表示中 2:表示高",
//             "metaTablePk": "hive::dw::dw::dim_deal",
//             "description": "项目deal表",
//             "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//             "tag": [{
//                   "tagRootId": 0,
//                   "tagRoot": "root",
//                   "tags": [{"tagName": "name", "tagId": 0}]
//                 }]
//         },
//         {
//             "tableId": "xxx",
//             "tableName": "xxx",
//             "securityLevel": "0:表示低 1:表示中 2:表示高",
//             "metaTablePk": "hive::dw::dw::dim_deal",
//             "description": "项目deal表",
//             "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//             "tag": [{
//                   "tagRootId": 0,
//                   "tagRoot": "root",
//                   "tags": [{"tagName": "name", "tagId": 0}]
//                 }]
//         },
//         {
//             "tableId": "xxx",
//             "tableName": "xxx",
//             "securityLevel": "0:表示低 1:表示中 2:表示高",
//             "metaTablePk": "hive::dw::dw::dim_deal",
//             "description": "项目deal表",
//             "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//             "tag": [{
//                   "tagRootId": 0,
//                   "tagRoot": "root",
//                   "tags": [{"tagName": "name", "tagId": 0}]
//                 }]
//         },
//         {
//             "tableId": "xxx",
//             "tableName": "xxx",
//             "securityLevel": "0:表示低 1:表示中 2:表示高",
//             "metaTablePk": "hive::dw::dw::dim_deal",
//             "description": "项目deal表",
//             "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//             "tag": [{
//                   "tagRootId": 0,
//                   "tagRoot": "root",
//                   "tags": [{"tagName": "name", "tagId": 0}]
//                 }]
//         },
//         {
//             "tableId": "xxx",
//             "tableName": "xxx",
//             "securityLevel": "0:表示低 1:表示中 2:表示高",
//             "metaTablePk": "hive::dw::dw::dim_deal",
//             "description": "项目deal表",
//             "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//             "tag": [{
//                   "tagRootId": 0,
//                   "tagRoot": "root",
//                   "tags": [{"tagName": "name", "tagId": 0}]
//                 }]
//         },
//         {
//             "tableId": "xxx",
//             "tableName": "xxx",
//             "securityLevel": "0:表示低 1:表示中 2:表示高",
//             "metaTablePk": "hive::dw::dw::dim_deal",
//             "description": "项目deal表",
//             "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//             "tag": [{
//                   "tagRootId": 0,
//                   "tagRoot": "root",
//                   "tags": [{"tagName": "name", "tagId": 0}]
//                 }]
//         },
//         {
//             "tableId": "xxx",
//             "tableName": "xxx",
//             "securityLevel": "0:表示低 1:表示中 2:表示高",
//             "metaTablePk": "hive::dw::dw::dim_deal",
//             "description": "项目deal表",
//             "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//             "tag": [{
//                   "tagRootId": 0,
//                   "tagRoot": "root",
//                   "tags": [{"tagName": "name", "tagId": 0}]
//                 }]
//         },
//     {
//         "tableId": "xxx",
//         "tableName": "xxx",
//         "securityLevel": "0:表示低 1:表示中 2:表示高",
//         "metaTablePk": "hive::dw::dw::dim_deal",
//         "description": "项目deal表",
//         "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//         "tag": [{
//               "tagRootId": 0,
//               "tagRoot": "root",
//               "tags": [{"tagName": "name", "tagId": 0}]
//             }]
//     }
//     ,{
//         "tableId": "xxx",
//         "tableName": "xxx",
//         "securityLevel": "0:表示低 1:表示中 2:表示高",
//         "metaTablePk": "hive::dw::dw::dim_deal",
//         "description": "项目deal表",
//         "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//         "tag": [{
//             "tagRootId": 0,
//             "tagRoot": "root",
//             "tags": [{"tagName": "name", "tagId": 0}]
//             }]
//     }]
//         },
//        "tn": 999,
//        "cn": 1,
//        "pn": 10,
//        "sn": 100
//    }
//
//    let tagSearch =
//    {
//        "code": 0,
//        "message": "数据更新成功",
//        "data": {
//            "item":[
//                    {
//                       "tagId":123,
//                       "tagName":"交易",
//                       "tableNum":54,
//                    },
//                    {
//                       "tagId":113,
//                       "tagName":"流量",
//                       "tableNum":33,
//                    },
//                ],
//            },
//        "tn": 999,
//        "cn": 1,
//        "pn": 10,
//        "sn": 30
//    }

//    let regExp = /^application\/vnd\.ms-excel$/
//    console.log(regExp.test('application/vnd.ms-excel'))
// console.log((/(^text\/csv$)|(^text\/plain$)|(^application\/vnd\.ms-excel$)/).test('application/vnd.ms-excel'));

// let arrayOne = [1, 2, 3]
// let arrayTwo = [4, 5, 6]
// console.log(Array.prototype.concat.call(arrayOne, arrayTwo))
// let array = [1, 2, 3]
// array.pop()
// console.log(array)


// let obj = {
//     name: 'obj',
//     sayName () {
//         console.log(this.name)
//     }
// };
//
// let sayName = obj.sayName;
// sayName();

// // module A
// export let obj = {name: 'obj'}


// // module B

// import obj from './A'
// let {name} = obj


// a.g


// let array = [1, 2, 3, 4, 5]
// array.splice(0,2,[6,7]);
// console.log(array)


// name = 'obj'
// let name;
// console.log(name)


// name = 'obj'
// var name;
// console.log(name)


// function sayThis () {
//     console.log(this)
// }
// sayThis.call(null)

// async function hello() {
//     await setTimeout(() => {
//         console.log('timeout')
//     })
//     console.log('direct')
// }
// hello()
// console.log(/\s/.test('hellow '))

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }
// var obj =  {
//     name: 'obj',
//     sayName: function () {
//         console.log(this.name)
//     }
// }
// var sayName = obj.sayName
// sayName()

// name = 'hello'
// console.log(name)
// var name
// Promise.resolve('hello').
// then( (value) => {
//     console.log(name)
// }).catch(value=>{
//     console.log(value)
// })

// // module a
// export default {
// //     name: 'hello'
// // }

// // // module b
// // import {name} from './a'

// // var obj = {
// //     name: 'hello',
// //     age: 11
// // }

// //
// // let array = [1, 2, 3]
// // function test(array){
// // }
// // test(array)
// // console.log(array)

// for (var i=0;i< 10;i++) {
//     setTimeout(()=>{
//         console.log(i)
//     }, 0)
// }

//  let obj = new Object();
// Object.getPrototypeOf(obj)

// let obj = {
//     "code": 0,
//     "message": "数据更新成功",
//     "data": {
//        "item": [
//            {
//                "tableId": "xxx",
//                "tableName": "xxx",
//                "securityLevel": "0:表示低 1:表示中 2:表示高",
//                "qualityLevel": "0:表示低 1:表示中 2:表示高",
//                "metaTablePk": "hive::dw::dw::dim_deal",
//                "description": "项目deal表",
//                "metaUrl": "http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//                "tagRootList": [{
//                      "tagRootId": 0,
//                      "tagRootName": "root",
//                      "tagList": [{"tagName": "name", "tagId": 0}]
//                    }]
//            },
//            {
//                "tableId":"xxx",
//                "tableName":"xxx",
//                "securityLevel":"0:表示低 1:表示中 2:表示高",
//                "qualityLevel":"0:表示低 1:表示中 2:表示高",
//                "metaTablePk":"hive::dw::dw::dim_deal",
//                "description":"项目deal表",
//                "metaUrl":"http://meta.sankuai.com/detail/hive::dw::dw::dim_deal",
//                "tagRootList":[{
//                      "tagRootId": 0,
//                      "tagRootName": "root",
//                      "tagList": [{"tagName": 'name', "tagId": 0}]
//                    }]
//            }],
//        "tn": 999, 
//        "cn": 1, 
//        "pn": 10, 
//        "sn": 100 
//       }
//    }
   
//    console.log(JSON.stringify(obj));

    
//    let date = new Date();
//     console.log(date.valueOf())
// let path = '/users/brady/images/avatar/hello.jpg';
// let reg = /.+(\/avatar\/.+$)/;
// console.log(reg.exec(path)[1]);

// let obj = {
//     name: 'jack',
//     sayName: function () {
//         console.log(this.name)
//     }
// }

// let sayName = obj.sayName;
// sayName()


// name = 'jack'
// console.log(name)
// let name;


// let buffer = new Buffer('哈哈');
// console.log(buffer)


// function debounce(func, wait) {
//     let start = new Date();
//     let lastResult = null;
//     return function () {
//         let now = new Date();
//         if (now - start < wait) {
//             return lastResult;
//         } else {
//             start = now;
//             return lastResult = func.call(this, arguments);
//         }
//     }
// }
// let result = name=>name;
// let newFunc = debounce(result, 1)
// console.log(newFunc('hello1'))
// console.log(newFunc('hello2'))
// console.log(newFunc('hello3'))
// console.log(newFunc('hello4'))
// console.log(newFunc('hello5'))
// console.log(newFunc('hello6'))
// console.log(newFunc('hello7'))
// console.log(newFunc('hello8'))
// console.log(newFunc('hello9'))
// console.log(newFunc('hello10'))
// console.log(newFunc('hello11'))
// console.log(newFunc('hello12'))

// const net = require('net');
// net.createServer(socket => {
//     socket.on('connection', () => {
//         socket.write('welcome');
//         console.log('connection');
//     })
//     socket.on('data', data => {

//         console.log(data);
//     })
//     socket.on('end', () => {
//         console.log('end')
//     })
// }).listen(3000)


// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 0)
// }

// var obj = {
//     name: 'hello',
//     sayName: function () {
//         console.log(this.name)
//     }
// }

// var sayName = obj.sayName
// sayName()


//module one
// export default {a: 'a'}

// // module two
// import {a} from './two'


// function outer() {
//     this.obj = 'obj'
//     var sayObj = () => {
//         console.log(this.obj)
//     }
//     sayObj()
// }

// new Promise((resolve, reject) => {
//     reject('failed')
// }).then()
// .then()
// .catch()

// const renderMultiple = () => {
//     return <div>A</div>
//     <div>B</div>
//     <div>C</div>
// }

// const renderArray = () => {
//     return  [<div>A</div>,
//             <div>B</div>,
//             <div>C</div>]
// }

// const renderString = () => {
//     return 'hello world'
// }

// const renderOldHOC = (Container) => {
//     return props => (<div>
//         <Container {...props}/>
//         <div>text</div>
//     </div>)
    
// }

// const renderNewHOC = (Container) => {
//     return props => [
//         <Container {...props}/>,
//         <div>text</div>
//     ]
// }

// function Person() {

// }

// Object.defineProperty(Person.prototype, 'name', {
//     writable: false,
//     get() {
//       return 'hello'
//     },
//     get(value) {
//       Person.prototyp.name = value;
//     }
// })

/**
 * 首页需要搜索功能 P3
 * 首页左侧栏展示所有的分组
 * 添加监控 过滤任务集 监控任务集 过滤任务返回空数据 done
 * 过滤任务按行分割 done
 * 按分组管理过滤任务集 按任务集管理 监控任务集 done
 * 生效时间默认为000000 235959 时间确认一下  done
 * 接口访问较慢 
 * 生效日期保存失败 done
 * 值班预览前端需要添加
 * 告警页面滚动 done
 * 告警日期格式化 done
 * 跨域头 cantor入口 xt后台添加对新路由的支持
 *
 */

// [{
//     depName: {
//         groupName:{
//             items: [{
//                 "id": 124, 
//                 "itemName": "外卖SLA监控", 
//                 "monitorGroup": "dep-waimai", 
//                 "creator": "chenzhiwei", //model中缺少 
//                 "createTime": "2017-09-29", //model中缺少 
//                 "depName": "餐饮平台"
//             }]
//         }
//     }

// }]
// function getDaysInMonth(year,month){ 
//     month = parseInt(month,10); //parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。 
//     var temp = new Date(year,month,0); 
//     return temp.getDate(); 
// }
// let date = new Date();
// getDaysInMonth(date.getFullYear(), date.getMonth())


// app.all('*', function(req, res, next) {
//     if( req.headers.origin == 'www.a.com' || req.headers.origin == 'www.b.com' ){
//         res.header("Access-Control-Allow-Origin", req.headers.origin);
//         res.header('Access-Control-Allow-Methods', 'POST, GET');
//         res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//         res.header('Access-Control-Allow-Headers', 'Content-Type');
//     }
//     next();
// });

// async getTaskReview({commit}, payload) {
//     const {view, viewContent, page, count} = payload;
//     if (view) {
//         const value = await net.taskReview.getTaskReview(view, viewContent, page, count)
//         if value 
//             if (value && value.data && value.data.code) {
//                 if (value.data.code === 200 && value.data.data) {
//                     const {data: {data}} = value;
//                     commit('getTaskReview', data);
//                 } else {
//                     commit('showMessage', {message: value.data.msg});
//                 }
//             } else {
//                 commit('showMessage', {message: value.data.msg});
//             }
//         }).catch(()=>{
//             commit('showMessage', {message: '网络错误'});
//         });
//     }

// },

// const observable = Rx.observable.create(observer => {
//     observer.next(1);
//     observer.next(2);
//     setTimeout(() => {
//         observer.next(3)
//     }, 0);
// })
// console.log('before subscribe');
// observable.subscribe(value => {
//     console.log(value);
// });
// console.log('after subscribe');

// const observable = Rx.Observable.create(function subscribe(observer ){
//     try {
//         observer.next(1);
//         observer.next(2);
//         observer.next(3);
//         observer.complete();
//     } catch (err) {
//         observer.error(err); // 捕获错误并发送
//         }
// });
// observable.subscribe({
//     next: value => {
//         console.log(value);
//     },
//     error: error => {
//         console.log(error);
//     },
//     complete: () => {
//         console.log('complete')
//     } 
// })


// const observable = Rx.Observable.create(function subscribe(observer ){
//     observer.next(1);
// });
// const subscription = observable.subscribe(value => {
//     console.log(value);
// })
// subscription.unsubscribe();
// const subject = new Rx.Subject();
// subject.subscribe({
//   next: (value) => console.log(value)
// });
// subject.next('hello');
// let array = [
//     {name: 1, value: 1},
//     {name: 2, value: 2},
//     {name: 3, value: 3}
// ];
// let newArray = array.mapState(item => {
//     if (item.name > 1) {
//         return item.value
//     }
// })
// console.log(newArray);


// const Content extends React.Component{
//     state = {
//         x: 0,
//         y: 0
//     }
//     handleEvent = event => {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         })
//     }
//     render() {
//        return <div onMouseOver={this.handleEvent}>
//             {this.props.func(this.state.x, this.state.y)}
//        </div>
//     }
// }
// const pingEpic = action$ =>
// action$.ofType('PING')
//   .delay(1000) // 异步等待 1000ms 然后继续
//   .mapTo({ type: 'PONG' });
// 
const chooseToDispatch = (data, store) => {
    if (data.code === 200) {
        store.dispatch(loginSuccess({data: data.payload}))
    } else {
        store.dispatch(loginFailed({message: data.message}))
    }
}

const userLoginEpic = (action$, store)=>
action$.ofType(ActionTypes.LOGIN_START)
.debounce(3000)
.switchMap(action => 
ajax.post('/login', action.payload)
.map(data => data.response)
.map(data => chooseToDispatch(data, store))
.takeUntil(action$.ofType(ActionTypes.LOGIN_CANCEL))
.catch(() => Observale.of(loginFailed({message: 'network error'})))
)
