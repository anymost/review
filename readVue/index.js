
/**  vue定义响应式数据
function observer(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach((key)=>{
        defineReactive(data, key, data[key]);
    });
}
function defineReactive(target, key, value) {
    observer(value);
    Object.defineProperty(target, key,{
        get(){
            return  target[key];
        },
        set(val){
            console.log('change value');
            value = val;
        }
    })

}
let obj = {
    name: 'jack',
    age: 11
};
observer(obj);
obj.age = 22;*/


/** 重写数组方法 以实现对数组的监听
const methods = [
    'pop',
    'push',
    'shift',
    'unshift',
    'reverse',
    'splice',
    'sort'
];

function transformArrayMethod (array, callback) {
    for (let method of methods) {
        Array.prototype[method] = function () {
            Array.prototype[method].apply(this, arguments);
            callback({
                method: method,
                array: array,
                args: Array.prototype.slice.call(arguments)
            });
        }
    }
}*/
