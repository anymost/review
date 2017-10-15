/**
 * Created by bradyzhang on 2017/7/13.
 */

/**
 * observer
 * @param data
 */
/*function observer(data) {
    if(!data || typeof data !== 'object'){
        return;
    }
    Object.keys(data).forEach((key)=>{
        defineValue(data, key, data[key]);
    })
}
function defineValue(data, key, value){
    observer(value);
    Object.defineProperty(data, key, {
        enumerable : true,
        configurable: false,
        get() {
            return value;
        },
        set(val) {
            console.log('value has change');
            value = val;    //闭包
        }
    })
}*/

/**
 * 新增事件订阅
 * @constructor
 */
function Dep() {
    this.subscribers = [];
}

Dep.prototype.addSub = function (sub){
    this.subscribers.push(sub);
};
Dep.prototype.notify = function () {
    this.subscribers.forEach((subscriber)=>{
        subscriber.update();
    })
};

function observer(data) {
    if(!data || typeof data !== 'object'){
        return;
    }
    Object.keys(data).forEach((key)=>{
        defineValue(data, key, data[key]);
    })
}
function defineValue(data, key, value){
    let dep = new Dep(); //创建订阅对象
    observer(value);
    Object.defineProperty(data, key, {
        enumerable : true,
        configurable: false,
        get() {
            Dep.target && dep.addSub(Dep.target);
            return value;
        },
        set(val) {
            console.log('value has change');
            value = val;    //闭包
            dep.update();   //通知订阅更新 //同样是闭包
        }
    })
}

let person = {
    name : 'ruby'
};
person.name = 'jack';


function Watcher(){

}
Watcher.prototype = {
    get() {
        Dep.target = this;
        this.value = person.name;  //触发get addSup
        Dep.target = null;
    }
}


