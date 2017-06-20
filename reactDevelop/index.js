
const app = document.querySelector('#app');
/*
ReactDOM.render(<h1>hello</h1>, document.querySelector('#app'));*/

/*
function getName(person){
    return person.firstName + ' ' + person.lastName;
}
let person = {
    firstName : 'david',
    lastName : 'backham'
};
const element = (
    <h1>{getName(person)}</h1>
);
ReactDOM.render(element, document.querySelector('#app'));*/

/*
function renderElement(name){
    if(name == 'jack'){
        return <div>name is jack</div>
    }else{
        return <div>name is not jack</div>
    }
}
ReactDOM.render(renderElement('jack'), document.querySelector('#app'));*/


/*
function frameRender (){
    let element = (<div>
        <h1>hello !</h1>
        <h2>Now is {new Date().toLocaleString()}</h2>
    </div>);
    ReactDOM.render(element, app);
}
setInterval(frameRender, 1000);*/
/*function Father(props){
    return <h1>{props.name}</h1>;
}

ReactDOM.render(<Father name={"hello I am  name father"}/>, app);*/
/*
class Timer extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            time : new Date().toString()
        }
    }
    render (){
        return <div>
            <h1>the time is:</h1>
            <h2>{this.state.time}</h2>
        </div>
    }
    tick (){
        this.setState({
            time : new Date().toString()
        })
    }
    componentDidMount (){
        this.timer = setInterval(()=>this.tick(), 1000);
    }
    componentWillUnmount () {
        clearInterval(this.timer);
    }

}

ReactDOM.render(<Timer/>, app);*/
/*
class Outer extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            value : ''
        }
    }
    handleInput = (e)=>{
      this.setState({
          value : e.target.value
      })
    };
    render () {
        return <div>
            <input type="text" onChange={this.handleInput}/>
            <h2>{this.tate.value}</h2>
        </div>
    }
}
ReactDOM.render(<Outer/>, app);*/

/*
class Content extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            value : ''
        };
    }
    handleChange = (e)=>{
      this.setState({
          value : e.target.value
      })  ;
    };
    render () {
        return <div>
            <input type="text" onChange={this.handleChange}/>
            <h2>{this.state.value}</h2>
        </div>
    }
}

ReactDOM.render(<Content/>, app);*/
/*

function Content(props){
    let name = props.name;
    if(name == 'jack'){
        return <div>hello jack</div>;
    }else if(name == 'rose'){
        return <div>hello rose</div>
    }
}
ReactDOM.render(<Content name="rose"/>, app);*/
/**
 * 双向数据流 重点是在父组件中定义一个事件处理函数，
 * 作为子组件的属性传递进入，为子组件的事件绑定这个属性对应的处理函数
 * 这个处理函数将会改变父组件的状态
 * @param props
 * @returns {XML}
 * @constructor
 */
/*
function Login (props){
    return <button onClick={props.clickLogin}>log in</button>
}
function Logout (props){
    return <button onClick={props.clickLogout}>log out</button>
}
function Greeting (props){
    if(props.logState){
        return <h2>Welcome login</h2>
    }else{
        return <h2>Good bye</h2>
    }
}
class Control extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            logState : false
        }

    }
    clickLogin = (e) =>{
        this.setState({
           logState : true
        });
    };
    clickLogout = (e)=>{
        this.setState({
            logState : false
        });
    };
    render (){
        return <div>
            <Greeting logState={this.state.logState}/>
            <Login clickLogin={this.clickLogin}/>
            <Logout clickLogout = {this.clickLogout}/>
        </div>
    }
}
ReactDOM.render(<Control/>, app);
    */
/*
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isRender : false
        }
    }
    handleChange = (e)=>{
        let value = e.target.value;
        if(value == 'ok'){
            this.setState({
                isRender : true
            });
        }else{
            this.setState({
                isRender　: false
            });
        }
    };
    render () {
        return <div>
            <input type="text" onChange={this.handleChange}/>
            {this.state.isRender ? <h2>the rendering is ok</h2> :<h2>the rendering is bad</h2>}
        </div>
    }
}
ReactDOM.render(<Component/>, app);*/
/*
function List(props){
    const name = props.name;
    const list = name.map((item)=><li key={item}>{item}</li>);
    return <ul>{list}</ul>;
}*//*
function List (props){
    const name = props.name;
    return <li>{name}</li>;
}*/
/*

class Table extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            name : ['jack', 'jones', 'john', 'jessy','jackie','jupiter']
        }
    }
    render () {
        let name = this.state.name;
        return <ul>
            {name.map((item)=><li key={item}>{item}</li>)}
        </ul>
    }

}
ReactDOM.render(<Table/>, app);
*/
/*
class FormContent extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            name : 'jack',
            sex : 'male'
        }
    }
    handleChange =  (event)=>{
        let name = event.taget.name;

        // ES5
        // var newState = {};
        // newState[name] = event.taget.value;
        // this.setState(newState);
        this.setState({
            [name] : event.taget.value
        });
    };
    render (){
        return <form action="/" method="post"  >
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            <input type="text" name="sex" value={this.state.sex} onChange={this.handleChange}/>
            <input type="submit">submit</input>
        </form>
    }
}
ReactDOM.render(<FormContent/>,app);
*/
/*
function ShowDegree(props){
    if(props.degree>100){
        return <h2>boiling</h2>
    }else{
        return <h2>not boiling</h2>
    }
}
*/

/*
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            degree : 0
        }
    }
    handleInput = (e) => {
        this.setState({
            degress : parseInt(e.target.value)
        });
    }
    render () {
        return <div>
            <input type="text" onChange={this.handleInput}/>
            <ShowDegree degree={this.state.degress}></ShowDegree>
        </div>
    }
}

ReactDOM.render(<Calculator/>, app);*/

/**
 * 状态提升 将子组件中需要共享的状态提升到父组件中，在父组件中设定
 * 事件处理函数，作为属性传递给子组件，子组件如果执行了某种操作将会调用
 * 这个事件处理函数 间接改变父组件中的状态
 */
/*
class Son extends React.Component{
    constructor(props){
        super(props);
    }
    handleChange = (e)=>{
        this.props.handleChange(e.target.value);
    };
    render (){
        return <input type="text" onChange={this.handleChange}/>
    }
}
class Father extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
    }
    handleChange = (value)=>{
        this.setState({
            value : value
        });
    }
    render () {
        return <div><Son handleChange={this.handleChange}/><div>{this.state.value}</div></div>
    }
}
ReactDOM.render(<Father/>, app);*/

/*
function Father(props){
    return <div>
        <h1>hello</h1>
        {props.children}
    </div>
}
function Container (props){
    return (<Father>
        <h2>I am son</h2>
    </Father>);
}
    ReactDOM.render(<Container/>,app);*/
   /* function father(props){
        return <div>father</div>
    }
ReactDOM.render(<father toWhat="Father"/>, app);*/

   /*function Book(props){
       return <div>book</div>
   }
   function Pen(props){
        return <div>pen</div>
    }
    function Container(props){
       const Element = {
           Pen :Pen,
           Book : Book
       };
       const Component = Element[props.name];
       return Component;
    }
    ReactDOM.render(<Container/>, app);*/
/*

   class Form extends React.Component{
       constructor(props){
           super(props);
       }

        render (){
           return <input type="text"/>
       }
   }
   class Container extends React.Component{
       constructor(props){
           super(props);
       }
       handleClick =()=>{
         this.form.setAttributes('focus','auto');
       };
       render (){
           return <div><Form ref={(form)=>{this.form = form}}/>
           <button onClick={this.handleClick}>click</button>
           </div>
       }
   }


ReactDOM.render(<Container/>, app);*/

/*
class Form extends React.Component{
    constructor(props){
        super(props)
    }
    handleSubmit = (e)=>{
        e.preventDefault();
      var data = {
          name : this.name.value,
          sex : this.sex.value
      };
      console.log(data);
    };
    render () {
        return <form action="/" onSubmit={this.handleSubmit}>
            <input type="text" name="name" defaultValue={'jack'} ref={(input)=>{this.name = input}}/>
            <input type="text" name="sex" defaultValue={'male'} ref={(input)=>{this.sex=input}}/>
            <input type="submit" value="submit"/>
        </form>
    }
}
ReactDOM.render(<Form/>, app);
*/
/*
class Comment extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(){
        console.log('component will receive props');
    }
    componentWillUpdate () {
        console.log('component will update');
    }
    render () {
        return <div>{this.props.time}</div>
    }
}
class Container extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            time : new Date().toLocaleTimeString()
        }
    }
    render (){
        return <Comment time={this.state.time}/>
    }
    componentDidMount (){
        this.timer = setInterval(()=>{this.setState({time:new Date().toLocaleTimeString()})},1000);
    }
    componentWillUnmount (){
        clearInterval(this.timer);
    }

}
ReactDOM.render(<Container/>, app);*/
