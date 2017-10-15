/*

 generator+promise+co

 let promiseOne = new Promise((resolve, reject)=>{
 setTimeout(()=>{
 resolve('resolve promise one');
 }, 2000);
 });
 let promiseTwo = new Promise((resolve, reject)=>{
 setTimeout(()=>{
 reject('two error');
 }, 2000);
 });

 function *gen (){
 try {
 yield promiseOne;
 yield promiseTwo;
 }catch (e){
 console.log(e);
 }
 }


 function co(iterator){
 let {done, value} = iterator.next();
 if(!done){
 value.then((value)=>{
 console.log(value);
 co(iterator);
 }, (error)=>{
 iterator.throw(error);
 });

 }
 }
 let it = gen();
 co(it);
 */
/*
 let fs = require('fs');
 function readFile (fileName){
 return new Promise((resolve, reject)=>{
 fs.readFile(fileName,(err, data)=>{
 if(err){
 reject(err);
 }else{
 resolve(data);
 }

 }) ;
 });
 }



 async function handleFile (){
 let fileOne = await readFile('./fileOne.js');
 let valueOne = await {name : 'jack'};
 let fileTwo = await readFile('./fileTwo.js');
 console.log(fileOne.toString());
 console.log(valueOne);
 console.log(fileTwo.toString());
 }

 handleFile();*/
/*

let fs = require('fs');
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


async function handleFile() {
    try {
        let fileOne = await readFile('./fileOne.js');
        let fileTwo = await readFile('./fileThree.js'); //使用try-catch捕获异常
        console.log(fileOne.toString());
        console.log(fileTwo.toString());

    }catch(e){
        console.log(e);
    }
}
handleFile();*/


let fs = require('fs');
function readFile (fileName){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName,(err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }

        }) ;
    });
}



async function handleFile (){
    let files = ['./fileOne.js', './fileTwo.js'];
    let promises = files.map((file)=>readFile(file));   //处理多个promise并发
    let result = await Promise.all(promises);
    console.log(result.toString());
}

handleFile();



async function hello(){
    try{
        let result = await new Promise((resolve, reject)=>{
            setTimeout(()=>{resolve('first value')},1000);
        })
        console.log(result);
        let nextResult = await Promise.resolve(`${result} second value`);
        console.log(nextResult);
        let lastResult = await Promise.resolve(`${nextResult} last value`);
        console.log(lastResult);
        return lastResult;   /**
         * 这里类似promise的链式调用的处理方式
         * 如果返回的值是value，就会使用Promise.resolve将其包装成Promise对象
         * 如果是Promise类型的，则直接返回该值
         *
         * 这里返回的本来是一个string，async会将其包装成Promise
         */
    }catch(e){
        console.log(e);
    }
}
let me = hello();
me.then((value)=>{
    console.log(value);
})


