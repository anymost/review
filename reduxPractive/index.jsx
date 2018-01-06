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


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ReactDOMServer} from 'react-dom/server';
import PropTypes from 'prop-types';
//
// function reducer(state = {state: 'initial'}, action) {
//     let {type} = action;
//     switch (type) {
//         case 'loading':
//             return {state: 'loading'};
//         case 'loaded':
//             return {state: 'loaded'};
//         case 'failed':
//             return {state: "failed"};
//         default :
//             return {state: 'initial'};
//     }
// }
//
//
// class UIComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         let {state, load} = this.props;
//         return <div>
//             <input type="button" onClick={load}/>
//             <h2>{state}</h2>
//         </div>
//     }
// }
// const store = createStore(reducer, applyMiddleware(thunk));
//
// function mapStateToProps(state) {
//     return {
//         state: state.state
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         load: () => {
//             dispatch({type: 'loading'});
//             setTimeout(() => {
//                 (Math.random() * 10) > 5 ? dispatch({type: 'loaded'}) : dispatch({type: 'failed'});
//             }, 3000);
//         }
//     }
// }
//
// const Container = connect(mapStateToProps, mapDispatchToProps)(UIComponent);
// ReactDOM.render(<Provider store={store}><Container/></Provider>, document.querySelector('#app'));

// class One extends Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <div>{this.context.text}</div>
//     }
// }
// One.contextTypes = {
//     text: PropTypes.string
// };
// class Two extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <div>
//             this is two
//             <One/>
//         </div>
//     }
// }
// class Three extends Component{
//     constructor(props) {
//         super(props);
//     }
//     getChildContext() {
//         return {
//             text: 'this is one'
//         }
//     }
//     render() {
//         return <div>
//             this is three
//             <Two/>
//         </div>
//     }
// }
// Three.childContextTypes = {
//     text: PropTypes.string
// };
//ReactDOM.render(<Three/>, document.querySelector('#app'));
// class Container extends Component{
//     constructor(props) {
//         super(props);
//         this.changeText = this.changeText.bind(this);
//         this.state = {
//             text: ''
//         }
//     }
//     changeText(event) {
//         this.setState({text: event.target.value});
//     };
//     render() {
//         return <div>
//             <input type="text" onClick={this.changeText}/>
//             <h4>{this.state.text}</h4>
//         </div>
//     }
//     shouldComponentUpdate(...args) {
//         console.log(args);
//         return true;
//     }
// }
// ReactDOM.render(<Container age={11}/>, document.querySelector('#app'));

// class Son extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return <div>{this.context.text}</div>;
//     }
// }

// Son.contextTypes = {
//     text: PropTypes.string
// };

// class Container extends Component {
//     constructor(props) {
//         super(props);
//     }

//     getChildContext() {
//         return {text: 'hello'};
//     }

//     render() {
//         return <div>
//             <Son/>
//         </div>;
//     }
// }

// Container.childContextTypes = {
//     text: PropTypes.string
// };
// ReactDOM.render(<Container/>, document.querySelector('#app'));


// class Container extends React.Component{
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return <div>
//         <form action="">
//             <input type="text"/>
//             </form>
//         </div>
//     }
// }

// function Son (props) {
//     return <div ref={props.inputElement}></div>

// }

// function Container(props) {
//     return <Son inputElement={props.inputRef}></Son>
// }

// class Father extends React.Component{
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return <Container inputRef={el => this.inputElement = ref}/>
//     }
// }


// class Container extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick (){
//         this.setState((prevState)=>{
//             return {count: prevState.count + 1};
//         })
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         if (nextState.count % 2 ===1) {
//             return false;
//         } else {
//             return true;
//         }
//     }
//     render() {
//         return <div>
//             <button onClick={this.handleClick}>click</button>
//             <h4>{this.state.count}</h4>
//         </div>
//     }
// }

// ReactDOM.render(<Container/>, document.querySelector('#app'));
function Son() {
    return <div>hello world</div>
}
function Content() {
    return <div>
        <Son/>
        <h4>ha</h4>
    </div>
}

class Container extends React.Component{
    render() {
        return <div>hello world</div>
    }
    componentDidMount() {
        console.log(ReactDOMServer.renderToString(<Content/>));
    }
}

ReactDOM.render(<Container/>, document.querySelector('#app'));
