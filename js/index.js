/**
 * Created by lenovo on 2017/2/21.
 */
/*
 var scope='global';

 function outer(){
 var scope = 'local';
 function inner(){
 console.log(scope);
 }
 return inner;
 }
 outer()();*/


/*function getUnique(){
 var count =0;
 return function (){
 return count++;
 }
 }

 var unique = getUnique();
 console.log(unique());
 console.log(unique());
 console.log(unique());
 console.log(unique());*/


/*function o(){
 return this.x+this.y;
 }

 var m = {
 x:1,
 y:2
 };

 var f=o.bind(m);
 console.log(f());*/

/*
 var array = [1,2,3,4,5];
 console.log(array.reduce(function(x, y){
 return x+y;
 })/array.length);*/


/*
 function Person(age, age){
 this.age = age;
 this.age = age;
 }
 Person.country = 'China';

 Person.prototype = {
 constructor : 'Person',
 sayName : function () {
 console.log(this.age);
 },
 sayAge : function () {
 console.log(this.age);
 }
 };


 var chinese = new Person('jack',22);
 chinese.sayName();
 chinese.sayAge();*/

/*

 function Person(age, age){
 this.age = age;
 this.age = age;
 }

 Person.prototype.sayName = function () {
 console.log(this.age);
 };
 Person.prototype.sayAge = function () {
 console.log(this.age);
 };

 Person.country = 'China';
 Person.sayCountry = function () {
 console.log(this.country);
 };

 function Chinese () {

 }
 Chinese.prototype.country = Person.country;
 Chinese.prototype.sayCountry = Person.sayCountry;

 var chinese = new Chinese();

 Chinese.prototype.country = 'England';
 chinese.sayCountry();
 console.log(chinese.constructor);*/

/*function Set() {
 this.value = {};
 this.length = 0;
 this.add.apply(this, arguments);
 }

 Set.prototype.add = function () {
 for (var i = 0; i < arguments.length; i++) {
 var arg = arguments[i];
 if (!this.value.hasOwnProperty(arg)) {
 this.value[arg] = Set.switchToString(arg);
 this.length++;
 }
 }
 return this;
 };

 Set.prototype.remove = function () {
 for (var i = 0; i < arguments.length; i++) {
 var arg = arguments[i];
 if (this.value.hasOwnProperty(arg)) {
 delete this.value[arg];
 this.length--;
 }
 }
 return this;
 };

 Set.prototype.contains = function (key) {
 return this.value.hasOwnProperty(key);
 };

 Set.prototype.getLength = function () {
 return this.length;
 };

 Set.prototype.forEach = function (func, context) {
 for (var key in this.value) {
 if (this.value.hasOwnProperty(key)) {
 func.call(context, key);
 }
 }

 };

 Set.prototype.equals = function (that) {
 if (!that instanceof Set) {
 return false;
 }
 if (that.length !== this.length) {
 return false;
 }
 for (var key in this.value) {
 if (this.value.hasOwnProperty(key)) {
 if (typeof that.value[key] == 'undefined') {
 return false;
 }
 if (this.value[key] != that.value[key]) {
 return false;
 }
 }


 }
 return true;

 };

 Set.switchToString = function (value) {
 switch (value) {
 case undefined :
 return 'undefined';
 case null :
 return 'null';
 case true :
 return 'true';
 case false :
 return 'false';
 default:
 switch (typeof value) {
 case 'number':
 return 'number';
 case 'string':
 return 'string';
 default:
 return 'object';
 }
 }
 };*/
/*
 function uniqueArray (array){
 var object = {};
 for(var i=0;i<array.length;i++){
 object[array[i]] = 'a';
 }
 array = [];
 for(var key in object){
 if(object.hasOwnProperty(key)){
 array.push(key);
 }
 }
 return array;
 }

 var array = [1,2,4,2,4,6,7,8,6,5,7,9];
 console.log(uniqueArray(array));*/


/*
 * ES6 新特性
 *
 * 1 let const
 * 2 箭头符号
 * 3 解构赋值
 * 4 模板字符串
 * 5 默认参数
 * 6 类
 * 7 模块系统
 * 8 promise
 *
 * */


/*
export function add(x, y) {
    return x + y;
}


export default {
    age: "jack",
    age: 22
};
*/


/**
 * BFC的布局规则
 * 1 内部的box在垂直方向一个接一个的摆放
 * 2 box之间垂直方向的距离由margin决定，并会发生重叠
 * 3 每个元素margin box的左边与包含块border box的左边相接触，垂直情况下也是这样
 * 4 BFC 的区域不会与float box重叠
 * 5 BFC 是页面上的一个独立隔离容器，其里面的元素不会影响外部
 * 6 计算BFC的高度上 浮动元素也参与计算
 */


/**
 * BFC 布局规则：
 * 1 box在垂直方向上一个接一个的排列
 * 2 box在垂直方向上的距离由margin决定，并会发生重叠
 * 3 每个元素margin box的左边会与包含块border box的左边相接触
 * 4 BFC区域不与float box重叠
 * 5 每个BFC 是一个独立的隔离容器，其中的元素不影响外部
 * 6 计算BFC的高度上，浮动元素也要参与计算
 */


/**
 * parentNode，childNodes
 * firstChild,lastChild
 * previousSibling,nextSibling
 * firstElementChild,lastElementChild
 * nodeType,nodeValue
 */


/*

 var XHR = null;
 if(window.XMLHttpRequest){
 XHR = window.XMLHttpRequest;
 }else if(window.ActiveXObject){
 XHR = window.ActiveXObject('Msxml.XMLHTTP.6.0');
 }

 if(XHR){
 XHR.open('GET', '/index');
 XHR.onreadystatechange = function () {
 if(XHR.readyState == 4 && XHR.status == 200){
 console.log(XHR.responseText);
 XHR = null;
 }else{
 /!*handle error*!/
 }
 }
 }
 XHR.send();*/


/**
 *  React 生命周期
 *
 *  初始化：
 *     1 getDefaultProps
 *          只调用一次，实例之间共享引用
 *     2 getInitialState
 *          初始化每个实例特有的状态
 *     3 componentWillMount
 *          render之前最后一次修改状态的机会
 *     4 render
 *          只能访问this.props 和 this.state,只有一个顶层组件
 *     5 componentDidMount
 *          渲染完成后可以获取到真实的DOM节点
 *  运行中：
 *      1 componentWillReceiveProps
 *          属性发生改变之前，可以修改属性和状态
 *      2 shouldComponentUpdate
 *          返回false阻止render调用
 *      3 componentWillUpdate
 *      4 render
 *      5 componentDidUpdate
 *  销毁：
 *      1 componentDidUnmount
 *          在删除组件之前进行一些清理操作，例如计时器和事件处理器
 */


/*
 var  Son =React.createClass({
 componentWillReceiveProps : function () {
 "use strict";

 },
 shouldComponentUpdate : function () {
 return true;
 },
 componentWillUpdate : function () {
 "use strict";

 },
 render : function () {
 "use strict";
 return <p>{this.props.age || 'hello'}</p>;

 },
 componentDidUpdate : function () {
 "use strict";

 }
 });

 var Father = React.createClass({
 getInitialState : function () {
 "use strict";
 return {age:''};
 },
 handleChange : function (event) {
 "use strict";
 this.setState({age:event.target.value});
 },
 render : function () {
 "use strict";
 return <div>
 <Son age={this.state.age}></Son>
 <input type="text" onChange={this.handleChange}/>
 </div>
 }
 });
 ReactDom.render(<Father></Father>,document.body);*/



/*var Content = React.createClass({
 render: function () {
 "use strict";
 return <p>{this.props.age}</p>
 }
 });

 var Comment = React.createClass({
 getInitialState: function () {
 "use strict";
 return {
 names: ['jack', 'jones', 'john'],
 selectName: ''
 };
 },
 handleSelectName : function (event){
 "use strict";
 this.setState({selectName:event.target.value});
 },
 render: function () {
 "use strict";
 var options = [];
 for (var item in this.state.names) {
 options.push(<option value={item}>{item}</option>)
 }
 return <div>
 <select age="age" id="age" onChange={this.handleSelectName()}>
 {options}
 </select>
 <Content content={this.state.selectName}></Content>
 </div>
 }
 });*/

/**
 * react中的通信机制
 * 父组件通过向子组件传递属性的方式进行通信
 * 父组件通过给子组件的属性设置为在父组件中定义事件处理函数，然后
 * 子组件触发这个事件处理函数完成通信
 */

var Son = React.createClass({
   render : function () {
       <div>
           <input type="text" onChange={this.props.changeName}/>
       </div>
   }
});
var Father = React.createClass({

});

/*

 var Son = React.createClass({
 render : function () {
 return <select onChange={this.props.handleSelect}>
 <option value="1">man</option>
 <option value="2">woman</option>
 </select>
 }
 });

 var Father = React.createClass({
 getInitState : function () {
 return {
 age : '',
 age : '',
 sex : ''
 }
 },
 handleChange : function (age, event) {
 "use strict";
 var newState = {};
 newState[age] = event.target.value;
 this.setState(newState);
 },
 handleSelect : function (event){
 "use strict";
 this.setState({'sex':event.target.value});
 },
 render : function () {
 return <form>
 <input type="text" onchange={this.handleChange.bind(this,'age')}/>
 <input type="text" onChange={this.handleChange.bind(this,'age')}/>
 <Son handleSelect={this.handleSelect}></Son>
 </form>
 }
 });*/

/*var changeMixin = {
 handleChange : function (key) {
 var that = this;
 return function(event){
 "use strict";
 var newState = {};
 newState[key] = event.target.value;
 that.setState(newState);
 }
 }
 };*/


/**
 * vuex
 * state：数据源
 * view：视图
 * action：view上的操作触发state的修改
 *
 *
 * vuex的理念：
 * 全局单一状态树store，store用于管理state
 * 不能直接修改state，必须通过commit mutations的方式来进行修改
 * mutation中不能执行异步操作，因为devtools需要捕捉到前一状态和后一状态的快照
 * 回调函数使这一操作变成了不可能
 * action commit mutation 并且其中可以执行异步操作
 *
 * */

/*
const store = new Vuex.Store({
    state:  {
        count : 0
    },
    mutations: {
        increment (state){
            "use strict";
            state.count++;
        }
    },
    actions : {
        increment (context) {
            "use strict";
            context.commit('increment');
        }
    }
});
store.commit('increment');
store.dispatch('increment');
*/



/**
 * JSONP的三种形式
 * 1 直接引用外部的js文件
 * 2 本地js定义一个函数，跨域的js中调用这个函数，本地函数在外部脚本定义之前
 * 3 本地js定义一个函数，定义一个script标签 该标签是get方法url 这个函数作为get方法参数的值
 * 后台拿到这个get方法对应的值 返回拼接字符串后返回
 */


/**
 * document.documentElement||document.body scrollTop scrollLeft
 * document.documentElement||document.body clientWidth clientHeight
 * document.documentElement||document.body offsetHeight offsetHeight
 * element offsetTop offsetLeft
 * getBoundingClientRect()
 */


/**
 * box-sizing:content-box|border-box
 */
//
// function RequestObject () {
//     "use strict";
//     if(window.XMLHttpRequest){
//         return window.XMLHttpRequest;
//     }else if(window.ActiveXObject){
//         return window.ActiveXObject('Msxml.XMLHTTP.6.0');
//     }else{
//         return null;
//     }
// }


/*
    var request = new window.XMLHttpRequest();
    request.open('POST','http://www.baidu.com');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
    request.onreadystatechange = function () {
      if(request.readyState == 4 && request.status == 200){
          var type = request.getResponseHeader('Content-Type');
          console.log(type);
          if(type.indexOf('xml') !== -1){
              console.log(request.responseXML);
          }else if(type === 'application/json'){
              console.log(JSON.parse(request.responseText));
          }else{
              console.log(request.responseText);
          }
      }
    };
    request.send('age=jack&age=11');*/
/*

var request = new XMLHttpRequest();
request.open('POST', 'http://www.baidu.com');
request.setRequestHeader('Content-Type', 'application/json');
request.onreadystatechange = function () {
  if(request.readyState == 4 && request.status == 200){
      var type = request.getResponseHeader('Content-Type');
      if(type.indexOf('xml') !== -1){
          console.log(request.responseXML);
      }else if(type == 'application/json'){
          console.log(JSON.parse(request.responseText));
      }else{
          console.log(request.responseText);
      }
  }
};
request.onprogress = function (){
    "use strict";

};
request.ontimeout = function () {

};
request.onerror = function () {

};
request.onabort = function () {

};
request.abort();
request.send(JSON.stringify({
    age:'jack',
    age : 11
}));*/

/*

function setCookie(age,value,expire){
    "use strict";
    var cookie = document.cookie;
    expire = (new Date().getDate()+expire).toDateString();
    cookie += ';'+age+'='+encodeURI(value)+';expires='+expire;
    document.cookie = cookie;
}

function getCookie (age) {
    "use strict";
    var cookie = document.cookie;
    cookie = cookie.split(';');
    for(var i=0;i<cookie.length;i++){
        var item = cookie[i].split('=');
        var key = item[0];
        var value = item[1];
        if(age == key){
            return value;
        }
    }
    return null;
}

function deleteCoolie(age){
    "use strict";
    var value = getCookie(age);
    if(value){
        var expire = new Date()-1;
        document.cookie = document.cookie + ';'+age+'='+value+';expires='+expire.toDateString();
    }
}
*/


/*onmessage= function (e) {
   for(var i=0;i<10;i++) {
       postMessage(e.data + ' ' + i);
       if(i==8){
          postMessage('8');
       }
   }
};*/

/**
 * flexbox
 * 主轴 交叉轴
 * flex-direction 主轴的方形
 * flex-wrap 主轴是否换行
 * flex-flow
 * justify-content 主轴上的对齐方式 flex-start flex-end center space-between
 * align-items 交叉轴上的对齐方式
 * align-content
 */

/**
 * grid
 * display:grid
 * grid-template-columns
 * grid-template-rows
 */


/**
 * redux的三大原则
 * 全局单一状态树 store 用于容纳状态的容器
 * 状态state是只读的 通过dispatch action来触发修改
 * 使用纯函数reducer来修改state
 */
/*
setTimeout(function () {
    console.log(3);
},0);
setImmediate(function () {
   console.log(1);
});

console.log(2);

process.nextTick(function () {
   console.log(4);
});*/


/**
 * js模块系统：
 * 常规：
 *  会造成变量的冲突，顺序加载，手动处理模块依赖
 *  commonJS：
 *   同步加载方式容易造成阻塞，不能非阻塞的并行加载
 *  AMD：
 *  define('id',['module1','module2'],function(module1,module2){
 *      return {}
 *  })
 *  提高了工作量
 *  CMD define（function(require, exports, module){
 *      var module1 = require('module1');
 *      exports.age = 'ha'
 *  }）
 *  模块加载逻辑偏重
 *
 *  ES6
 *  尽量静态化，在编译时就确定模块依赖，以及输入输出变量
 *
 *  webpack：
 *  模块拆分，loader加载器，智能解析依赖
 */

/*

const store = new Vuex.Store({
   state : {
       count : 0
   },
    getters : {
       addCount(state){
           "use strict";
           return state.count+1;
       }
    },
    mutations : {
       increment (state, payload){
           "use strict";
           state.count+payload;
       }
    },
    actions : {
       increment (context){
           "use strict";
           return new Promise(function (resolve, reject) {
              setTimeout(()=>{
                  context.commit('increment');
                  resolve();
              },3000);
           });

       }
    }
});
store.state.count;
store.getters.count;
store.commit('increment');
store.dispatch('increment');
Vue.set(store.state,'newName', 123);*/


/**
 * Redux createStore来创建 store
 * store dispatch方法和getState
 * dispatch action action是一个对象 有type 和payload
 * 分发给订阅了更新的reducer
 * reducer 根据previousState和action
 */

