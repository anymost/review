import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleWare} from 'redux'
import {provider, connect} from 'react-redux'

class Container extends React.Component{
    constructor (props){
        super(props);
    }
    render (){
        return <div>
            <input type="text"/>
            <div>{{}}</div>
        </div>
    }
}