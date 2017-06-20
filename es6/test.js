function print(value){
    console.log(value);
}

// console.log(typeof name);
// let name = 'jack';

// const obj = {
//     name : 'jack'
// }
// obj.name = 'ruby';
// console.log(obj.name);


// let array = [2, 3, 4];
// let arrayAll = [0, 1, ...array, 5, 6];
// print(arrayAll);

// function add (...args){
//     return args.reduce((itemA, itemB)=>itemA+itemB);
// }
// print(add(1, 2, 3, 4));

// let [a, ...b] = [1, 2, 3, 4];
// print(b);

// function add(x=0, y=0){
//     return x+y;
// }
// print(add(1,2));

// let obj = {
//     a : 1,
//     b : 2
// }
// let {
//     a : c,
//     b : d
// } = obj;
// print(`${c}--${d}`);

// let array = [1, 2, 3], a, b, c;
//  [a, b, c] = array;
// print(`${a}-${b}-${c}`);

// let obj = {a:1, b:2}, a, b;
// ({a, b} = obj);
// print(a);


// function add ([a,b]){
//     return a+b;
// }
// print(add([1,2]));

// let proto = {
//     age : 11
// };

// let a =1;
// let b= 2;
// let obj = {
//     a, //简约属性
//     [a+b] : ()=>{   //计算属性
//         print(`${a}+${b}`);
//     },
//     sayHello (){   //简约方法
//         print('hello');
//     },
//     __proto__ : proto
// }
// obj[a+b]();
// obj.sayHello();
// print(obj.age);

// let a =1, b = 2;
// let exp = 
// `${a+b}`;
// print(exp);

// let obj = {
//     array : [1, 2, 3, 4, 5],
//     add : function () {
//         let add = () =>{
//             return this.array.reduce((itemA, itemB)=>itemA+itemB);
//         }
//         print(add());
//     }
// }
// obj.add();

// for(let item of [1, 2, 3, 4, 5]){
//     print(item);
// }
// function *gen(){
//     let start = 0;
//     while(start<100){
//         yield start++;
//     }
// }
// let it = gen();
// for(let item of it){
//     print(item);
// }


class Person {
     constructor (name){
        this.name = name;
     }
     sayName () {
         print(this.name);
     }
     static sayID () {
         print(Person.ID);
     }
}

class Chinese extends Person {
    constructor (name, country){
        super(name);
        this.country = country;
    }
    sayCountry () {
        super.sayName();
        print(this.country);
    }
}

let chinese = new Chinese('jack', 'China');
chinese.sayCountry();


