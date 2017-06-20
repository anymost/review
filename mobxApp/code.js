/**
 * Created by lenovo on 2017/6/16.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {observable} from 'mobx';
import {observer} from 'mobx-react'

class AppState {

    @observable timer = 0;

    constructor (props){
        super(props);
        setInterval(()=>{
            this.timer++;
        }, 1000);
    }

    resetTimer (){
        this.timer = 0;
    }
}

let appState = new AppState();

@observer
class TimerView extends React.Component{
    constructor (props){
        super(props);
        this.onReset = this.onReset.bind(this)
    }
    onReset (){
        this.props.appState.resetTimer();
    }
    render (){
        return <div>
            <button onClick={this.onReset}>
                Second Passed : {this.props.appState.timer}
            </button>
        </div>
    }
    componentDidMount (){
        setInterval(()=>{
            appState.timer++;
        }, 1000);
    }
}
ReactDOM.render(<TimerView appState={appState}/>, document.querySelector('#app'));
