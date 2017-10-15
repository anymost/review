
 /**
 * Created by lenovo on 2017/3/14.
 */
/*

 interface Person{
 age : string,
 age : number,
 address : string
 }

 function getInformation(person: Person){
 console.log(person.age);
 }
 getInformation({age:'jack', age:11, address:'china'});*/


/*
 class Person{
 age : string;
 constructor(public firstName : string, son : string){
 this.age = firstName + son;
 }
 sayName(){
 console.log(this.age);
 }

 }
 interface Student{
 std : Person
 }

 function Father(student: Student){
 student.std.sayName();
 }
 Father({std:new Person('jack','rose')});
 */

/*
 for(let start:number=0;start<10;start++){
 console.log(start);
 }
 */

/*

 let age:string = 'jack';

 console.log(`my name is ${age},hahaha`);*/

/*
 interface Person{
 name: string,
 age : number
 }

 let persons: Array<Person> = [{name:'jack',age:11}] ;*/

/**
 * 元组：已知元素类型和数量的数组
 */

/*let country:[string, number] = ['hello', 11];*/

/*
 enum Color{
 Red,
 Yellow,
 Green
 }

 let myColor:string = Color[0];*/
/**
 * any类型可以赋任何值，与object不同的是，object不可以调用任意方法，any可以调用任意方法
 */

/*function getName(name : string):number{
 console.log('hello');
 return 1;
 }*/

// function sayName():never{
//     throw new Error('hello');
// }

/*let myName:any = 'hello world';
 let len:number = (myName as string).length;*/

/*
 let sex:void = undefined;*/

/*function sayName():void{
 return null;
 }*/

/*for(let i = 0 ; i<10 ; i++) {
 setTimeout(function () {
 console.log(i);
 },1000)
 }*/


/*
 function sumMatrix(matrix: number[][]) {
 var sum = 0;
 for (var i = 0; i < matrix.length; i++) {
 var currentRow = matrix[i];
 for (var i = 0; i < currentRow.length; i++) {
 sum += currentRow[i];
 }
 }

 return sum;
 }*/


/*function sayHello(){
 let a =1;
 f();
 a=2;
 function f () {
 console.log(a);
 }
 }
 sayHello();*/
/*
function sayHello(flag: boolean) {
    let a = 1;
    if (flag) {
        let b = a + 1;
        return b;
    }
    return b;
}*/
/**
 * 块级作用域 只能在代码块中存在，并且在变量定义之间不能对其进行调用
 */
/*
function main(){
    let e=1;

}
main();*/

/*
let array: Array<number> = [1,2,3];
let [first, second] = array;
console.log(first);*/
/*
let array:[number, number] = [1, 2];
function printArray([first, second]:[number, number]){
    console.log(first+' '+second);
}

printArray(array);*/

//
// let person = {
//     name : 'jack',
//     age : 11
// };
// let {name:firstName, age:age} = person;
// enum Sex{
//     MALE,
//     FEMALE
// }
//
// interface Person{
//     name : string;
//     age : number;
//     sex : Sex
// }
// interface Chinese extends Person{
//     country : string;
// }
//
// function printPerson(person:Person){
//     console.log(`${person.name}  ${person.age} ${person.sex}`)
// }
// let person:Person = {
//     name : 'jack',
//     age : 11,
//     sex : Sex.MALE
// };

// printPerson(person);
//
// let chineseMan:Chinese = {
//     name : 'ruby',
//     age : 22,
//     sex : Sex.MALE,
//     country : 'China'
// }

/*
interface Fish {
    swim();
    legs : boolean;
}
let fish : Fish = {
    legs : false,
    swim (){
        console.log(`can swim`);
    }
}*/
/*

let array:Array<number> = [1, 2, 3];
for(let value of array){
    console.log(value);
}
function *gen(){
    yield Promise.resolve('hello');
}*/

// function say<T>(name : T) : T{
//     return T;
// }
// console.log(say('hello'));
// interface Name{
//     firstName : string;
//     lastName : string;
// }
//
//
// class Person{
//     name : Name;
//     age : number;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayName (){
//         console.log(this.name);
//     }
//     sayAge (){
//         console.log(this.age);
//     }
// }
// let person = new Person({firstName : 'jack', lastName : 'silly'}, 22);
// person.sayName();
// person.sayAge();

// class Person{
//     fullName: string;
//     constructor(public firstName, public lastName) {
//         this.fullName = firstName + lastName
//     }
// }
// let person = new Person('hello', 'world');
// console.log(person.firstName)
// enum Color{RED, GREEN, BLACK}
// function hello(color: Color) {
//
// }
// hello(Color.BLACK)
// let item: any;
// item = 1;

// function sayName(name: string) {
//     console.log(name);
// }
// sayName('hello');
// let persons: Array<any> = [];
// persons.push('hello');


// let personName: any = 'string';
// console.log((<string>personName).length)

// let one = 1;
// let two = 2;
// ([one, two] = [two, one])

// interface Person{
//     name: string
// }
// function sayName(person: Person){
//     console.log(person.name);
// }
// sayName({name:'hello'});
// interface Person{
//     name?: string
//     age?: number
// }
// function sayName(person: Person){
//     console.log(person.name);
// }
// sayName({name:'hello'});


// interface Person{
//     readonly name: string
//     readonly age: number
// }
// let person: Person = {name: 'jack', age: 1};
// person.name = 2;

// let array: ReadonlyArray<number> = [1, 2, 3, 4];
// array[1] = 2;

// interface myFunc{
//     (name: string, age: number): string
// }
// let func : myFunc;
// func = function() {
//     return 'hello'
// }
// func('h', 1)

// interface name{
//     [index: number]: string
// }
// let myName: name;
// myName = 'hello'
// interface  myDict{
//     [index: string]: string
// }
// let dic:  myDict;
// dic = {1: 'hello'}

// interface PersonInterface{
//     name: string;
//     sayName();
// }
// class Person implements PersonInterface{
//     name: string;
//     sayName() {
//         this.name = 'jack';
//         console.log(this.name);
//     }
// }
// let person = new Person();

// interface myInterface{
//     getName();
// }
// interface myConstructor{
//     new (name: string, age: number): myInterface
// }
// class myClass implements myInterface{
//     constructor(name: string, age: number) {

//     }
//     getName() {

//     }
// }
// interface ShapeOne{
//     name: string
// }

// class Father{
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class Son extends Father{
//     constructor(name) {
//         super(name);
//     }
//     sayName() {
//         console.log(this.name);
//     }
// }
// class Father{
//     constructor(public name: string) {}
// }
// let father = new Father('jack');
// console.log(father.name);
// class Father{

//     constructor(private _name:string) {}
//     get name() {
//         return this._name;
//     }
//     set name(name: string) {
//         this._name = name;
//     }
// }
// let father = new Father('jack');
// console.log(father.name);
// abstract class Father{
//     constructor(protected name: string) {}
//     abstract sayName():void;
// }
// class Son extends Father{
//     constructor(name:string) {
//         super(name);
//     }
//     sayName(){
//         console.log(this.name);
//     }
// }

// interface myFunc{
//     (name: string, age: number):void;
// }

// let hello : myFunc;
// hello = function (name: string, age: number) {

// }
// let myFunc: (name: string, age: number)=>number=function(name:string, age:number){
//     return age;
// }
// function add(x: number, y: number, z?: number):number {
//     return z ? x + y + z: x + y;
// }
// add(1, 2);

// let addFunc: (arg1: number, arg2: number)=>number=function (arg1:number, arg2: number){
//     return arg1 + arg2;
// }
// addFunc(1, 2);

// function hello(arg1: string, ...args: Array<string>) {
//     let start = '';
//     for (let item of args) {
//         start += item;
//     }
//     return arg1 + start;
// }
// console.log('hello', 'world', 'check');

// let obj = {
//     name: 'jack',
//     sayName() {
//         return function () {
//             console.log(this.name);
//         }
//     }
// }
// let sayName = obj.sayName();
// sayName();

// interface Obj{
//     name: string,
//     sayName(this: Obj);
// }
// let obj: Obj = {
//     name: 'string',
//     sayName(){

//     }
// }
// function sayHello<T>(...arg: Array<T>):T {
//     console.log(arg.length);
//     return arg[0];
// }
// sayHello('hello', 'world');

// interface myInter {
//     <T>(args: T):T;
// }
// function
// class Person<T> {
//     name: T;
//     sayName:(ok:T)=>T
// }
// class MainPerson{
//     name: string;
//     sayName:(ok:string)=>string
// }
// let hello: Person<string> = MainPerson;

 // function sayHello<T>(name: T):T{
 //     return name;
 // }
 // sayHello(1);
//  interface myFunc{
//      <T>(name: T):T;
//  }
//
//  let sayGood:myFunc =  <T>(name:T):T=>{
//      return name;
//  };
// sayGood('hello');
//  interface hassLength{
//      length: number
//  }
//  function getLength<T extends hassLength>(array: Array<T>):T{
//      console.log(array.length);
//      return array[0];
//  }
//  for (let item of [1, 2, 3, 4, 5]) {
//      console.log(item);
//  }
//  interface Person{
//      name: string
//  }
//  function sayHello(person: Person) {
//      console.log(person.name);
//  }
//
//  interface printHello{
//      (name: string, age: number):string
//  }
//
//  let myFunc:printHello = function (name: string, age: number) {
//      return `${name} ${age}`;
//  };
//  myFunc('hello', 11);
//  interface PersonClass{
//      name: string;
//      sayName:()=>string;
//  }
//
//  class Person implements PersonClass{
//      name = 'hello';
//      sayName() {
//          return this.name;
//      }
//  }

 // class Person{
 //     constructor(private name){}
 //     public sayName(){
 //         console.log(this.name);
 //     }
 // }
 // let person = new Person('hello world');
 // person.sayName();

 // let func : (name: string)=>string = function(name) {
 //     return name;
 // } ;
 // namespace  typeOne {
 //     export interface hasLength {
 //         length: number;
 //     }
 //
 //     function printLength<T extends hasLength>(arg: T) {
 //         console.log(arg.length);
 //     }
 //
 //     printLength([1, 2, 3]);
 // }
 // let checkName:typeOne.hasLength = {
 //     length: 10
 // };

 /// <reference path="index.ts" />
 /// <reference path="person.ts"/>
 // namespace Good{
 //     export const name = 'jack';
 // }
 // import myName = Good.name;
 // console.log(Person.name);

 // interface Person{
 //     name?: string
 // }
 // let person:Person={}

 // interface Person{
 //     name?: string;
 //     age?: number
 // }
 //
 // function sayName(person: Person) {
 //
 // }
 // let js: Person = {
 //     age: 11,
 //     Name: 'hello'
 // } as Person;
 // sayName({age:1, Name: 'hello'} as Person)

 // interface Func{
 //     (name: string, age: number): string
 // }
 // let func: Func = function (name: string, age: number) {
 //     return ''
 // };
// class Father {
//
// }
// class Son extends Father{
//
// }
//
//  interface myFunc{
//      [index: number]: Son;
//      [index: string]: Father;
//  }
//
//  interface Func{
//     [index: number]: string;
//     number: number
//  }

 // interface MyClass{
 //     name: string;
 //     sayName(age: number):string;
 // }
 // class Person implements MyClass{
 //     name: string;
 //     sayName() {
 //         return this.name;
 //     }
 //     constructor(name) {
 //         this.name = name;
 //     }
 // }
 // let person = new Person('hello');
 // person.sayName();

 //
 // interface PersonConstructor{
 //     new(name: string, age: number): PersonInterface;
 // }
 // interface PersonInterface{
 //     sayName();
 //     sayAge();
 // }
 //
 // class personImplementOne implements PersonInterface{
 //     constructor (name: string, age: number){}
 //     sayName() {}
 //     sayAge() {}
 // }
 //
 // let constructor: PersonConstructor = personImplementOne;
 // let instance: PersonInterface = new personImplementOne('hello', 1);
 // class Person{
 //     constructor(public name: string, protected age: number, private phone: number){}
 // }
 //
 // class Chinese extends Person{
 //     constructor(name: string, age: number, phone: number, private country: string){
 //         super(name, age, phone);
 //
 //     }
 // }
// class Person {
//     constructor(private _name: string){}
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name;
//     }
// }
// let person = new Person('hello');
// person.name;


// let sayName: (name: string)=>string= function sayName(name: string):string {
//     return '';
// };
//  function sayName(name: string, ...args: Array<string>) {
//      console.log(args);
//  }
//  sayName('hello', 'world', 'hello');

 // function sayName<T> (name: T): T {
 //     return name;
 // }
 //
 // class Hello<T> {
 //   name: T;
 //   sayName:()=>T;
 // }
 
//  interface Person{
//      <T>(name: T):T
//  }

//  let person: Person = function <T>(name: T):T{
//      return name;
//  }
// interface Person{
//     <T>(name:T):T
// }
// let person:Person = function<T>(name: T): T{
//     return name;
// }

// class Mini<T> {
//     age: T;
//     sayAge: ()=>T;
// }
// let mini = new Mini();
// mini.age = 11;
// mini.sayAge = function () {
//     return 12;
// }
// class Animal {

// }
// class Lion extends Animal{

// }

// class Tiger extends Animal{

// }
// let tiger = new Tiger();
// let lion = new Lion();
// let animals: Animal[]= [1, 3];


// function sealed(constructor: Function){
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }


// @sealed
// class Person{
//     constructor(){

//     }
// }

// namespace person{
//     export let name = 'jack';
// }

// console.log(person.name);
/// <reference path="index.ts"/>
///<reference path="person.ts"/>

console.log(Person.name);