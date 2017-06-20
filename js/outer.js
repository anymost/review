/**
 * Created by lenovo on 2017/2/23.
 */


function asyncReadFile (file) {
    return new Promise((resolve, reject)=>{
        fs.readFile(file,(err, data)=>{
           if(err){
               console.log(err);
               reject(err);
           }else {
                console.log(data);
               resolve(data);
           }
        });
    })
}

asyncReadFile('../css/test1.css').then(data=>{
    return asyncReadFile('../css/test2.css');
}).then(data=>{
    return asyncReadFile('../css/test3.css');
}).then(data=>{
});

/**
 *
 * promise 是一种对异步操作的封装，
 * 当异步操作执行成功或失败时，执行
 * 对应的方法
 *
 * promise有三种状态，pending,fulfilled,reject，
 * 只能从pending到其中的一种，并且不可逆
 *
 *  */

/***
 * es6 新特性
 * 1 let const 块级作用域
 * 2 箭头号维护上下文this
 * 3 模板字符串
 * 4 解构赋值
 * 5 模块系统
 * 6 默认参数
 * 7 类操作
 * 8 promise
 *
 *
 */

/*
var array = [1, 2, 3, 4];
var [a, b, c, d] = array;
console.log(a);*/


class Person {
    constructor (name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    sayName () {
        console.log(this.name);
    }
    sayAge () {
        console.log(this.age);
    }
    saySex () {
        console.log(this.sex);
    }
}

class Chinese extends Person{
    constructor (name, age, sex, country) {
        super(name, age, sex);
        this.country = country;
    }
    sayEverything () {
        console.log(super.name);
        console.log(this.country);
    }
}