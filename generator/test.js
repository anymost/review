/**
 * Created by lenovo on 2017/5/7.
 */

/*
function *ge(){
    var y = 10 * (yield);
    return y;
}
let it = ge();
it.next();
let result = it.next(20);
console.log(result);
*/


/*function *gen(){
    let  a = 10 * (yield 10)  //a=100
    let c = a * (yield 20)   //c=2000
    let d = c * (yield 30)   //d=60000
    return d;
}
let it = gen();
console.log(it.next().value); //10
console.log(it.next(10).value);  //20
console.log(it.next(20).value);   //30
console.log(it.next(30).value);   //*/
/*
let gen = (function(){
    let lastValue ;
    return {
        [Symbol.iterator]: function (){
            return this;
        },
        next : function () {
            if(lastValue === undefined){
                lastValue = 1;
            }else{
                lastValue = lastValue * 2;
            }
            return {done : false, value : lastValue}
        }
    }
}());*/
/*
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());*/
/*

for(let val of gen){
    if(val>1000){
        break;
    }
    console.log(val);
}*/

/*
function *gene () {
    let lastValue;
    while (true){
        if(!lastValue){
            lastValue = 1;
        }else{
            lastValue += 2;
        }
        yield lastValue;
    }

}
let gen = gene();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);*/

/**
 * 生成器生成一系列的值，通过调用生成器获取一个迭代器
 * 可以使用next的方式，也可以通过for of的方式
 * 来从这个迭代器中获取值
 * 通过生成器来实现闭包保存变量的特性，并且能够满足while（true）的特性
 *
 */

/*function *gen () {
    let a =1;
    yield a++;
    yield a++;
    yield a++;
    yield a++;
    yield a++;
    yield a++;
    yield a++;
    yield a++;
    yield a++;

}
let it = gen();*/
/*for(let value of it){
    console.log(value);
}*/
/*
function foo(x, y){
    setTimeout(()=>{
        it.throw('error')
        it.next(x+y);
    },3000);
}


function  *main() {
    try {
        var z = yield foo(2, 3);
        console.log(z);
    }catch(e){
        console.log(e);
    }
}
let it = main();
it.next();*/

/**
 * 使用generator+promise 在generator中 yield一个Promise对象 该promise对象内部执行异步
 * 操作 成功后调用generator的next传入获取的值
 */
/*

function  foo(x, y){
    return new Promise(function (resolve, reject){
        setTimeout(()=>{
            resolve(x+y);
        })
    })
}

function *main(){
    try{
        let value = yield foo(2, 3);
        console.log(value);
    }catch(e){
        console.log(e);
    }
}

let it = main(10, 20);
let promise = it.next().value;
promise.then((data)=>{
    it.next(data);
}, (error)=>{
    it.throw(error);
});*/
/*

function foo(){
    return new Promise((resolve, reject)=>{
        resolve('hello world');
    })
}
async function main(){
    try{
        let value = await foo();
        console.log(value);
    }catch (e){
        console.log(e);
    }
}
*/
/*function foo1(){
    return new Promise((resolve)=>{
        resolve('foo one value');
    })
}
function foo2(){
    return new Promise((resolve)=>{
        resolve('foo two value');
    })
}
function foo3(value1, value2){
    return new Promise((resolve)=>{
        resolve (value1 + ' ' + value2 + ' ' + 'foo three value');
    })
}*/

/*
function *main(){
    try {
        let value1 = yield foo1();
        let value2 = yield foo2();
        let value3 = yield foo3(value1 + value2);
        console.log(value3);
    }catch(e) {
        console.log(e);
    }
}
let it = main();
let promiseOne = it.next();
promiseOne.then((data)=>{
    it.next(data).then
});*/
/*
function *main(){
    try {
        let result = yield Promise.all([foo1(), foo2()]);
        let [value1, value2] = result;
        let value = yield foo3(value1, value2);
        console.log(value);
    }catch(e){
        console.log(e);
    }
}*/


async function gen (){
    try{
     
        let promise =await Promise.all([Promise.resolve('one'), Promise.resolve('two'),
            Promise.resolve('three'),Promise.resolve('four')
            ]);
        return promise;
    }catch(e){
        return e;
    }
}
console.log(gen().then(value=>{console.log(value)}));


