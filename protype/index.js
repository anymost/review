function print(value) {
    console.log(value);
}

function getPrototype(value) {
    return Object.getPrototypeOf(value);
}

/*var a={};
print(getPrototype(a));*/

/*
var a ={
    sayName:function () {
        console.log(this.name);
    }
};
a.name='hello';
a.sayName();*/

/*var a=[1,2,3];*/
/*a=>Array.prototype=>Object.prototype=>null;*/

/*print(typeof function hello(){})*/

/*Array.prototype.printFirst = function () {
  print(this[0]);
};

var x = [1,2,3];
x.printFirst();*/

/*
var x={
    a : 1
};
var y = Object.create(x);
print(Object.getPrototypeOf(x) == Object.prototype);*/

/*var x = {
    a:undefined
};
print(x.hasOwnProperty('b'));*/


function  A(name) {
    this.name = name;
}
A.prototype.sayName = function () {
    print(this.name);
};

var a = new A('jack');
//print(Object.getPrototypeOf(a) == A.prototype);
A.prototype.sayName = null;

print(Object.getPrototypeOf(a).sayName === A.prototype.sayName);

/*
function B(name, age) {
    (function(owner, name){
        owner.name = name;
    })(this,name);
    this.age = age;
}
B.prototype = new A();
B.prototype.sayAge = function () {
    print(this.age);
};
var x = new B('jack',11);
x.sayName();*/
