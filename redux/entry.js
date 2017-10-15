/**
 * Created by lenovo on 2017/4/23.
 */
// import React from 'react'
// import ReactDOM from 'react-dom'
// import {createStore} from 'redux'
// import {Provider,connect} from 'react-redux'
//
// class Counter extends React.Component{
//     constructor (props){
//         super(props);
//     }
//     render () {
//         const {value, increment} = this.props;
//         return <div>
//             <h2>{value}</h2>
//             <button onClick={increment}>increment</button>
//         </div>
//     }
// }
//
// function reducer (state={count:0}, action){  //需要的是函数，因此不能使用const reducer = ()=>{}
//     const {type} = action;
//     switch(type){
//         case "INCREMENT":
//             return Object.assign({}, state, {count: state.count+1})   //状态是只读的，不能使用state.count++的形式
//         default:
//             return state;
//     }
// }
// const store = createStore(reducer);
//
// function mapStateToProps (state){ //需要的是函数，因此不能使用const mapStateToProps = ()=>{}
//     return {
//         value : state.count
//     };
// }
// function mapDispatchToProps(dispatch, state){  //需要的是函数，因此不能使用const mapDispatchToProps = ()=>{}
//     return {
//         increment : ()=>dispatch({type:'INCREMENT'})
//     }
// }
// const Container = connect(mapStateToProps, mapDispatchToProps)(Counter);
//
//
//
// ReactDOM.render(<Provider store={store}><Container/></Provider>, document.querySelector('#app'));
/*
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)*/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux';
import {Router, Route, Link,browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CONTENT = 'CONTENT';
const LOADING = 'LOADING';
const LOADED = 'LOADED';

function incrementAction(text) {
    return {
        type: INCREMENT,
        text
    };
}
function decrementAction(text) {
    return {
        type: DECREMENT,
        text
    };
}

function contentAction(text) {
    return {
        type: CONTENT,
        text
    }
}

function loadAction() {
    return (dispatch)=>{
        dispatch({
            type: LOADING
        });
        setTimeout(()=>{
            dispatch({
                type: LOADED
            }) ;
        }, 3000);
    }
}
function number(state = 0, action) {
    const {type} = action;
    switch(type) {
        case INCREMENT:
            return  state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
function text(state = '', action) {
    const {type, text} = action;
    switch(type) {
        case CONTENT:
            return text;
        default:
            return state;
    }
}

function load(state = 'start', action) {
    const {type} = action;
    switch(type) {
        case LOADING:
            return 'loading';
        case LOADED:
            return 'loaded';
        default:
            return state;
    }
}

const reducer = combineReducers({number, text, load});

const store = createStore(reducer, applyMiddleware(thunk));

function mapStateToProps(state) {
    return {
        text: state.text,
        number: state.number,
        load: state.load
    };
}
function mapDispatchToProps(dispatch) {
    return {
        incrementNumber: (text) => {
            dispatch(incrementAction(text));
        },
        decrementNumber: (text) => {
            dispatch(decrementAction(text));
        },
        changeText: (text) => {
            dispatch(contentAction(text));
        },
        handleLoad: ()=>{
            dispatch(loadAction());
        }
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {text, number, load, handleLoad, incrementNumber, decrementNumber, changeText} = this.props;
        return (<div>
            <Header/>
            <div>{number}</div>
            <button onClick={()=>{incrementNumber()}}>+</button>
            <button onClick={()=>{decrementNumber()}}>-</button>
            <h4>{text}</h4>
            <input type="text" onChange={
                (event)=>{
                    const value = event.target.value;
                    changeText(value);
                }
            }/>
            <h3>{load}</h3>
            <button onClick={()=>{
                handleLoad();
            }}>load</button>
            <Link to="/stepOne">step one</Link>
            <Link to="/stepTwo">step two</Link>
            {this.props.children}
            <Footer/>
        </div>)
    }
}
App.propTypes = {
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    load: PropTypes.string.isRequired,
    incrementNumber: PropTypes.func.isRequired,
    decrementNumber: PropTypes.func.isRequired,
    changeText: PropTypes.func.isRequired,
    handleLoad: PropTypes.func.isRequired
};


class Header extends Component {
    constructor(props) {
        super(props);
    }
     render() {
        return <div>
            <h3> this is header</h3>
        </div>
    }
}
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h3> this is footer</h3>
        </div>
    }
}

class StepOne extends Component {
    constructor(props) {
        super(props);
    }
     render() {
        return <div>
            <h2>step one</h2>
        </div>
    }
}
class StepTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h2>step two</h2>
        </div>
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/"  component={Container}>
            <Route path="stepOne" component={StepOne}/>
            <Route path="stepTwo" component={StepTwo}/>
        </Route>
    </Router>
</Provider>, document.querySelector('#app'));
