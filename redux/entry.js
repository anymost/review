/**
 * Created by lenovo on 2017/4/23.
 */
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

function reducer (state={count:0}, action){  //需要的是函数，因此不能使用const reducer = ()=>{}
    const {type} = action;
    switch(type){
        case "INCREMENT":
            return {count:state.count+1};   //状态是只读的，不能使用state.count++的形式
        default:
            return state;
    }
}
const store = createStore(reducer);

function mapStateToProps (state){ //需要的是函数，因此不能使用const mapStateToProps = ()=>{}
    return {
        value : state.count
    };
}
function mapDispatchToProps(dispatch, state){  //需要的是函数，因此不能使用const mapDispatchToProps = ()=>{}
    return {
        increment : ()=>dispatch({type:'INCREMENT'})
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(Counter);



ReactDOM.render(<Provider store={store}><Container/></Provider>, document.querySelector('#app'));
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
