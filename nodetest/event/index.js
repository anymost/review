var events = require('events')
var util = require('util')

function Person() {
    events.EventEmitter.call(this);
}
util.inherits(Person, event.EventEmitter)

let person = new Person();
person.on('data', (event) => {
    console.log(event);
})

setTimeout(() => {
    person.emit('data', 'hello');
}, 6000)