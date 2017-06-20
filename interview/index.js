/**
 * PUT 方法类似与POST 可以上传数据
 * 如果请求的URI不存在则会创建，返回201(created)，
 * 如果URI存在则会进行修改,返回返回200或201
 * 如果既没有进行创建也没有进行修改，则会返回错误响应
 */

/**
 *301和302的区别
 *
 */

/**
 * HTTP短连接：每请求一个资源建立一个连接，请求完成后断开
 * HTTP长连接：请求完一个资源后保持该连接，后续的请求可以复用该连接
 * TCP keep-alive：检查对方是否和自己保持连接以免自己主动断开连接
 *
 */

/**
 * 伪类和伪元素
 * :代表伪类
 * ::代表伪元素
 *
 */

/**
 * 事件处理相关：
 *  var eventUtil = {
    addEvent : function (element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type, handler);
        }else{
            element['on'+type] = handler;
        }
    },
    removeEvent : function (element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.distachEvent){
            element.distachEvent('on'+type, handler);
        }else{
            element['on'+type] = null;
        }
    },
    getEvent : function (event){
        return event || window.event;
    },
    getTarget : function (event){
        return event.target || event.srcElement;
    },
    preventDefault : function (event){
        if(event.preventDefault){
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    },
    stopPropagation : function (event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}

 *
 */

/*var eventHandler = {
    addEvent : function (element, event, handler){
        if(element.addEventListener){
            element.addEventListener(event, handler);
        }else if(element.attachEvent){
            element.attachEvent('on'+event, handler);
        }else{
            element[on+'event'] = handler;
        }

    },
    removeEvent : function (element, event, handler){
        if(element.removeEventListener){
            element.removeEventListener(event, handler);
        }else if(element.detachEvent){
            element.detachEvent('on'+event, handler);
        }else{
            element['on'+event] = handler;
        }
    },
    getEvent : function (event){
        return event || window.event;
    },
    getTarget : function (event){
        return event.target || event.srcElement;
    },
    stopPropagation : function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    },
    preventDefault : function (event) {
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    }
};*/
/**
 * 事件冒泡和事件捕获：
 * 事件捕获 先执行
 * 事件捕获有兼容性问题
 * 事件捕获用于非冒泡事件的代理上
 * 不冒泡的事件包括：focusin focusout mouseover mouseout
 *
 */

/**
 * 异步加载script 创建一个script元素设定相关属性后，插入到页面中
 * 可以监听这个元素的load事件来判定该script是否加载完成
 */




/*var array = [1,2,2,3,3,3,3,3];
var obj = {};
for(var i=0;i<array.length;i++){
    if(!obj.hasOwnProperty(array[i])){
        obj[array[i]] = 1;
    }
}*/


for(let i=0;i<1000000;i++){
    let date = new Date();
}
console.log('index js execute complete');
