/**
 * Created by lenovo on 2017/3/29.
 */
/*
ReactDOM.render(<h1>hello world</h1>,document.querySelector('#root'));*/
/**
 * jsx是js的语法扩展，具有js的所有特性，用于描述UI界面
 * {}可以用于计算任何表达式
 * single root DOM node
 * react element是不可变的 唯一的方式是创建新的element并调用ReactDOM.render()
 */

/*let getName = function (person){
    return person.firstName +'  '+ person.nextName;
};
let person = {
    firstName : 'jack',
    nextName : 'ruby'
};

ReactDOM.render(<h1>{getName(person)}</h1>,document.querySelector('#root'));*/

/*
function getJSX(name){
    if(name){
        return <h2>has name</h2>;
    }else{
        return <h2>has not name</h2>;
    }
}

ReactDOM.render(getJSX('hello world'),document.querySelector('#root'));*/

function renderUI(){
    "use strict";
    const element = (<div>
        <h2>{new Date().toLocaleTimeString()}</h2>
    </div>);
    ReactDOM.render(element,document.querySelector('#root'));
}

setInterval(renderUI, 1000);
