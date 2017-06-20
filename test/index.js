/**
 * Created by lenovo on 2017/5/8.
 */
/*
let start = new Date().getTime();
for(let i=0;i<100000;i++)
{

}
let end = new Date().getTime();
console.log(end-start);*/

/*let a;
console.log(typeof a);*/
/*
var funs = [];
for(let i=0; i < 3; i++){
        funs.push(function () {
            console.log(i)
        })
}
funs[0]();*/

/*
{
    foo();
    function foo (){
        console.log('block scope');
    }
}*/
let value = false;
if(value){
    function  foo() {
        console.log('one');
    }
}else{
    function foo(){
        console.log('two');
    }
}
foo();