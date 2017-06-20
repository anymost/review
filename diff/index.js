/**
 * Created by lenovo on 2017/4/24.
 */

var diffDOM = require('diff-dom');
var diff = new diffDOM();
var html = require('bel');


var div1 = '<div>hello</div>'
var div2 = '<div>world</div>'
var el1 = html`${div1}`
//var el1 =html('<div>hello</div>')
var el2 = html`${div2}`
//var el2 = html('<div>world</div>')
var difference = diff.diff(el1, el2);

diff.apply(el2, difference);
console.log(el2.toString());


