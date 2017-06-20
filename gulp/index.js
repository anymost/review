function print (value){
    console.log(value);
}
class Person {
    constructor (name){
        this.name = name;
    }
    sayName (){
        print(this.name);
    }
}
class Chinese extends Person {
    constructor (name, age){
        super(name);
        this.age = age;
    }
    sayAge (){
        print(this.age);
    }

}
let chinese = new Chinese('jack', 22);

