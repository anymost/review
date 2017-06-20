/**
 * Created by lenovo on 2017/3/12.
 */
var morphdom = require('morphdom');
var html = require('bel');

var el1 = html`<div class="foo"></div>`

var el2 = html`<div class="bar"></div>`

console.log(morphdom(el1, el2));