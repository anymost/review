/**
 * Created by lenovo on 2017/4/23.
 */
/*
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'

class Counter extends React.Component{
    constructor (props){
        super(props);
    }
    render () {
        const {value, increment} = this.props;
        return <div>
            <h2>{value}</h2>
            <button onClick={increment}>increment</button>
        </div>
    }
}
const mapStateToProps = function (state){
    return {
        value : state.count
    };
};
const mapDispatchToProps = function (dispatch, state){
    return {
        increment : ()=>{dispatch({type:'INCREMENT'})}
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(Conter);

const reducer = (state={count:0}, action)=>{
    const {type} = action;
    switch(type){
        case "INCREMENT":
            return {count:state.count++}
        default:
            return state;
    }
}
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><Container/> </Provider>, document.querySelctor('#app'));*/



import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'


class UIComponent extends React.Component{
    render () {
        let {value, handleClick} = this.props;
        return <div>
            <h2>{value}</h2>
            <input type="text" value="add" onClick={handleClick}/>
        </div>
    }
}

function  mapStateToProps (state){
    return {
        value : state.count
    }
}
function mapDispatchToProps (dispatch, state){
    return {
        handleClick : ()=>{dispatch({type:'INCREMENT'})}
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(UIComponent);

function reducer (state={count:0}, action){
    const {type} = action;
    switch(type){
        case  'INCREMENT':
            return {count:state.count++};
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(<Provider  store={store}><Container/></Provider>, document.querySelector('#app'));