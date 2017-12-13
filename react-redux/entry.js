/**
 * Created by lenovo on 2017/6/15.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//
// function reducer (state=0, action){
//     let {type} = action;
//     return type == 'add' ? state + 1 : state;
// }
// const store = createStore(reducer, applyMiddleware());
//
// class Container extends React.Component{
//     constructor (props){
//         super(props);
//         this.changeValue = this.changeValue.bind(this);
//     }
//     changeValue () {
//         store.dispatch({
//             type : "change",
//             value : 'add'
//         })
//     }
//     render () {
//         return <div>
//             <input type="button" onClick={changeValue}/>
//             <div>value is {store.getState()}</div>
//         </div>
//     }
//     componentWillReceiveProps(nextProps) {
//
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//
//     }
//     componentWillUpdate(nextProps, nextState) {
//
//     }
//     componentDidUpdate(prevProps, prevState) {
//
//     }
// }
// ReactDOM.render(<Container/>, document.querySelector('#root'));
// store.subScribe(()=>{ReactDOM.render(<Container/>, document.querySelector('#root'));});

// class Son1 extends Component{
//     componentWillUpdate() {
//         console.log('will update son1')
//     }
//     render() {
//         return <div>{this.props.name}</div>
//     }
// }
// class Son2 extends Component{
//     shouldComponentUpdate(nextProps, nextState) {
//         if (nextProps.age == this.props.age){
//             return false
//         }
//         return true
//     }
//     componentWillUpdate() {
//         console.log('will update son2')
//     }
//     render() {
//         return <div>{this.props.age}</div>
//     }
// }
// class Father extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'jack',
//             age: 11
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick() {
//         this.setState({
//             name: this.state.name.split('').reverse().join('')
//         })
//     };
//     render() {
//         return <div>
//             <Son1 name={this.state.name}/>
//             <Son2 age={this.state.age}/>
//             <button onClick={this.handleClick}>he</button>
//         </div>
//     }
// }
// class Container extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: 'hello'
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState({
//             name: this.input.value
//         });
//     }
//     render () {
//         return <div>
//             <h4>{this.state.name}</h4>
//             <input type="text" defaultValue={this.state.name} ref={el=>this.input=el} />
//             <button onClick={this.handleClick}>haha</button>
//         </div>
//     }
//
//     componentDidMount() {
//         this.input.addEventListener('keydown', ()=>{
//             console.log('key down');
//         })
//         console.log(this.input)
//     }
//     componentWillUnmount() {
//         this.input.removeEventListener('keydonw');
//     }
// }
// class Container extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             sex: 'male'
//         }
//         this.handleSex = this.handleSex.bind(this);
//     }
//     handleSex (event.target.value) {
//         this.setState({
//             sex: value
//         })
//     };
//     render() {
//         return <div>
//             male: <input type="radio" checked={this.state.sex === 'male'} value='male'
//                onChange={this.handleSex}/>
//             female: <input type="radio" checked={this.state.sex === 'female'} value='female'
//                    onChange={this.handleSex}/>
//         </div>
//     }
// }
// class Container extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             content: []
//         };
//         this.handleContent = this.handleContent.bind(this)
//     }
//     handleContent (event) {
//         const {checked, value} = event.target;
//         let content = this.state.content;
//         if (checked && content.indexOf(value) === -1) {
//             content.push(value)
//         } else {
//             content = content.filter(item =>(item!== value))
//         }
//         this.setState({
//             content
//         })
//     }
//     render() {
//         return <div>
//             ha:<input type="checkbox" checked={this.state.content.indexOf('ha') !== -1}
//                 value='ha' onChange={this.handleContent}
//             />
//             he:<input type="checkbox" checked={this.state.content.indexOf('he') !== -1}
//                 value="he" onChange={this.handleContent}
//             />
//         </div>
//     }
// }

// class Container extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             content: []
//         };
//         this.handleContent = this.handleContent.bind(this)
//     }
//     handleContent (event) {
//
//     }
//     render() {
//         return <div>
//             ha:<input type="checkbox" checked={this.state.content.indexOf('ha') !== -1}
//                       value='ha' onChange={this.handleContent}
//         />
//             he:<input type="checkbox" checked={this.state.content.indexOf('he') !== -1}
//                       value="he" onChange={this.handleContent}
//         />
//         </div>
//     }
// }
// class Container extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             content: []
//         };
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick () {
//         console.log(this.refs.name.value)
//     }
//     render() {
//         return <div>
//             <input ref="name" defaultValue='hello'/>
//             <button onClick={this.handleClick}>click</button>
//         </div>
//     }
// }
// class Content extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: this.props.name
//         }
//     }
//     render() {
//         return <h3>
//             {this.state.name}
//         </h3>
//     }
//     componentWillReceiveProps(nextProps) {
//         this.setState({
//             name: nextProps.name
//         })
//     }
//     componentWillUpdate() {
//         console.log(`this.props is ${JSON.stringify(this.props)}`);
//         console.log(`this.state is ${JSON.stringify(this.state)}`);
//     }
//     componentDidUpdate() {
//         console.log(`this.props is ${JSON.stringify(this.props)}`);
//         console.log(`this.state is ${JSON.stringify(this.state)}`);
//     }
// }
//
//
//
// class Container extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'jack'
//         };
//         this.handleName = this.handleName.bind(this);
//     }
//
//     handleName(event) {
//         this.setState({
//             name: event.target.value
//         });
//     }
//
//     render() {
//         return <div>
//             <input type="text" value={this.state.name} onChange={this.handleName}/>
//             <Content name={this.state.name}/>
//         </div>
//     }
// }

// import {EventEmitter} from 'events'
// let emitter = new EventEmitter();
//
// class SonOne extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(event) {
//         emitter.emit('message', event.target.value);
//     }
//
//     render() {
//         return <div>
//             <input type="text" onChange={this.handleClick}/>
//         </div>
//     }
// }
// class SonTwo extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: ''
//         }
//     }
//     render() {
//         return <div>
//             <h4>{this.state.name}</h4>
//         </div>
//     }
//     componentDidMount() {
//         emitter.on('message', value => {
//             this.setState({
//                 name: value
//             });
//         })
//     }
// }
//
// class Container extends React.Component{
//     render() {
//         return <div>
//             <SonOne/>
//             <SonTwo/>
//         </div>
//     }
// }
//
// class Content extends React.Component{
//     render() {
//         return <div>23</div>
//     }
// }
//
// function hoc(Comp) {
//     return class extends React.Component{
//         render() {
//             const props = {
//                 ref: el => {this.el = el}
//             };
//             return <div>
//                 <Comp {...props}/>
//             </div>
//         }
//         componentDidMount() {
//             console.log(this.el);
//         }
//     }
// }
//
// const Container = hoc(Content);

class Item extends React.Component{
    render () {
        return <h4>{this.props.content}</h4>
    }
    componentDidUpdate() {
        console.log('update');
    }
}
class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: [11, 12, 13, 14, 15, 16]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let content = this.state.content;
        content.reverse();
        this.setState({
            content
        });
    }
    render() {
        return <div>
            {
                this.state.content.map(
                        (key, index) => <Item key={key} content={key}/>
                )
            }
            <button onClick={this.handleClick}>click</button>
        </div>
    }

}



ReactDOM.render(<Container/>, document.querySelector('#root'));