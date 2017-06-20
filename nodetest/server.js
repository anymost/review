/**
 * Created by lenovo on 2017/5/20.
 */
var events = require('events');
var util = require('util');
function Stream (){
    events.EventEmitter.call(this);
}
util.inherits(Stream, events.EventEmitter);

let stream = new Stream();
stream.on('data', (data)=>{
   console.log(data);
});

stream.emit('data', 'hello world');
util.merge()