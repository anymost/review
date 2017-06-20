/**
 * Created by lenovo on 2017/4/17.
 */

/**
 * Promise
 */


/*Promise.race([
 new Promise((resolve, reject)=>{
 setTimeout(()=>{resolve('hello');},2000);
 }),
 new Promise((resolve, reject)=>{
 setTimeout(()=>{resolve('world');}, 1000) ;
 })
 ]).then((result)=>{console.log(result)});*/
/*let p = Promise.all([Promise.resolve('promise one'),Promise.resolve('promise two')]);
 p.then((result)=>{
 console.log(result);
 });*/
/*let p = Promise.all([Promise.resolve('promise one'),Promise.reject('promise two')]);
 p.then((result)=>{
 console.log(result);
 }, (reject)=>{
 console.log(reject);
 });*/
/*function createPromise(delay, value){
 return new Promise(function (resolve, reject) {
 setTimeout(()=>{resolve(value);}, delay);
 })
 }
 createPromise(10000, 'hello')
 .then((value)=>{
 console.log(value);
 return createPromise(20000,'world')
 }).then((value)=>{
 console.log(value);
 return createPromise(30000,'cooper');
 }).then((value)=>{
 console.log(value);
 });
 */

/*    let p = new Promise((resolve, reject)=>{
 reject('error happened');
 }).then((result)=>{
 console.log(result);
 }).then((result)=>{
 console.log(result);
 }).then((result)=>{
 hello();
 console.log(result);
 }, (error)=>{
 hello();
 }).then(()=>{console.log('fullfilled')},()=>{console.log('reject')});*/

/*  Promise.resolve('hello')
 .then((result)=>{return result},(error)=>{console.log(error)})
 .then((result)=>{console.log(result)});*/
/* var p = {
 name: {
 then: (cb, errCb) => {
 cb('hello');
 errCb('error');
 }
 }
 };*/
/*p.then((result)=>{
 console.log(result);
 }, (error)=>{
 console.log(error);
 });*/
//Promise.resolve(p).then((result)=>{console.log(result)},(error)=>{console.log(error)});

/* var getX = new Promise((resolve, reject)=>{
 setTimeout(()=>{
 resolve(1);
 },2000);
 });


 var getY = new Promise((resolve, reject)=>{
 setTimeout(()=>{
 resolve(2);
 },3000);
 });

 function add (getX,getY){
 return Promise.all([getX, getY])
 .then((values)=>{return values[0]+values[1]});
 }
 add(getX, getY).then((sum)=>{console.log(sum);});*/

/* let promise = new Promise((resolve, reject)=>{
 resolve(1);
 });
 promise.then((result)=>{
 console.log(result);
 });
 console.log(2);*/
/*console.log('a');
 setTimeout(()=>{
 console.log('b');
 setTimeout(()=>{
 console.log('c');
 setTimeout(()=>{
 console.log('d');
 },0);
 },0);
 },1000);
 setTimeout(()=>{
 console.log('f');
 },1000);*/

/*let promise = new Promise((resolve, reject)=>{
 console.log(a);
 resolve('hello');
 });
 promise.then((result)=>{

 console.log(result);
 },(error)=>{
 console.log(error);
 })*/
let promise = new Promise((resolve, reject)=>{
 resolve('hello');
 });
 promise.then((result)=>{
 foo();
 console.log(result);
 },(error)=>{
 console.log(error);
 }).then((result)=>{console.log(result)},(error)=>{console.log(error)});

/*    let p = Promise.resolve(12);
 p.then((result)=>{console.log(result)});*/


/**
 * 生成器
 */

/*function *hello(x){
    let y = x*(yield 'input yie');
    return y;
}
let generator = hello(5);
let first = generator.next();
let last = generator.next(10);
console.log(first, last);*/

function *foo() {
    var x = yield 2;
    z++;
    var y = yield (x * z);
    console.log( x, y, z );
}
let z = 1;
let generator = foo();
generator.next();   //value:2 ;
generator.next(3);   //x:3 value :6
generator.next(4);   //value:undefined y=4 x=3 z=2

/*
function *hello(x){
    var y= x*yield;
    return y;
}
let generator = hello(1);
hello.next();
*/

/*function* hello(x, y){
 var z= x+y;
 yield ;
 return z;
 }
 let generator = hello(1, 2);
 let value = generator.next();
 let nextValue =generator.next();
 console.log(nextValue);*/
/*
 function *hello(x, y){
 return x*y*(yield);
 }
 let generator = hello(2, 3);
 generator.next();
 console.log(generator.next(10));*/

/*function *hello(x, y){
 var z = x*y*(yield 'hello world');
 return z;
 }
 let generator = hello(6, 7);
 console.log(generator.next());
 console.log(generator.next(5));*/