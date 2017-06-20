/**
 * 1 声明并赋值一个变量的两个阶段
 *   LHS和RHS出现的情景
 *   LHS和RHS查找失败的结果
 *
 * 2 词法作用域的定义
 *   词法作用域嵌套和查找 只会查找一级标识符
 *   欺骗词法作用域(eval with)
 *
 * 3 函数作用域的作用
 *   函数作用域的缺陷
 *   函数声明和函数表达式的区分和区别
 *   匿名函数表达式的优点和缺点
 *   立即执行函数表达式
 *
 * 4 块级作用域
 * with try-catch let const
 * 不存在声明提升
 *
 * 5 声明提升(仅会出现(变量或函数)声明的提升 不会出现赋值的提升)
 *  var a = 2;
 *  var a;声明   编译阶段
 *  a =2 ;赋值 执行阶段
 *
 *  函数优先 当函数和变量都发生声明提升时，函数优先
 *
 *
 * 6 闭包： 函数在定义时的词法作用域外的地方被调用 还能继续访问定义时的词法作用域
 *   类似定时器和事件处理函数，回调函数，他们也是闭包，因为调用的地方不是定义时的词法作用域
 * function foo(){
 *      var b = 1;
 *      function bar(){
 *          console.log(b);
 *      }
 *      return bar;
 * }
 * var bar = foo();
 * 在这个函数中，foo在调用后，通常应该被GC回收掉，但是
 * 这里却不会，因为bar需要访问foo定义的作用域，所以bar会
 * 保持对foo这个作用域的引用，以便在调用时访问
 *

 *
 *
 *
 *
 * */


/**
 * 发生这种情况的原因是，我们认为每次循环函数中都会保存
 * 一个i的副本，但是在作用域中，实际上只存在一个i，
 * 这些函数都共享同一个全局作用域中的i，所以我们使用闭包，
 * 为每一个函数单独创建一个作用域，然后将i传递进入，这样
 * 每个函数都在自己的作用域中有一个单独的i会覆盖掉全局作用域
 * 中的i
 * let也是同理的，它会为每一个函数单独创建一个单独的块级作用域
 */



/**
 *
 * 闭包的作用：模拟块级作用域，创建模块
 *
 * 模块的定义：1 需要外部的封闭函数，并且至少调用一次
 *          2  外部封闭函数返回一个内部的函数，这样才会形成闭包
 */


/*
function foo() {
    var b = 1;

    function bar() {
        console.log(b);
    }

    return bar;
}
var bar = foo();
bar();*/

/*hello();
 var hello = 1;
 function hello () {
 console.log('hello ')
 }*/
/*function foo() {
 'use strict'
 console.log(hello);

 var hello;
 }
 foo();*/

/*function foo (){
 var a = 1;
 (function (){
 a = 2;
 })();
 console.log(a);

 }
 foo();*/
/*let obj = {
 a : 2
 };
 function foo () {
 var a = 1;
 with (obj) {
 a = 3;
 var c = 1;
 console.log(`inner ${c}`);
 }
 console.log(`outer ${c}`);
 }
 foo();
 console.log(obj.a);*/


/*
 (function hello() {
 console.log('hello world');
 }())
 hello();
 */





/*for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);
}*/

/*for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}*/

/*var obj = {
    a : 1,
    addB : function (){
        this.b = 2;
    }
};
obj.addB();
console.log(obj.b);
console.log(b);*/




/**
 * 7 this
 *
 *  this是函数调用时绑定的，而不是定义时绑定的
 *
 *  调用栈和调用位置
 *
 *  this的四条绑定规则
 *   1 默认绑定 直接调用该函数 this为window 非严格模式下 严格模式下为undefined
 *   2 隐式绑定 一个对象的方法被执行 这个方法中的this指向该对象
 *   3 显示绑定 call apply
 *     如果传入到call和apply中的第一个参数为非对象的形式，那么就会发生装箱
 *
 *   4 new绑定 调用构造函数时，this指向的是新创建的实例
 *
 *   绑定中存在的问题： 绑定丢失
 *      如果将一个对象的方法赋值给一个变量，或者将一个对象的方法作为一个函数
 *      的参数传入到一个函数中执行，则会回退到默认绑定规则
 *   解决方案：硬绑定
 *
 *   绑定的优先级：
 *    new绑定 > 显式绑定 > 隐式绑定 > 默认绑定
 *
 *   被忽略的绑定
 *   将null或者undefined传入到call和apply中，这个时候会被忽略掉，使用默认绑定规则
 *   更好地方式传入一个空的对象
 *
 *   箭头函数：不使用this的4种绑定规则，而是根据外层的作用域来决定this
 *
 *
 *
 *
 *
 *
 */

/*function foo () {
    var bar = ()=>{
        console.log(this.name);
    }
    bar ();
}
foo.call({
    name : 'ruby'
});*/

/* 硬绑定
 function foo(message){
 return message + ' ' + this.name;
 }
 let obj = {
 name : "jack"
 };
 function bar(message){
 "use strict";
 console.log(foo.call(obj, message));
 }
 bar.call(1,  'hello');
 */


/*var name = 'john';
 function sayName (){
 console.log(this.name);
 }
 var obj = {
 name : 'jack',
 sayName : sayName
 };
 var obj2 = {
 name : 'jones'
 };
 (obj2.sayName = obj.sayName)();*/

/**
 * 8 对象
 * 对于基本类型和非基本类型，使用typeof和instanceof的区别
 * 属性访问和键访问 var key='jack'; obj.key === obj['key'] obj[key] === obj['jack']
 * 函数和方法并没有区别 方法不属于对象 仅仅是绑定的this
 * 浅复制 Object.assign({},oldObj);
 * Object.getOwnPropertyDescriptor Object.defineProperty
 * 对象属性的[[Get]]和[[Put]]操作
 * 对象的常量属性的设定 两种
 * 存在性 in hasOwnProperty propertyIsEnumerable
 * for in Object.keys() Object.getOwnPropertyNames()
 *
 *
 */
/*
let obj = {
    name : "jack"
}
Object.defineProperty(obj, 'age', {
    value : 11,
    enumerable : true,
    writable : false,
    configurable : false
})
obj.age = 2;
console.log(obj.age);*/

/*

 var obj = {
 key :'key',
 jack : 'jack'
 };
 var key = 'jack';
 console.log(obj.key);
 console.log(obj[key]);*/



/*
 function Roop(tyreName){
 this.tyreName = tyreName;
 }
 function Car(carName){
 Roop.call(thi)
 }*/

/***
 * 9 原型
 * 原型是构造函数的属性，指向一个对象，原型链的终点 Object.prototype => null
 * 实例和构造函数获取prototype和constructor的方式  __proto__
 * 实例的constructor和__proto__是通过prototype来索引的
 *
 * 向一个对象上添加属性的，该对象上不存在这个属性，则会发生四种情况：
 * 1 原型上没有这个属性，那么在该对象自身添加该属性
 * 2 原型上有这个属性，且不是只读的，那么会在该对象自身添加该属性
 * 3 原型上有这个属性，且为只读的，那么无法添加该属性
 * 4 如果原型上有这个属性，且存在setter，那么会修改原型上的属性值
 * 可以使用Object.defineProperty来处理第三四种情况
 *
 * 实例化时并不会进行复制，各个实例与构造函数的prototype创建关联，但这是间接的
 * 直接创建关联的是Object.create()
 *
 * 标准的原型继承
 *  function Father(name){
        this.name = name;
    }
 Father.prototype.sayName = function () {
        console.log(this.name);
    };
 function Son(name, age){
        Father.call(this,name);
        this.age = age;
    }
 Son.prototype = Object.create(Father.prototype);

 此处一定要注意，不能直接为son.prototype = Father.prototype ,因为这样是直接引用
 Father.prototype这样可能会修改Father.prototype
 也不能为Son.prototype = new Father()；因为这样会直接调用Father的构造函数
 会带来一定的副作用，
 所以最好的方案是赋值为Object.create(Father.prototype)

 Son.prototype.constructor = Son;
 Son.prototype.sayAge = function () {
        console.log(this.age);
    };
 *
 * instanceof 左侧为一个对象 右侧为一个函数 检查该对象的原型链中是否存在该函数对应的prototype属性
 * isPrototypeOf 左侧为一个对象 右侧为一个对象 判断右侧对象的原型链中是否存在着左侧对象
 *
 *
 *
 */

/*
function Hello (name){
    this.name = name;
}
Hello.prototype.sayName = function () {
    console.log(this.name);
};
let person = new Hello();
console.log(Hello.prototype);
console.log(Hello.constructor);
console.log(person.constructor);
console.log(person.constructor.prototype);
console.log(person.__proto__);*/


function Father (name){
    this.name = name;
}
Father.prototype.sayName = function (){
   console.log(this.name);
};
function Son (name, age) {
    Father.call(this, name);
    this.age = age;
}
Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;
Son.prototype.sayAge = function () {
    console.log(this.age);
};
let son = new Son('jack', 12);
son.sayName();
son.sayAge();


/*
 let array = [1, 2, 3, 4];
 let obj = Object.create(array);
 console.log(obj[1]);
 obj => array => Array.prototype =>Object.prototype=>null
 */
/*function Foo(name){
 this.name = name;
 }

 Foo.prototype.sayName = function () {
 console.log(this.name);
 };
 var obj = new Foo('jack');

 console.log(obj.constructor === Foo.prototype.constructor);
 console.log(Object.getPrototypeOf(obj) === Foo.prototype);
 console.log(obj.sayName === Foo.prototype.sayName);*/

/*
 function Father(name){
 this.name = name;
 }
 Father.prototype.sayName = function () {
 console.log(this.name);
 };
 let son = new Father('jack');
 console.log(son.__proto__ == Father.prototype);*/

/*
 var anotherObject = {
 cool: function() {
 console.log( "cool!" );
 }
 };
 var myObject = Object.create( anotherObject );
 console.log(anotherObject.__proto__ == Object.prototype);*/
/**
 * 10 行为委托  var a={name:'jack'}  var b=Object.create(a);
 * 原型链就是对象之间的关联关系 链接的方式 对象之间的关系
 * 行为委托的一些特点：
 * 1 通常将状态保存在委托者而不是委托目标上
 * 2 不同于类机制，不使用重写方法，通常在原型链上避免使用相同的命名
 *
 * 禁止互相委托
 * 典型的委托方式
 */