import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'



/*
const reducer = (state, action) => {
    let {type} = action;
    switch (type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return 0;
    }
};

const store = createStore(reducer);

class Son extends React.Component{
    constructor (props){
        super(props);
    }
    render (){
        return <div>
            <h2>{this.props.value}</h2>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
        </div>
    }

}
class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    static increment () {
        console.log(store.getState());
        store.dispatch({
            type : 'INCREMENT'
        });
    };

    static decrement () {
        store.dispatch({
            type : 'DECREMENT'
        });
    };

    static render() {
        return <Son value={store.getState()} increment={Counter.increment} decrement={Counter.decrement}/>
    }
}

ReactDOM.render(<Counter/>,document.querySelector('#app'));
store.subscribe(()=>{ReactDOM.render(<Counter/>,document.querySelector('#app'));});*/

/*


const reducer = (state, action) => {
    let {type, status} = action;
    switch (type) {
        case 'REQUEST':
            return 'REQUEST '+status;
        case 'SUCCESS':
            return 'SUCCESS '+status;
        default:
            return 'FAILED '+status;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

const actionCreator = information=>(dispatch, getState)=>{
    dispatch({
        type : 'REQUEST',
        status : information
    });

    setTimeout(()=>{
        dispatch({
            type : 'SUCCESS',
            status : information
        });
    },3000);
};

class Container extends React.Component{
    constructor (props) {
        super(props);
    }
    static sendRequest () {
        store.dispatch(actionCreator('information'));
    }

   render () {

        return <div>
            <button onClick={Container.sendRequest}>request</button>
            <h3>{store.getState()}</h3>
        </div>

    }
}

ReactDOM.render(<Container/>,document.querySelector('#app'));

store.subscribe(()=>{ReactDOM.render(<Container/>,document.querySelector('#app'))});*/
/*
import React from 'react'
import {createStore} from 'redux'
function reducer (state=0, action){
    switch(action.type){
        case 'INCREMENT':
            return state++;
        case 'DECREMENT':
            return state--;
    }
}
let store = createStore(reducer);
store.subscribe(()=>{
   console.log(store.getState());
});
store.dispatch({
    type : 'INCREMENT'
});
store.dispatch({
    type : 'DECREMENT'
});
store.dispatch({
    type : 'INCREMENT'
});
store.dispatch({
    type : 'INCREMENT'
});
store.dispatch({
    type : 'INCREMENT'
});
store.dispatch({
    type : 'INCREMENT'
});
store.dispatch({
    type : 'INCREMENT'
});
*/


/*
function reducer (state=0, action){
    switch (action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}
const store = createStore(reducer);


class Counter extends React.Component{
    constructor (props){
        super(props)
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = {
             content : 0
        }
    }
    increment (){
        store.dispatch({
            type : 'INCREMENT'
        });
    }
    decrement (){
        store.dispatch({
            type : 'DECREMENT'
        });
    }
    render () {
        return <div>
            <div>{this.state.content}</div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                content : store.getState()
            })
        })
    }
}
ReactDOM.render(<Counter/>, app);*/

/*
function reducer (state, action){
    switch (action.type){
        case 'loading':
            return 'loading';
        case 'loaded':
            return 'loaded';
        default:
            return 'load';
    }
}
const store = createStore(reducer, applyMiddleware(thunk));
const delievery = ()=>(dispatch, getState)=>{
    console.log('trigger');
    dispatch({
        type : 'loading',
    });
    setTimeout(()=>{dispatch({type:'loaded'})},2000);
}

class Counter extends React.Component{
    constructor (props){
        super(props)
        this.loadData = this.loadData.bind(this);
        this.state = {
            content : 'load'
        }
    }
    loadData (){
        store.dispatch(delievery());
    }

    render () {
        return <div>
            <div>{this.state.content}</div>
            <button onClick={this.loadData}>{'load data'}</button>

        </div>
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                content : store.getState()
            })
        })
    }
}
ReactDOM.render(<Counter/>, app);*/

function reducer (state, action){
    switch(action.type){
        case 'loading':
            return 'loading';
        case 'loaded':
            return 'loaded'+action.data;
        default:
            return 'load'
    }
}
function actionCreator (dispatch){
    return new Promise(function (resolve,reject){
        dispatch({
            type : 'loadging'
        });
        return new Promise(function (resolve, reject){
            setTimeout(()=>{resolve('hello')},2000)
        }).then((response)=>({type:'loaded',data:response}))
    });
}
const store = createStore(reducer, applyMiddleware(promiseMiddleware));

class Container extends React.Component{
   constructor (props){
       super(props);
       this.state = {
           loadState : 'load'
       }
       this.handleLoad = this.handleLoad.bind(this);
   }
   handleLoad () {
       store.dispatch(actionCreator());
   }
   render (){
       return <div>
           <button onClick={this.handleLoad}>click</button>
           <h2>{this.state.loadState}</h2>
       </div>
   }
   componentDidMount () {
        store.subscribe(()=>{
            this.setState({
                loadState : store.getState()
            });
        })
   }
}
ReactDOM.render(<Container/>, app);