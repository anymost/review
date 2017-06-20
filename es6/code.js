/**
 * Created by lenovo on 2017/5/11.
 */



/**
 * Created by lenovo on 2017/5/8.
 */

// console.log(typeof name);
// let name = 'jack';

// const obj = {
//     name : 'jack'
// }
// obj.name='ruby';


// let array = [1, 2, 3];
// let arrayOne = [0, ...array, 4];
// console.log(arrayOne);

// function hello(...args){
//     console.log(args);
// }
// hello(1, 2, 3);

// let array = [1, 2, 3, 4];
// let [a, ...b] = array;
// console.log(b);

/*function hello(x, y, z){
 console.log(x+y+z);
 }
 let array = [1, 2, 3];
 hello(...array);*/

/*let array = [1, 2, 3];
 function sayHello(x, y, z){
 console.log(x+y+z);
 }
 //sayHello.apply(this, array);
 sayHello(...array);*/
/*
 function hello(...args){
 //args 就是一个真正的数组 因此无需调用Array.prototype.slice方法来进行转化
 let sum = args.reduce((a, b)=>{
 return a+b;
 });
 console.log(sum);
 }
 hello(1,2,3,4,5,6);*/

//console.log(...[1, 2, 3, 4]);

/*
 function hello(x=0, y=1){
 console.log(x+y);
 }
 hello(y=2);*/
/*let a=1;
 function hello(x=a, y=1){
 console.log(x+y);
 }
 hello(y=2);*/
/*function hello(x=(function(m){return m;}(10)),y=1){
 console.log(x+y);
 }
 hello();*/


// function add (x=0, y=()=>6){
//     return x+y();
// }
// console.log(add(5, undefined));


/*let [a, b, c] = [1, 2, 3];
 console.log(a+b+c);*/

/*
 let object = {
 a : 'a',
 b : 'b',
 c : 'c'
 };

 let {a:c, b:b, c:a} = object;
 console.log(a+b+c);*/




/*
 let object = {
 a : 'im a',
 b : 'im b',
 c : 'im c'
 };
 let {a:am, b:bm ,c:cm} = object;
 console.log(am+bm+cm);*/
/*let a, b, c;
 ({a, b, c} = {
 a : 1,
 b : 2,
 c : 3
 });*/
/*let obj = {};
 let array = [1, 2, 3];
 let object = {a:1, b:2, c:3};
 //[obj.a, obj.b, obj.c] = array;
 ({a:obj.a, b:obj.b, c:obj.c} = object);
 console.log(obj);*/

/*let obj = {a:1, b:2, c:3};
 let array = [];
 ({a:array[1], b:array[2], c:array[0]}=obj);*/
/*
 let x=1, y=2;
 [x,y] = [y,x];
 console.log(x,y);*/
/*
 let a, b, c, d;
 let array = [1, 2, 3];
 d = [a, b, c] = array;
 console.log(d===array);*/


/*
 let array = [1, 2, 3, 4, 5, 6];
 let [,,c] = array;
 //let [a, b, ...c] = array;
 console.log(c);
 */

/*let array = [1, [2, 3, 4], [5, 6]];
 let [a, [b, c, d], [e, f]] = array;
 console.log(a,b,c,d,e,f);*/

/*

 let obj = {
 a : {
 b : [1, 2, 3]
 },
 c : {
 d : {
 e : 4
 }
 }
 };
 let {
 a : {
 b : [f, g, h]
 },
 c : {
 d : {
 e : i
 }
 }
 } = obj;

 console.log(f);*/

/*let obj1 = {
 foo () {
 console.log('father foo');
 }
 };
 let obj2 = {
 __proto__:obj1,
 foo () {
 super.foo();
 console.log('son foo');
 }
 };
 obj2.foo();*/


/*
 let x =1;
 let obj = {
 x
 };
 console.log(obj.x);*/
/*
 let obj = {
 hello () {
 console.log('hello world');
 }
 };
 obj.hello();*/

/*
 let obj1 = {
 doSomething : function (x, y){
 if(x>y){
 return obj1.doSomething(y, x);
 }
 return x-y;
 }
 };
 let obj2 = {
 doSomething : function doSomething (x, y){    //这种方式如果在doSomething中访问
 //访问doSomething使，无需显示的声明一个context
 if(x>y){
 return doSomething(y, x);
 }
 return x-y;
 }
 };
 let obj = {    //这种与第一种方法类似
 doSomething (x, y){
 if(x>y){
 return obj.doSomething(y, x);
 }
 return x-y;
 }
 };
 obj == obj1*/


/*
 let a = 'key';
 let obj  = {
 [a] : 1
 };
 console.log(obj.key);*/


/*let value = 'hello world';
console.log(`I am ${value}`);*/
/*
console.log(`
hello 
world
I
am your father
`);*/
/*
function  getName(person) {
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName : 'jack',
    lastName : 'python'
};
console.log(`I am a person,my name is ${getName(person)}`);*/
/*console.log('hello who\`s my name');*/
/*let sayHello = x=>{
    console.log(`hello world ${x}`);
};
sayHello('my dear');*/

/*
let getName = x=>`${x.firstName}-${x.lastName}`;
let person = {
    firstName : 'jack',
    lastName : 'rose'
};
console.log(getName(person));*/
/*
function foo () {
    console.log('global foo');
}


let obj = {
    foo () {
      console.log('obj.foo')
    },

    sayHelper : ()=>{
        this.foo();
    }
};
obj.sayHelper();*/
/*
function hello(x, y) {
    return x+y;
}
let say = hello.bind(this, 1, 2);
console.log(say());*/
/*

function hello(x, y){
    let sayName = ()=>{
        console.log(arguments);
    };
    sayName();
}
hello(1, 2);*/

/*
let array = [1, 2, 3, 4];
for(let item of array){
    console.log(item);
}*/

/*
let obj = {
    name : 'jack',
    age : 11,
    country : 'China',
    sex : 'male'
};
for(let item of obj){
    console.log(item);
}
*/
/*
let name = Symbol('hello world');
console.log(typeof name);*/
/*
let array = [1, 2, 3, 4, 5];
let ret ;
for(let it = array[Symbol.iterator];(ret=it.next()&&!ret.done);){
    console.log(ret.value);
}*/
/*
class ParentA {
    constructor () {
        this.id = 'a';
    }
    foo () {
        console.log(this.id);
    }
}
class ParentB {
    constructor () {
        this.id = 'b';
    }
    foo () {
        console.log(this.id);
    }
}
class ChildA extends ParentA{
    foo () {
        super.foo();
    }
}
class ChildB extends ParentB{
    foo () {
        super.foo();
    }
}

let a = new ChildA();
let b = new ChildB();
a.foo.call(b);
b.foo();*/

/*
class ArrayExtend extends Array{
    getFirst () {
        return this[0];
    }
    getLast () {
        return this[this.length-1];
    }
}

let array = new ArrayExtend(1, 2, 3, 4);
console.log(array.getFirst());*/
/*class ExtendObject extends Object{
    getOwnProperty () {
        let property = [];
        for(let key in this){
            if(this.hasOwnProperty(key)){
                property.push(key);
            }
        }
        return property;
    }
}
let obj = new ExtendObject();
obj['name'] = 'jack';
obj['age'] = 'ruby';
console.log(obj.getOwnProperty());*/

/*
class Foo {
    static cool () {
        console.log('cool');
    }
    awesome () {
        console.log('awesome');
    }
}
let foo = new Foo();
Foo.cool();
class Bar extends  Foo{
}
let bar = new Bar();
bar.awesome();
*/
/*

function *gen () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
    yield 9;

}
let it = gen();
for (let item of it){
    console.log(item);
}*/
/*for(var i=0;i<10;i++){
    console.log(i);
}*/
/*let array = [1, 2, 3, 4];
let [a, b, c] = array;
console.log(a,b,c);*/

/*let promiseOne = new Promise((resolve, reject) => {
    resolve('promise one');
});
let promiseTwo = new Promise((resolve, reject) => {
   resolve('promise two');
});
function *hello () {
    yield promiseOne;
    yield promiseTwo;
}
let it = hello();
let value = it.next().value;
value.then(result=>{
    console.log(result);
    let secondValue = it.next().value;
    secondValue.then(result => {
        console.log(result);
    })
});*/

/*
let promiseOne = new Promise((resolve, reject) => {
    resolve('promise one');
});
let promiseTwo = new Promise((resolve, reject) => {
    resolve('promise two');
});
function *hello () {
    yield promiseOne;
    yield promiseTwo;
}

function run (generator){
    let ret = generator.next();
    if(ret.done){
        return;
    }
    ret.value.then((res)=>{
        console.log(res);
        run(generator)
    })
}
let it = hello();
run(it);*/

let promiseOne = new Promise((resolve, reject) => {
   reject('promise one');
});
let promiseTwo = new Promise((resolve, reject) => {
    resolve('promise two');
});
function *hello () {
    try {
        yield promiseOne;
        yield promiseTwo;
        console.log('generator end');
    }catch(e){
        console.log(e);
    }
}
function run(generator){
    let ret = generator.next();
    if(ret.done){
        return;
    }
    ret.value.then((res)=>{
       console.log(res);
       run(generator);
    }, (err)=>{
        generator.throw(err);
    });

}
run(hello());