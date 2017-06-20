/**
 * Created by lenovo on 2017/6/16.
 */
import {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, link} from 'react-router'

class AboutCompoent extends Component{
    render (){
        return <div>
            <h2>About</h2>
            <h3>this is about page</h3>
        </div>
    }
}
class InboxComponent extends Component{
    render (){
        return <div>
            <h2>Inbox</h2>
            <h3>this is inbox page</h3>
        </div>
    }
}
