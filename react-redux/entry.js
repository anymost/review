/**
 * Created by lenovo on 2017/6/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'

function reducer (state=0, action){
    let {type} = action;
    return type == 'add' ? state + 1 : state;
}
const store = createStore(reducer, applyMiddleware());

class Container extends React.Component{
    constructor (props){
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }
    changeValue () {
        store.dispatch({
            type : "change",
            value : 'add'
        })
    }
    render () {
        return <div>
            <input type="button" onClick={changeValue}/>
            <div>value is {store.getState()}</div>
        </div>
    }
}
ReactDOM.render(<Container/>, document.querySelector('#root'));
store.subScribe(()=>{ReactDOM.render(<Container/>, document.querySelector('#root'));});