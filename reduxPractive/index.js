/**
 * Created by lenovo on 2017/6/15.
 */

/**

 同步状态下的redux
 import React from 'react'
 import ReactDOM from 'react-dom'
 import {createStore, applyMiddleware} from 'redux'

 function reducer(state={count:0}, action){
    let {type, value} = action;
    switch(type){
        case 'INCREMENT':
            return {count : state.count + value};
        case 'DECREMENT':
            return {count : state.count - value};
        default:
            return {count : 0};
    }
}
 const store = createStore(reducer);

 class Container extends React.Component{
    constructor (props){
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment () {
        store.dispatch({
            type : 'INCREMENT',
            value : 2
        });
    }
    decrement () {
        store.dispatch({
            type : 'DECREMENT',
            value : 1
        });
    }
    render (){
        let {count} = store.getState();
        return <div>
            <input type="button" onClick={this.increment} value="INCREMENT"/>
            <input type="button" onClick={this.decrement} value="DECREMENT"/>
            <h2>{count}</h2>
        </div>
    }
}
 ReactDOM.render(<Container/>, document.querySelector('#app'));
 store.subscribe(()=>{
    ReactDOM.render(<Container/>, document.querySelector('#app'));
});

 */


/**
 异步状态下使用redux-thunk处理异步

 import React from 'react'
 import ReactDOM from 'react-dom'
 import {createStore, applyMiddleware} from 'redux'
 import thunk from 'redux-thunk'

 function reducer (state = {state : 'initial'}, action){
    let {type} = action;
    switch (type){
        case 'loading':
            return {state : 'loading'};
        case 'loaded':
            return {state : 'load success'};
        case 'failed':
            return {state : 'load failed'};
        default :
            return {state : 'initial'};
    }
}

 const store = createStore(reducer, applyMiddleware(thunk));

 const actionCreator = ()=>(dispatch, getState) =>{
    dispatch({type : 'loading'});
    setTimeout(()=>{
        Math.round(Math.random()*10) > 5 ? dispatch({type : 'loaded'}) : dispatch({type : 'failed'});
    }, 3000);
};

 class Container extends React.Component{
    constructor (props){
        super(props);
        this.load = this.load.bind(this);
    }
    load () {
        store.dispatch(actionCreator('hello world'));
    }
    render () {
        let {state} = store.getState();
        return <div>
            <input type="button" value={state} onClick={this.load}/>
            <h3>{state}</h3>
        </div>
    }
}
 ReactDOM.render(<Container/>, document.querySelector('#app'));
 store.subscribe(()=>{
    ReactDOM.render(<Container/>, document.querySelector('#app'));
});*/

/**
 使用react-promise处理异步状态
 import React from 'react'
 import ReactDOM from 'react-dom'
 import {createStore, applyMiddleware} from 'redux'
 import promiseMiddleware  from 'redux-promise'
 import {createAction} from 'redux-actions'

 function reducer(state = {state: 'initial'}, action) {
    let {type} = action;
    switch (type) {
        case 'loading':
            return {state: 'loading'};
        case 'loaded':
            return {state: 'loaded'};
        case 'failed':
            return {state: 'failed'};
        default :
            return {state: 'initial'};
    }
}
 const store = createStore(reducer, applyMiddleware(promiseMiddleware ));




 class Container extends React.Component {
    constructor(props) {
        super(props);
        this.load = this.load.bind(this);
    }
    load() {
        let {dispatch} = store;
        dispatch({type : 'loading'});
        dispatch(createAction(
            'loaded',
            async ()=> {
                const result = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('loaded success')
                    }, 3000)
                });
                return result;
            }
        ));
    }
    render() {
        let {state} = store.getState();
        return <div>
            <input type="button" value={state} onClick={this.load}/>
            <h2>{state}</h2>
        </div>
    }
}
 ReactDOM.render(<Container/>, document.querySelector('#app'));
 store.subscribe(() => {
    ReactDOM.render(<Container/>, document.querySelector('#app'));
});*/


/**react-redux
 * UI组件 负责视图的展示 不包含逻辑
 * 容器组件 负责逻辑和状态的管理
 * connect 用于将UI组件包装成容器组件
 * mapStateToProps 用于提供输入逻辑
 * mapDispatchToProps 用于提供输出逻辑
 * Provider 用于包装容器组件，向其传递props
 *
 *
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import thunk from 'redux-thunk'

function reducer(state = {state: 'initial'}, action) {
    let {type} = action;
    switch (type) {
        case 'loading':
            return {state: 'loading'};
        case 'loaded':
            return {state: 'loaded'};
        case 'failed':
            return {state: "failed"};
        default :
            return {state: 'initial'};
    }
}


class UIComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {state, load} = this.props;
        return <div>
            <input type="button" onClick={load}/>
            <h2>{state}</h2>
        </div>
    }
}
const store = createStore(reducer, applyMiddleware(thunk));

function mapStateToProps(state) {
    return {
        state: state.state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        load: () => {
            dispatch({type: 'loading'});
            setTimeout(() => {
                (Math.random() * 10) > 5 ? dispatch({type: 'loaded'}) : dispatch({type: 'failed'});
            }, 3000);
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(UIComponent);
ReactDOM.render(<Provider store={store}><Container/></Provider>, document.querySelector('#app'));

