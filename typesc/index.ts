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


let person = {
    name : 'jack',
    age : 11
};
let {name:firstName, age:age} = person;